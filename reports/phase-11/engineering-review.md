# Project Prometheus Phase 11 Engineering Review

## Verdict

Do not approve for public launch. The repository is an impressive-looking prototype, but it is not a production-ready application. The largest risk is not one isolated bug; it is that the codebase repeatedly substitutes shims, stubs, fallback secrets, in-memory data, and ignored lint coverage for real platform guarantees. The app can pass local `tsc` and `eslint` in this environment largely because the strongest checks are bypassed, not because the implementation is launch-grade.

## Scorecard

| Area | Score | Launch posture |
| --- | ---: | --- |
| Architecture | 4/10 | Route and folder skeleton exists, but key capabilities are stubbed or duplicated. |
| Security | 2/10 | Hardcoded users, fallback secrets, weak CSRF integration, open redirect risk, no webhooks, no durable audit trail. |
| Accessibility | 5/10 | Good intent with landmarks and focus styles, but dialogs, tabs, carousel controls, 3D regions, forms, and mobile navigation are incomplete. |
| Performance | 4/10 | Heavy animation/3D dependencies are present; lint/build/test are not real launch gates; WebGL cleanup and bundle control are weak. |
| Developer Experience | 2/10 | ESLint ignores the application, TypeScript shims erase real types, dependencies use `latest`, no lockfile is committed. |
| Maintainability | 3/10 | Many one-line components and dense files are hard to review, test, or safely change. |
| Scalability | 3/10 | In-memory auth, rate limits, donations, and volunteer flows do not scale past one process. |
| Overall | 3/10 | RC-quality naming exists; RC-quality guarantees do not. |

## Critical Issues

### C-01 — ESLint is effectively disabled for all application code

**Evidence:** `eslint.config.mjs` ignores every TypeScript and TSX file under `src`, all tests, and config files. `pnpm lint` therefore reports success while skipping almost the entire codebase.

**Why it matters:** This invalidates the release checklist and hides React, accessibility, import, security, unused-code, and Next.js mistakes.

**Impact:** Defects reach production with no static lint protection. The team will believe there are “zero lint errors” when the application was not linted.

**How to fix:** Replace the ignore-only config with `eslint-config-next` plus TypeScript rules, remove `src/**/*.ts`, `src/**/*.tsx`, and `tests/**` from ignores, and fail CI on warnings.

**Code-level recommendation:**

```js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  { ignores: ['.next/**', 'node_modules/**'] },
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'react/jsx-no-leaked-render': 'warn'
    }
  }
];
```

### C-02 — Type safety is simulated with global shims and `any`

**Evidence:** `src/types/shims.d.ts` declares JSX intrinsic elements as `any`, Next metadata as `Record<string, any>`, `zod` as `any`, `NextResponse` as a minimal fake, and many library modules as `any`.

**Why it matters:** The codebase claims strict TypeScript while replacing real library types with permissive declarations.

**Impact:** Invalid React props, broken Next.js APIs, incorrect Sanity query shapes, bad payment payloads, and runtime-only failures will not be caught.

**How to fix:** Install dependencies from a reliable registry, delete nearly all custom module shims, and rely on upstream package types. Keep only legitimate asset declarations.

**Code-level recommendation:**

```ts
// keep only narrow declarations such as:
declare module '*.css';

// delete declarations for react, next, zod, next/server, next/headers,
// framer-motion, @react-three/fiber, sanity, vitest, and Playwright.
```

### C-03 — Dependency management is not reproducible

**Evidence:** `package.json` uses `latest` for most runtime and dev dependencies, and there is no committed `pnpm-lock.yaml`.

**Why it matters:** Two installs can produce different dependency graphs, breaking builds, tests, and runtime behavior. This is unacceptable for a public donation platform.

**Impact:** Production deploys are non-deterministic and vulnerable to accidental major-version changes.

**How to fix:** Pin exact package versions, commit `pnpm-lock.yaml`, use Renovate/Dependabot for controlled updates, and run `pnpm install --frozen-lockfile` in CI.

**Code-level recommendation:** Replace all `latest` ranges with exact versions and add a lockfile generated from a successful clean install.

### C-04 — Authentication is prototype-only and must not launch

**Evidence:** Users and plaintext passwords are hardcoded in `src/lib/auth/store.ts`, password checks hash the supplied password and seeded plaintext at runtime, and sessions serialize the full user object into a cookie.

**Why it matters:** Hardcoded credentials, no account lifecycle, no password hashing policy, no MFA, no revocation, no database-backed sessions, and no audit logs are launch blockers.

**Impact:** Account compromise and privilege abuse are likely. The admin account is discoverable in the repository.

**How to fix:** Use a production auth system such as Auth.js, Clerk, WorkOS, or a custom database-backed auth service with Argon2id/bcrypt, MFA, role tables, session revocation, audit logs, and OAuth provider configuration.

**Code-level recommendation:** Replace `seedUsers` and `findUserByCredentials` with database-backed user lookup and password verification; store only session IDs in cookies.

### C-05 — Production secrets have insecure fallback defaults

**Evidence:** `AUTH_SECRET` and `CSRF_SECRET` fall back to hardcoded development strings when unset.

**Why it matters:** A missing environment variable silently degrades to a known secret.

**Impact:** Session and CSRF signatures become forgeable in any misconfigured deployment.

**How to fix:** Fail fast in production if required secrets are missing or too short.

**Code-level recommendation:**

```ts
function requiredSecret(name: 'AUTH_SECRET' | 'CSRF_SECRET') {
  const value = process.env[name];
  if (process.env.NODE_ENV === 'production' && (!value || value.length < 32)) {
    throw new Error(`${name} must be configured with at least 32 characters`);
  }
  return value ?? 'development-only-secret';
}
```

### C-06 — Payment flow is incomplete and unsafe for launch

**Evidence:** Checkout creation talks directly to Stripe, but there is no webhook route, no signature verification, no idempotency key, no persisted donation record, no receipt model, and success/cancel pages are static.

**Why it matters:** Payment state cannot be trusted from browser redirects. Stripe webhooks are required to confirm successful donations.

**Impact:** Donation history, receipts, recurring subscriptions, dashboards, and accounting will be wrong or fraud-prone.

**How to fix:** Add webhook handling with Stripe signature verification, persist checkout sessions and payment intents, use idempotency keys, reconcile events asynchronously, and generate receipts only after verified payment success.

**Code-level recommendation:** Store a pending donation before checkout, pass `client_reference_id` and metadata, then mark it succeeded only from `checkout.session.completed` or invoice/payment events.

### C-07 — Donation checkout trusts the `Origin` header for redirects

**Evidence:** The checkout route builds `successUrl` and `cancelUrl` from `request.headers.get('origin')` before falling back to `NEXT_PUBLIC_SITE_URL`.

**Why it matters:** `Origin` can be absent or attacker-influenced depending on context and proxies.

**Impact:** Open redirect or brand-trust abuse in payment flows.

**How to fix:** Always derive payment return URLs from a validated configured canonical site URL, never from request headers.

**Code-level recommendation:**

```ts
const siteUrl = new URL(env.NEXT_PUBLIC_SITE_URL);
const successUrl = new URL('/donate/success', siteUrl).toString();
const cancelUrl = new URL('/donate/cancel', siteUrl).toString();
```

## High Issues

### H-01 — In-memory rate limiting does not work reliably in production

**Evidence:** `rate-limit.ts` stores buckets in a module-level `Map`.

**Why it matters:** Serverless and multi-instance deployments do not share memory, and buckets reset on cold start.

**Impact:** Brute-force login, donation spam, and volunteer spam can bypass limits.

**How to fix:** Use Redis/KV/Upstash/Vercel KV with atomic increments, TTLs, and per-route policies.

### H-02 — CSRF token lifecycle is incomplete

**Evidence:** `createCsrfToken` exists, but the login page simply renders `LoginForm`; there is no visible server-generated token path in the reviewed login page. The login API validates a token that ordinary clients cannot obtain from the current form.

**Why it matters:** Either login is unusable or CSRF validation will be bypassed later to make it work.

**Impact:** Broken authentication UX or weakened CSRF protection.

**How to fix:** Generate a CSRF token in the server page, pass it to the form as a hidden field, rotate after successful POST, and validate content type.

### H-03 — Session verification uses non-constant-time signature comparison

**Evidence:** `verifyPayload` compares signatures with `signature === expectedSignature`.

**Why it matters:** Timing-safe comparison is standard for MAC validation.

**Impact:** Lower-probability but avoidable signature oracle risk.

**How to fix:** Use `crypto.subtle.verify` or constant-time byte comparison instead of string equality.

### H-04 — CSP is weakened by `unsafe-inline` and `unsafe-eval`

**Evidence:** The CSP allows both values in `script-src`.

**Why it matters:** These directives significantly reduce protection against XSS.

**Impact:** If any injection bug exists, CSP will not be an effective containment layer.

**How to fix:** Use nonce-based scripts, remove `unsafe-eval`, and make development-only exceptions conditional.

### H-05 — API request parsing has no size, content-type, or malformed JSON handling

**Evidence:** API routes call `await request.json()` directly.

**Why it matters:** Malformed JSON throws, large bodies waste resources, and non-JSON content can produce noisy errors.

**Impact:** Unhandled 500s, DoS exposure, and inconsistent API responses.

**How to fix:** Add a shared request parser that enforces `content-type: application/json`, max bytes, and safe parse errors.

### H-06 — Volunteer email includes unsanitized user-controlled HTML

**Evidence:** `parsed.data.project` is interpolated into an HTML email string.

**Why it matters:** HTML injection in emails can create phishing or layout manipulation risk.

**Impact:** Trust and deliverability risk for operational notifications.

**How to fix:** Escape all interpolated values or use a templating library that escapes by default.

### H-07 — Admin redirect target is wrong for unauthorized users

**Evidence:** Admin layout redirects non-admin users to `/dashboard`.

**Why it matters:** An authenticated non-admin repeatedly trying `/admin` gets redirected to a page they may be allowed to access, masking authorization failures.

**Impact:** Poor auditability and confusing access-denied UX.

**How to fix:** Redirect unauthenticated users to login and authenticated non-admin users to a dedicated forbidden page or return `notFound()`/403.

### H-08 — Sanity preview is not securely implemented

**Evidence:** `SANITY_PREVIEW_SECRET` is listed but no preview enable/disable route is implemented, and draft mode uses token presence once enabled.

**Why it matters:** Preview access requires explicit secret validation and controlled draft-mode cookies.

**Impact:** Editors cannot reliably preview content, and future ad-hoc preview code may expose drafts.

**How to fix:** Add signed preview routes, validate `SANITY_PREVIEW_SECRET`, set draft mode intentionally, and log preview access.

### H-09 — Sanity client can silently use a placeholder project ID

**Evidence:** `createClient` uses `projectId: sanityConfig.projectId || 'placeholder'`.

**Why it matters:** Misconfigured production should fail loudly.

**Impact:** Empty CMS responses, fallback content in production, and silent launch with wrong content.

**How to fix:** Validate all required CMS environment variables at startup and fail in production.

### H-10 — 3D/WebGL components lack robust cleanup and fallback controls

**Evidence:** WebGL scenes are client-only and dynamic, but no explicit context-loss, canvas disposal, performance budget, or device capability gate exists.

**Why it matters:** Mobile devices and low-end GPUs can suffer battery drain, memory pressure, and jank.

**Impact:** Lighthouse, INP, and accessibility regressions.

**How to fix:** Gate 3D by reduced motion, save-data, viewport, hardware concurrency, and intersection visibility; dispose materials/geometries and provide static image fallback.

## Medium Issues

### M-01 — Components are compressed into unreadable one-line implementations

**Evidence:** Many production components contain full logic and JSX on one line.

**Why it matters:** Code review, debugging, a11y review, and safe refactoring become unnecessarily difficult.

**Impact:** High defect rate and slow maintenance.

**How to fix:** Format components across readable blocks and split complex components into small files.

### M-02 — Dialog implementation is not a real modal

**Evidence:** The modal uses a `div role="dialog"` but does not trap focus, handle Escape, close on overlay intentionally, label content uniquely, or restore focus robustly.

**Why it matters:** WCAG keyboard and screen-reader requirements are not fully met.

**Impact:** Keyboard users can tab behind dialogs or lose context.

**How to fix:** Use a proven primitive such as Radix Dialog/shadcn Dialog or integrate the existing focus trap correctly.

### M-03 — Tabs lack roving keyboard behavior

**Evidence:** Tabs respond to click only; arrow-key navigation is absent.

**Why it matters:** ARIA tabs require keyboard interaction patterns.

**Impact:** Reduced accessibility for keyboard and assistive tech users.

**How to fix:** Implement roving tabindex with ArrowLeft/ArrowRight/Home/End behavior or use Radix Tabs.

### M-04 — Test coverage is superficial

**Evidence:** Tests only verify basic rendering, deterministic hashing, donation summary, and a CSP header existence check.

**Why it matters:** Critical flows such as auth, CSRF, protected routes, Stripe, webhooks, Sanity fallback, accessibility, and dashboards are not covered.

**Impact:** False confidence and regressions in launch-critical paths.

**How to fix:** Add integration tests for API routes, auth state, protected layouts, donation checkout error paths, Sanity fallbacks, and accessibility snapshots with axe.

### M-05 — Homepage mixes CMS data, motion, schema, and presentation in one server component

**Evidence:** `src/app/(public)/page.tsx` contains fetching, metadata, JSON-LD, dynamic imports, and all page sections.

**Why it matters:** This file will become brittle as content and personalization expand.

**Impact:** Hard to test and hard to optimize.

**How to fix:** Split into server data loader, SEO builder, and section components with typed props.

### M-06 — CSS and Tailwind token strategy is too small for the stated design system

**Evidence:** Only a small set of semantic CSS variables and Tailwind color mappings exist.

**Why it matters:** A large multi-page platform needs tokenized spacing, typography, elevation, motion, z-index, container, and component-state scales.

**Impact:** Visual drift and duplicated styling.

**How to fix:** Promote Phase 2 tokens into complete CSS variables and Tailwind theme extensions.

### M-07 — Image and media strategy is incomplete

**Evidence:** `SanityImageView` handles basic Sanity images but does not enforce required alt for all image sources, priority rules, art direction, or blur fallback quality.

**Why it matters:** NGO trust and performance depend on controlled media delivery.

**Impact:** Potential LCP and accessibility regressions.

**How to fix:** Create image policies, typed media variants, default sizes, and CMS validations for alt text and dimensions.

### M-08 — Search page and route appear static/non-functional

**Why it matters:** Search is listed as a platform feature, but there is no search backend or indexing strategy in the implementation.

**Impact:** Users cannot discover reports, projects, or stories reliably.

**How to fix:** Implement search only when ready with a real provider/index; otherwise remove from launch scope and navigation.

### M-09 — Dashboard data is static and not tied to persisted user state

**Why it matters:** Donor and volunteer dashboards must reflect verified donations, subscriptions, projects, and applications.

**Impact:** Users see misleading account data.

**How to fix:** Introduce durable models and server actions/API queries keyed by authenticated user ID.

### M-10 — Environment validation is incomplete

**Evidence:** `src/lib/env.ts` validates only a few variables and omits `AUTH_SECRET`, `CSRF_SECRET`, Stripe, Resend, and preview secrets.

**Why it matters:** Missing launch-critical env vars should fail deployment checks.

**Impact:** Silent runtime failures.

**How to fix:** Expand environment schema with server-only and public groups and production-specific requirements.

## Low Issues

### L-01 — README is too small for onboarding

**Why it matters:** New engineers need setup, env, commands, architecture, testing, and deployment instructions.

**How to fix:** Add concise developer setup and CI instructions.

### L-02 — `tsconfig.tsbuildinfo` is committed

**Why it matters:** Build artifacts create noisy diffs and machine-specific state.

**How to fix:** Add it to `.gitignore` and remove from git.

### L-03 — Navigation and footer content are partially hardcoded

**Why it matters:** Editorial teams cannot manage critical global content.

**How to fix:** Fetch global settings/navigation/footer from Sanity with fallback and cache tags.

### L-04 — Code formatting is inconsistent with production readability expectations

**Why it matters:** Dense files defeat Prettier’s purpose and make code ownership harder.

**How to fix:** Run Prettier after expanding code into readable JSX and TypeScript structures.

## Production Launch Checklist

### Must pass before any public launch

- [ ] Remove permissive TypeScript shims and restore real package types.
- [ ] Replace ignore-only ESLint config with Next.js, React, TypeScript, import, accessibility, and security lint rules.
- [ ] Pin dependency versions and commit `pnpm-lock.yaml`.
- [ ] Make `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm build`, and `pnpm test` mandatory CI gates.
- [ ] Replace seeded auth with production authentication, durable user storage, password hashing, MFA path, session revocation, and audit logs.
- [ ] Enforce required production secrets with fail-fast validation.
- [ ] Implement Stripe webhook signature verification, idempotency, durable donation state, receipt generation, and recurring subscription reconciliation.
- [ ] Replace in-memory rate limiting with Redis/KV atomic limits.
- [ ] Complete CSRF token generation and rotation across all mutating forms.
- [ ] Remove `unsafe-inline` and `unsafe-eval` from production CSP using nonce/hash strategy.
- [ ] Add integration and API tests for auth, dashboard protection, donation checkout, volunteer application, CMS fallback, and security errors.
- [ ] Run axe, keyboard, screen-reader, color-contrast, reduced-motion, and mobile touch-target audits.
- [ ] Establish Lighthouse CI budgets for JS, LCP, CLS, INP, and third-party scripts.
- [ ] Gate 3D/WebGL by device capability, save-data, reduced motion, and viewport visibility.
- [ ] Validate Sanity preview mode, environment configuration, webhook/cache invalidation, and image policies.
- [ ] Add deployment observability: structured logs, error reporting, analytics consent, uptime checks, and alerting.

### Should pass before launch candidate sign-off

- [ ] Refactor dense one-line components into maintainable files.
- [ ] Split homepage into typed section components and a separate SEO/JSON-LD builder.
- [ ] Add forbidden/access-denied states for protected routes.
- [ ] Expand README onboarding and deployment documentation.
- [ ] Remove generated build artifacts from version control.
- [ ] Add Playwright journeys for anonymous visitor, donor checkout, login/logout, dashboard, and admin authorization.

## Final Approval Decision

Rejected. This repository should not be publicly launched as an NGO donation platform until the critical and high issues are fixed and verified by real CI, real package types, real tests, and real payment/auth infrastructure.
