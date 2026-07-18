# Project Prometheus RC1 Release Checklist

- [x] TypeScript check passes in current environment.
- [x] Lint command passes in current environment.
- [x] Security headers configured.
- [x] CSRF added to login mutation.
- [x] Rate limiting added to sensitive APIs.
- [x] Robots, sitemap, and RSS endpoints added.
- [ ] `pnpm install` passes in CI with registry access.
- [ ] `pnpm build` passes in CI.
- [ ] `pnpm test` passes in CI.
- [ ] Lighthouse report captured from production build.
- [ ] Manual WCAG 2.2 AA audit completed on preview URL.
- [ ] Payment webhook verification implemented before accepting live payments.
