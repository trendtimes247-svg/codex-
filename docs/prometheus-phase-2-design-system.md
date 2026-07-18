# Project Prometheus — Phase 2 World-Class Design System & Brand Foundation

**Scope:** Production-ready brand and design-system specification only. This document does not define product strategy, page design, or React implementation.  
**System ambition:** Apple-level restraint, Stripe-level trust, Linear-level precision, Notion-level clarity, Vercel-level performance, Framer-level motion, and OpenAI-level editorial confidence.

---

## 1. Brand Personality

### 1.1 Brand essence

**Quietly powerful humanity.** Project Prometheus should feel like an institution users can trust with money, time, data, stories, and hope. The brand must be emotionally resonant without being sentimental, luxurious without being exclusionary, and technologically advanced without feeling cold.

### 1.2 Core values

| Value | Design implication | Product implication |
|---|---|---|
| Trust | Calm composition, visible structure, high contrast, restrained motion. | Every claim should be traceable to evidence, reports, or transparent methodology. |
| Dignity | Human-first imagery, generous space, respectful copy. | Beneficiaries are represented as people with agency, never as props. |
| Clarity | Simple language, direct hierarchy, predictable controls. | Users understand what each action does before committing. |
| Stewardship | Durable typography, timeless color, low visual waste. | The platform feels responsible with attention, funds, data, and resources. |
| Hope | Warm highlights, uplifting art direction, progress-oriented modules. | Stories point to measurable change, not helplessness. |
| Precision | Consistent tokens, alignment, measured motion, rigorous states. | Interfaces feel reliable during high-trust actions like donating and applying. |

### 1.3 Emotional tone

- **Primary emotional tone:** grounded, hopeful, intelligent, humane.
- **Secondary tone:** premium, editorial, composed, transparent.
- **Never:** manipulative, frantic, charity-cliché, childish, overly corporate, visually noisy.

### 1.4 Visual identity principles

1. **Evidence has beauty:** data, reports, statistics, and governance content receive the same craft as stories.
2. **Whitespace is trust:** generous spacing communicates calm and reduces cognitive load.
3. **Motion is meaning:** animation must clarify hierarchy, continuity, state, or narrative pacing.
4. **Luxury is restraint:** use fewer colors, fewer typefaces, fewer effects, and stronger alignment.
5. **Humanity is texture:** photography, captions, editorial rhythm, and imperfect real-world context soften the technical system.
6. **Accessibility is identity:** visible focus, readable type, and robust contrast are core brand signals.

### 1.5 Voice and messaging

| Attribute | Use | Avoid |
|---|---|---|
| Clear | “Your monthly gift funds verified local programs.” | “Join our transformational multi-sectoral impact ecosystem.” |
| Accountable | “Last updated July 2026. Methodology below.” | “We are changing everything.” |
| Warm | “Thank you for choosing to help.” | “Complete transaction.” |
| Specific | “$50 can fund two school supply kits.” | “Your gift makes a difference.” |
| Respectful | “People receiving support.” | “The helpless,” “the needy,” or savior-language. |
| Confident | “Here is how funds are allocated.” | Defensive or evasive language. |

---

## 2. Color System

### 2.1 Color philosophy

The palette combines **deep institutional green**, **warm editorial paper**, **brass-gold accent**, and restrained functional colors. The system intentionally avoids oversaturated charity clichés. Semantic tokens, not raw palette names, must be used in components.

Contrast ratios below are computed against the recommended foreground/background pair. Ratios marked **AA** meet WCAG 2.2 AA for normal text at 4.5:1 or higher. Ratios marked **UI** meet the 3:1 non-text/UI threshold.

### 2.2 Core semantic tokens — light theme

| Token | Hex | RGB | HSL | Contrast | Recommended usage |
|---|---|---|---|---:|---|
| `color.background` | `#F7F3EA` | `247 243 234` | `42 45% 94%` | `18.96:1` with black | Main page canvas; warm editorial base. |
| `color.surface` | `#FFFFFF` | `255 255 255` | `0 0% 100%` | `16.66:1` with text | Cards, modals, raised panels. |
| `color.surface-muted` | `#EFE7D8` | `239 231 216` | `39 42% 89%` | `13.75:1` with text | Section bands, quiet cards, editorial insets. |
| `color.text` | `#17201D` | `23 32 29` | `160 16% 11%` | `16.66:1` on white AA | Primary text. |
| `color.text-muted` | `#52615B` | `82 97 91` | `156 8% 35%` | `6.32:1` on white AA | Secondary copy and metadata. |
| `color.border` | `#D8CDBB` | `216 205 187` | `37 28% 79%` | `1.47:1` decorative | Hairlines; not sole state indicator. |
| `color.primary` | `#0B3D3A` | `11 61 58` | `176 69% 14%` | `12.05:1` with white AA | Primary brand blocks, buttons, key nav. |
| `color.primary-foreground` | `#FFFFFF` | `255 255 255` | `0 0% 100%` | `12.05:1` on primary AA | Text/icons on primary. |
| `color.secondary` | `#365A53` | `54 90 83` | `168 25% 28%` | `7.73:1` with white AA | Secondary brand emphasis, filters, tags. |
| `color.secondary-foreground` | `#FFFFFF` | `255 255 255` | `0 0% 100%` | `7.73:1` on secondary AA | Text/icons on secondary. |
| `color.accent` | `#C6A15B` | `198 161 91` | `39 48% 57%` | `8.65:1` with black AA | Premium highlights, metric accents, selected states with dark text. |
| `color.accent-foreground` | `#111111` | `17 17 17` | `0 0% 7%` | `8.05:1` on accent AA | Text/icons on accent. |
| `color.success` | `#0E7A4F` | `14 122 79` | `156 79% 27%` | `5.36:1` with white AA | Success messages, completed status. |
| `color.warning` | `#9A5A00` | `154 90 0` | `35 100% 30%` | `5.57:1` with white AA | Warning text/badges; use with icon. |
| `color.error` | `#B42318` | `180 35 24` | `4 76% 40%` | `6.57:1` with white AA | Form errors, destructive actions. |
| `color.info` | `#2563EB` | `37 99 235` | `221 83% 53%` | `5.17:1` with white AA | Informational status, links requiring blue semantics. |
| `color.focus` | `#7A4DF3` | `122 77 243` | `256 87% 63%` | `4.80:1` on white AA | Keyboard focus ring; never remove. |
| `color.link` | `#064E9B` | `6 78 155` | `211 93% 32%` | `8.33:1` on white AA | Inline links. |

### 2.3 Core semantic tokens — dark theme

| Token | Hex | RGB | HSL | Contrast | Recommended usage |
|---|---|---|---|---:|---|
| `color.background` | `#08110F` | `8 17 15` | `167 36% 5%` | `16.98:1` with text AA | Main dark canvas. |
| `color.surface` | `#111C19` | `17 28 25` | `164 24% 9%` | `15.59:1` with text AA | Cards, modals, nav. |
| `color.surface-muted` | `#1B2A26` | `27 42 38` | `164 22% 14%` | `13.49:1` with text AA | Elevated but quiet panels. |
| `color.text` | `#F5F1E8` | `245 241 232` | `42 39% 94%` | `16.98:1` on background AA | Primary text. |
| `color.text-muted` | `#B8C6BF` | `184 198 191` | `150 11% 75%` | `10.70:1` on background AA | Secondary copy. |
| `color.border` | `#30423D` | `48 66 61` | `163 16% 22%` | `2.08:1` decorative | Borders and separators. |
| `color.primary` | `#72D6C9` | `114 214 201` | `172 55% 64%` | `11.10:1` on background AA | Primary dark-mode brand action. |
| `color.primary-foreground` | `#061210` | `6 18 16` | `170 50% 5%` | `10.45:1` on primary AA | Text/icons on primary. |
| `color.secondary` | `#A5C6BE` | `165 198 190` | `165 22% 71%` | `8.97:1` on background AA | Secondary actions and tags. |
| `color.accent` | `#E3C276` | `227 194 118` | `42 66% 68%` | `11.66:1` on background AA | Premium highlights and selected states. |
| `color.success` | `#62D39A` | `98 211 154` | `150 56% 61%` | `10.25:1` on background AA | Success states. |
| `color.warning` | `#F2B84B` | `242 184 75` | `39 87% 62%` | `10.72:1` on background AA | Warnings with icon/text. |
| `color.error` | `#FF8A80` | `255 138 128` | `5 100% 75%` | `8.33:1` on background AA | Errors/destructive warning text. |
| `color.info` | `#8CB4FF` | `140 180 255` | `219 100% 77%` | `9.40:1` on background AA | Informational states. |
| `color.focus` | `#B9A3FF` | `185 163 255` | `254 100% 82%` | `10.21:1` on background AA | Keyboard focus ring. |
| `color.link` | `#A7C7FF` | `167 199 255` | `218 100% 83%` | `11.90:1` on background AA | Inline links. |

### 2.4 Interactive state tokens

| State | Light token | Dark token | Rule |
|---|---|---|---|
| Hover | `color.primary-hover: #07302E` | `color.primary-hover: #8EE4D8` | Minimum visible delta; do not rely on color only. |
| Active | `color.primary-active: #052422` | `color.primary-active: #B2F0E8` | Used for pressed buttons and selected nav. |
| Disabled background | `#E3DACC` | `#23312D` | Disabled controls require text and cursor/ARIA state. |
| Disabled text | `#7A837E` | `#6D7D77` | Disabled text may be below AA because disabled controls are exempt; keep legible. |
| Focus ring | `0 0 0 3px rgba(122,77,243,.36)` | `0 0 0 3px rgba(185,163,255,.42)` | Always visible on keyboard focus. |
| Selection | `rgba(198,161,91,.36)` | `rgba(227,194,118,.32)` | Text selection and selected list rows. |

### 2.5 Usage rules

- Body text must use `color.text` or approved semantic status tokens that pass AA.
- Gold accent is not a body-text color on light backgrounds; use with dark foreground or as non-text decoration.
- Borders may fail text contrast because they are decorative; focus, errors, selected states, and validation must not rely on borders alone.
- Data visualization palettes must be separately tested for contrast, color blindness, and adjacent distinguishability.

---

## 3. Typography

### 3.1 Font recommendations

| Role | Preferred font | Fallback | Rationale |
|---|---|---|---|
| Display | `Canela`, `Editorial New`, or `Cormorant Garamond` | Georgia, serif | Editorial luxury, emotional headlines, human warmth. |
| Heading/UI | `Inter`, `Suisse Intl`, or `Avenir Next` | system-ui, sans-serif | Precise, neutral, legible, modern. |
| Body | `Inter` or `Source Sans 3` | system-ui, sans-serif | High readability across long-form content and UI. |
| Monospace | `IBM Plex Mono` or `JetBrains Mono` | ui-monospace, monospace | Reports, data labels, receipts, IDs, code-like references. |

Recommended production default if licensing is undecided: **Inter + Cormorant Garamond + IBM Plex Mono** because all are broadly available and performant with self-hosting.

### 3.2 Fluid type scale

| Token | CSS clamp | Use | Line height | Letter spacing |
|---|---|---|---|---|
| `text.hero` | `clamp(3.75rem, 8vw, 8.5rem)` | Home/campaign display | `0.88` | `-0.065em` |
| `text.display` | `clamp(3rem, 6vw, 6rem)` | Editorial feature titles | `0.92` | `-0.055em` |
| `text.h1` | `clamp(2.5rem, 4.8vw, 4.75rem)` | Page title | `0.98` | `-0.045em` |
| `text.h2` | `clamp(2rem, 3.6vw, 3.5rem)` | Section title | `1.02` | `-0.035em` |
| `text.h3` | `clamp(1.5rem, 2.5vw, 2.25rem)` | Subsection title | `1.10` | `-0.025em` |
| `text.h4` | `clamp(1.25rem, 1.8vw, 1.5rem)` | Card title | `1.18` | `-0.015em` |
| `text.body-lg` | `clamp(1.125rem, 1.4vw, 1.25rem)` | Lead/body intro | `1.65` | `-0.005em` |
| `text.body` | `clamp(1rem, 1vw, 1.0625rem)` | Main body | `1.65` | `0` |
| `text.body-sm` | `clamp(.875rem, .9vw, .9375rem)` | Metadata/help text | `1.55` | `0.005em` |
| `text.label` | `clamp(.75rem, .8vw, .8125rem)` | Labels, badges | `1.25` | `0.06em` uppercase optional |
| `text.stat` | `clamp(2.5rem, 5vw, 5.5rem)` | Large metrics | `0.95` | `-0.05em` |
| `text.mono` | `clamp(.8125rem, .8vw, .875rem)` | IDs/data | `1.45` | `0` |

### 3.3 Weight system

- Display serif: `400`, `500`, optional italic `400`.
- UI sans: `400`, `500`, `600`, `700` only.
- Avoid ultra-light text; it fails perceived readability.
- Avoid too many weights in one viewport; use size, spacing, and tone first.

### 3.4 Typographic rules

- Long-form prose width: `60–72ch`.
- UI labels: sentence case by default; uppercase only for short metadata labels.
- Buttons: `font-weight: 600`, no all-caps for donation/payment actions.
- Numbers/statistics: tabular numbers enabled via `font-variant-numeric: tabular-nums`.
- Links in prose must be underlined or otherwise visually distinguishable beyond color.

---

## 4. Spacing System

### 4.1 Spacing scale

Use a 4px base with 8px rhythm for layout. Tokens may be represented as rem assuming 16px root.

| Token | px | rem | Use |
|---|---:|---:|---|
| `space.0` | 0 | 0 | Reset. |
| `space.1` | 4 | .25 | Fine gaps, icon offset. |
| `space.2` | 8 | .5 | Tight inline spacing. |
| `space.3` | 12 | .75 | Form internal gap. |
| `space.4` | 16 | 1 | Default component gap. |
| `space.5` | 20 | 1.25 | Card internal tight padding. |
| `space.6` | 24 | 1.5 | Standard padding. |
| `space.8` | 32 | 2 | Section item gap. |
| `space.10` | 40 | 2.5 | Card large padding. |
| `space.12` | 48 | 3 | Compact section spacing. |
| `space.16` | 64 | 4 | Standard section spacing. |
| `space.20` | 80 | 5 | Editorial section spacing. |
| `space.24` | 96 | 6 | Large section spacing. |
| `space.32` | 128 | 8 | Hero and major chapter spacing. |
| `space.40` | 160 | 10 | Cinematic breaks. |

### 4.2 Containers

| Token | Width | Use |
|---|---:|---|
| `container.xs` | `40rem / 640px` | Forms, narrow prose. |
| `container.sm` | `48rem / 768px` | Editorial article. |
| `container.md` | `64rem / 1024px` | Content pages. |
| `container.lg` | `80rem / 1280px` | Dashboards, listing pages. |
| `container.xl` | `90rem / 1440px` | Rich editorial and maps. |
| `container.full` | `100%` | Immersive modules. |

Container padding: `24px` mobile, `32px` tablet, `48px` desktop, `64px` wide.

### 4.3 Grid system

- Mobile: 4 columns, 16px gutters.
- Tablet: 8 columns, 24px gutters.
- Desktop: 12 columns, 32px gutters.
- Wide: 12 columns, 40px gutters.
- Baseline rhythm: 4px, with layout steps aligned to 8px.
- Prose must not span full grid; use 6–8 columns max on desktop.

### 4.4 Breakpoints

| Token | Min width | Purpose |
|---|---:|---|
| `screen.xs` | `375px` | Small phones. |
| `screen.sm` | `640px` | Large phones. |
| `screen.md` | `768px` | Tablets. |
| `screen.lg` | `1024px` | Small laptops. |
| `screen.xl` | `1280px` | Desktop. |
| `screen.2xl` | `1536px` | Large desktop. |
| `screen.3xl` | `1920px` | Exhibition/editorial displays. |

### 4.5 Radius scale

| Token | Value | Use |
|---|---:|---|
| `radius.none` | `0` | Editorial image edges, sharp separators. |
| `radius.xs` | `4px` | Badges, small controls. |
| `radius.sm` | `8px` | Inputs, compact cards. |
| `radius.md` | `12px` | Buttons, cards. |
| `radius.lg` | `20px` | Feature cards, modals. |
| `radius.xl` | `28px` | Hero panels, donation widgets. |
| `radius.full` | `999px` | Pills, avatars, segmented controls. |

### 4.6 Elevation and shadow

| Token | Value | Use |
|---|---|---|
| `shadow.none` | `none` | Flat editorial layouts. |
| `shadow.hairline` | `0 0 0 1px rgba(23,32,29,.08)` | Subtle card boundary. |
| `shadow.sm` | `0 1px 2px rgba(23,32,29,.06), 0 1px 1px rgba(23,32,29,.04)` | Buttons and inputs. |
| `shadow.md` | `0 10px 30px rgba(23,32,29,.10), 0 2px 8px rgba(23,32,29,.06)` | Cards, popovers. |
| `shadow.lg` | `0 24px 70px rgba(23,32,29,.16), 0 8px 24px rgba(23,32,29,.08)` | Modals/drawers. |
| `shadow.glow` | `0 0 0 1px rgba(198,161,91,.22), 0 20px 80px rgba(198,161,91,.18)` | Rare premium emphasis. |

Dark shadows use transparent black plus subtle light borders: `0 20px 80px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.06)`.

---

## 5. Component Tokens

### 5.1 Buttons

| Token | Value |
|---|---|
| `button.height.sm/md/lg/xl` | `36px / 44px / 52px / 60px` |
| `button.padding.x` | `16px / 20px / 24px / 28px` by size |
| `button.radius` | `12px` or `999px` for pill CTAs |
| `button.font` | UI sans, `600`, `text.body-sm` or `text.body` |
| `button.primary.bg` | `color.primary` light, `color.primary` dark |
| `button.primary.fg` | `color.primary-foreground` |
| `button.secondary.bg` | transparent or `color.surface-muted` |
| `button.border` | `1px solid color.border` |
| `button.focus` | `color.focus` ring, 3px offset-compatible |
| `button.motion` | `150ms transform/background`, translateY(-1px) on hover where motion allowed |

### 5.2 Cards

- Padding: `24px` compact, `32px` standard, `48px` feature.
- Radius: `16–28px` depending on prominence.
- Border: hairline token; never use heavy outlines.
- Media: fixed aspect-ratio tokens `1:1`, `4:3`, `3:2`, `16:9`, `21:9`.
- Hover: lift max `-2px`, shadow upgrade one level, no content jump.

### 5.3 Inputs

- Height: `48px` minimum; `56px` preferred for donation/payment.
- Radius: `12px`.
- Label: always visible, above field.
- Border: `color.border`; focus ring plus border color change.
- Error: error text, icon, `aria-describedby`, and summary for multi-step forms.
- Help text: `text.body-sm`, muted color, max 80ch.

### 5.4 Navigation

- Header height: `72px` desktop, `64px` mobile.
- Sticky header may use glass background only after scroll threshold.
- Active state: text weight + underline/bar + `aria-current`; not color only.
- Mega menu max width: `container.lg`, keyboard navigable, escape closes.

### 5.5 Modals

- Width tokens: `480px`, `640px`, `800px`, `960px`.
- Overlay: `rgba(8,17,15,.56)` with blur optional max `8px`.
- Focus trapped, title associated by `aria-labelledby`.
- Close button at top-right and escape support.
- Mobile transforms into bottom sheet only when task-safe.

### 5.6 Drawers

- Width: `min(420px, 100vw)` standard; `min(680px, 100vw)` complex.
- Entry: from right for detail, from bottom for mobile actions.
- Must preserve scroll position behind drawer.
- Include landmarks and close affordance.

### 5.7 Tooltips

- Only for supplemental text; never hide essential information.
- Delay: `400ms` pointer, instant on focus.
- Dismissible with escape.
- Max width `280px`; use popover/dialog for interactive content.

### 5.8 Tables

- Header sticky optional.
- Row height: `48px` minimum.
- Numeric columns right-aligned and tabular.
- Responsive strategy: preserve table for data; provide card summary only as enhancement.
- Captions and summaries required for complex tables.

### 5.9 Timelines

- Vertical on mobile, alternating/editorial only on wide screens.
- Each item has date, title, description, evidence link, optional media.
- Decorative line must not be the only relationship indicator.

### 5.10 Statistics

- Stat number uses `text.stat` and tabular numbers.
- Must include label, time period, source/methodology link.
- Animated counters disabled under reduced motion and capped under 900ms otherwise.

### 5.11 Donation widgets

- Minimum touch target: `48px`.
- Suggested amount buttons use selected state with `aria-pressed`.
- Frequency toggle uses segmented control with explicit labels.
- Always show final amount, frequency, fees/tip if applicable, and privacy note before payment.
- Trust module within or adjacent: receipt, tax note, secure payment, fund allocation link.

---

## 6. Motion System

### 6.1 Durations

| Token | Duration | Use |
|---|---:|---|
| `motion.instant` | `0ms` | Reduced motion replacement. |
| `motion.fast` | `120ms` | Hover/focus color. |
| `motion.base` | `180ms` | Button/card hover. |
| `motion.moderate` | `260ms` | Menus, disclosure, tabs. |
| `motion.slow` | `420ms` | Modal/drawer entry. |
| `motion.story` | `700ms` | Editorial reveals, once per chapter. |

### 6.2 Easings

| Token | Cubic bezier | Use |
|---|---|---|
| `ease.standard` | `cubic-bezier(.2, 0, 0, 1)` | General UI. |
| `ease.out` | `cubic-bezier(.16, 1, .3, 1)` | Entrances and reveals. |
| `ease.in` | `cubic-bezier(.7, 0, .84, 0)` | Exits. |
| `ease.emphasized` | `cubic-bezier(.2, .8, .2, 1)` | Hero/story emphasis. |
| `ease.spring-soft` | platform spring equivalent | Small interactive lift. |

### 6.3 Hover animations

- Buttons: background/foreground transition, optional `translateY(-1px)`.
- Cards: shadow/ring/media scale max `1.015` with overflow hidden.
- Links: underline reveal or underline thickness change; no disappearing underline for prose links.
- Do not animate layout dimensions in dense forms.

### 6.4 Focus states

- Focus is not a motion flourish; it is a persistent accessibility state.
- Focus ring appears within `motion.fast` or instantly.
- Focus must remain visible in high contrast and forced-colors modes.

### 6.5 Page transitions

- Default: no full-page transition for task flows.
- Editorial pages: fade/translate content by max `16px`, under `420ms`.
- Donation/application/auth flows: preserve user state; transition only step content, not page shell.

### 6.6 Scroll animations

- Use intersection reveals only for editorial content, not critical task instructions.
- Max reveal distance: `24px`.
- Trigger once; do not repeatedly animate while scrolling.
- No scroll hijacking, forced scroll, or inaccessible parallax.

### 6.7 Reduced motion alternatives

- Replace transforms/parallax with opacity or instant state changes.
- Disable animated counters; show final value.
- Disable auto-playing 3D camera movement.
- Preserve all content and controls.

---

## 7. Iconography and Illustration

### 7.1 Icon style

- Style: refined outline icons with occasional filled status symbols.
- Stroke width: `1.75px` standard, `2px` at small sizes, optical correction allowed.
- Corners/caps: rounded line caps and joins.
- Geometry: 24px base grid, 20px live area, consistent optical centering.
- Sizes: `16`, `20`, `24`, `32`, `48`.
- Accessibility: decorative icons `aria-hidden`; meaningful icons have labels or adjacent text.

### 7.2 Icon usage rules

- Never rely on icons alone for critical actions.
- Status icons must be paired with text and color.
- Donation/payment/security icons must be familiar, not experimental.
- Use one icon family; do not mix stroke styles.

### 7.3 Illustration guidelines

- Editorial, restrained, textural, and human.
- Prefer abstract systems diagrams for complex interventions.
- Avoid cartoonish mascot language.
- Use warm neutrals, deep green, muted gold, and low-saturation support tones.
- Ensure illustrations do not carry essential information without text.

---

## 8. Glassmorphism and Depth

### 8.1 Philosophy

Glass and depth are premium accents, not the core visual language. Use them to create atmosphere in navigation, hero overlays, maps, and data panels. Never place critical low-contrast text over busy glass.

### 8.2 Blur and transparency tokens

| Token | Value | Use |
|---|---|---|
| `glass.blur.sm` | `8px` | Sticky header over calm background. |
| `glass.blur.md` | `16px` | Floating panels and map controls. |
| `glass.blur.lg` | `28px` | Hero atmospheric layer, rare. |
| `glass.light.bg` | `rgba(255,255,255,.68)` | Light glass surface. |
| `glass.dark.bg` | `rgba(8,17,15,.62)` | Dark glass surface. |
| `glass.border.light` | `rgba(255,255,255,.42)` | Light glass top edge. |
| `glass.border.dark` | `rgba(255,255,255,.10)` | Dark glass edge. |

### 8.3 Layer hierarchy

1. Background canvas.
2. Editorial media / atmospheric gradients.
3. Base surfaces and content cards.
4. Floating controls / sticky nav.
5. Drawers and modals.
6. Toasts and critical alerts.

### 8.4 Shadows, reflections, and lighting

- Use one virtual light source: top-left at 10–20 degrees.
- Reflections must be subtle: `linear-gradient` highlights below `12%` opacity.
- Avoid neon glows except rare campaign moments.
- Dark mode depth should rely on borders, luminance shifts, and shadow, not pure black layers.

### 8.5 3D depth rules

- 3D modules are progressive enhancement.
- Provide static image and text fallback.
- Camera motion must stop under reduced motion.
- Do not place required form controls inside WebGL canvases.
- Keep 3D asset budgets explicit: under 2MB compressed for initial interactive module unless user-initiated.

---

## 9. Accessibility Requirements

### 9.1 WCAG 2.2 AA baseline

The design system must make compliant implementation the default. Designers and developers should not need to remember accessibility rules manually for every component; tokens and component specs should encode them.

### 9.2 Keyboard focus

- Every interactive component has a documented focus state.
- Focus order follows DOM order and visual layout.
- Composite widgets define arrow-key behavior only when matching established ARIA patterns.
- Focus trap required for modals/drawers; restored to trigger on close.

### 9.3 Color contrast

- Normal text: minimum `4.5:1`.
- Large text and UI graphics: minimum `3:1`.
- Preferred body contrast: `7:1` or higher.
- Color is never the sole indicator of error, success, active, or selected states.

### 9.4 Screen reader compatibility

- Components specify accessible name, role, state, and description requirements.
- Icon-only controls require visible tooltip on hover/focus and programmatic label.
- Complex data components include summary, caption, and accessible table alternative.

### 9.5 Motion reduction

- Global reduced-motion token switches durations to `0ms` or opacity-only.
- Animated counters, parallax, scroll reveals, and 3D camera motion are disabled.
- No essential content depends on movement.

### 9.6 Touch targets

- Minimum target: `24px` per WCAG 2.2; platform preferred minimum: `44px`.
- Donation, payment, navigation, and form controls: `48px` preferred.
- Spacing between adjacent touch targets: at least `8px` when possible.

---

## 10. Design Tokens

### 10.1 Token architecture

Use four layers:

1. **Primitive tokens:** raw palette, spacing, typography, radii, shadows.
2. **Semantic tokens:** background, text, primary, error, focus, surface.
3. **Component tokens:** button, input, card, nav, modal, donation widget.
4. **Mode tokens:** light, dark, high contrast, reduced motion.

### 10.2 JSON token structure

```json
{
  "$schema": "https://tokens.studio/schemas/tokens.json",
  "primitive": {
    "color": {
      "green-950": { "value": "#08110F" },
      "green-900": { "value": "#0B3D3A" },
      "green-700": { "value": "#365A53" },
      "green-300": { "value": "#72D6C9" },
      "paper-50": { "value": "#F7F3EA" },
      "paper-0": { "value": "#FFFFFF" },
      "gold-500": { "value": "#C6A15B" },
      "blue-600": { "value": "#2563EB" },
      "red-700": { "value": "#B42318" },
      "amber-700": { "value": "#9A5A00" },
      "emerald-700": { "value": "#0E7A4F" },
      "violet-500": { "value": "#7A4DF3" }
    },
    "space": {
      "1": { "value": "0.25rem" },
      "2": { "value": "0.5rem" },
      "3": { "value": "0.75rem" },
      "4": { "value": "1rem" },
      "6": { "value": "1.5rem" },
      "8": { "value": "2rem" },
      "12": { "value": "3rem" },
      "16": { "value": "4rem" },
      "24": { "value": "6rem" },
      "32": { "value": "8rem" }
    },
    "radius": {
      "sm": { "value": "0.5rem" },
      "md": { "value": "0.75rem" },
      "lg": { "value": "1.25rem" },
      "xl": { "value": "1.75rem" },
      "full": { "value": "999px" }
    }
  },
  "semantic": {
    "light": {
      "background": { "value": "{primitive.color.paper-50}" },
      "surface": { "value": "{primitive.color.paper-0}" },
      "text": { "value": "#17201D" },
      "text-muted": { "value": "#52615B" },
      "primary": { "value": "{primitive.color.green-900}" },
      "primary-foreground": { "value": "#FFFFFF" },
      "accent": { "value": "{primitive.color.gold-500}" },
      "focus": { "value": "{primitive.color.violet-500}" }
    },
    "dark": {
      "background": { "value": "{primitive.color.green-950}" },
      "surface": { "value": "#111C19" },
      "text": { "value": "#F5F1E8" },
      "text-muted": { "value": "#B8C6BF" },
      "primary": { "value": "{primitive.color.green-300}" },
      "primary-foreground": { "value": "#061210" },
      "accent": { "value": "#E3C276" },
      "focus": { "value": "#B9A3FF" }
    }
  }
}
```

### 10.3 CSS variable structure

```css
:root {
  --color-background: #f7f3ea;
  --color-surface: #ffffff;
  --color-surface-muted: #efe7d8;
  --color-text: #17201d;
  --color-text-muted: #52615b;
  --color-border: #d8cdbb;
  --color-primary: #0b3d3a;
  --color-primary-foreground: #ffffff;
  --color-accent: #c6a15b;
  --color-accent-foreground: #111111;
  --color-success: #0e7a4f;
  --color-warning: #9a5a00;
  --color-error: #b42318;
  --color-info: #2563eb;
  --color-focus: #7a4df3;

  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --text-hero: clamp(3.75rem, 8vw, 8.5rem);
  --text-h1: clamp(2.5rem, 4.8vw, 4.75rem);
  --text-body: clamp(1rem, 1vw, 1.0625rem);

  --radius-md: 0.75rem;
  --shadow-md: 0 10px 30px rgba(23, 32, 29, 0.10), 0 2px 8px rgba(23, 32, 29, 0.06);
  --focus-ring: 0 0 0 3px rgba(122, 77, 243, 0.36);
}

[data-theme="dark"] {
  --color-background: #08110f;
  --color-surface: #111c19;
  --color-surface-muted: #1b2a26;
  --color-text: #f5f1e8;
  --color-text-muted: #b8c6bf;
  --color-border: #30423d;
  --color-primary: #72d6c9;
  --color-primary-foreground: #061210;
  --color-accent: #e3c276;
  --color-focus: #b9a3ff;
}
```

### 10.4 Tailwind theme mapping

```ts
export const prometheusTheme = {
  colors: {
    background: "var(--color-background)",
    surface: "var(--color-surface)",
    muted: "var(--color-surface-muted)",
    text: "var(--color-text)",
    "text-muted": "var(--color-text-muted)",
    border: "var(--color-border)",
    primary: "var(--color-primary)",
    "primary-foreground": "var(--color-primary-foreground)",
    accent: "var(--color-accent)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
    focus: "var(--color-focus)"
  },
  fontFamily: {
    display: ["var(--font-display)"],
    sans: ["var(--font-sans)"],
    mono: ["var(--font-mono)"]
  },
  borderRadius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1.25rem",
    xl: "1.75rem",
    full: "999px"
  },
  boxShadow: {
    md: "var(--shadow-md)",
    focus: "var(--focus-ring)"
  }
} as const;
```

### 10.5 TypeScript constants shape

```ts
export const tokens = {
  color: {
    background: "var(--color-background)",
    surface: "var(--color-surface)",
    text: "var(--color-text)",
    primary: "var(--color-primary)",
    focus: "var(--color-focus)"
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    4: "1rem",
    8: "2rem",
    16: "4rem",
    32: "8rem"
  },
  motion: {
    fast: "120ms",
    base: "180ms",
    moderate: "260ms",
    slow: "420ms"
  }
} as const;
```

---

## 11. Component Inventory

### 11.1 Priority P0 — foundation and launch-critical

- App shell
- Header
- Mobile navigation
- Footer
- Skip links
- Language selector
- Accessibility preferences control
- Search trigger and search input
- Breadcrumbs
- Button
- Icon button
- Link
- Badge
- Tag
- Card
- Media card
- Stat card
- Impact metric
- Donation amount selector
- Donation frequency segmented control
- Donation summary
- Form field
- Text input
- Textarea
- Select
- Checkbox
- Radio group
- Toggle/switch
- File upload
- Form error summary
- Alert
- Toast
- Modal
- Drawer
- Tabs
- Accordion/disclosure
- Tooltip
- Popover
- Pagination
- Loading skeleton
- Empty state
- Error state
- Avatar
- Logo lockup
- Prose/rich text renderer
- Responsive image
- Video embed with transcript

### 11.2 Priority P1 — platform depth

- Mega menu
- Command palette
- Faceted filters
- Sort control
- Data table
- Chart wrapper
- Accessible chart summary
- Map panel
- Timeline
- Stepper
- Progress indicator
- Calendar/event card
- Event registration widget
- Volunteer opportunity card
- Application status card
- Report card
- Download card
- Partner logo grid
- Testimonial/quote block
- Newsletter signup
- Share controls
- Cookie consent
- Auth form layout
- Dashboard shell
- Notification center
- User menu
- Settings panel
- Audit log table

### 11.3 Priority P2 — advanced / award-caliber enhancements

- Scrollytelling chapter shell
- Interactive impact map controls
- 3D canvas wrapper with fallback
- Cinematic story hero
- Before/after impact slider
- Data story annotation
- AI assistant panel
- Semantic search answer card
- Personalized recommendation rail
- Campaign progress module
- Donor wall with privacy controls
- Volunteer certificate preview
- Partner portal document vault
- Guided tour
- Split-screen editorial module
- Ambient background system

### 11.4 Component documentation requirements

Every component must document:

- Purpose and usage.
- Anatomy.
- Props/API when implementation begins.
- Variants and sizes.
- States: default, hover, focus, active, loading, disabled, error, success.
- Accessibility notes: keyboard, screen reader, ARIA, focus behavior.
- Content guidelines.
- Do/don’t examples.
- Performance considerations.
- Test requirements.

---

## 12. Documentation and Governance

### 12.1 Single source of truth

The design system should be maintained as a versioned product with:

- Token package.
- Component documentation.
- Design library.
- Accessibility checklist.
- Contribution process.
- Release notes.
- Deprecation policy.

### 12.2 Naming conventions

- Use semantic names for product code: `primary`, `surface`, `error`, `focus`.
- Use primitive names only in token definitions: `green-900`, `paper-50`, `gold-500`.
- Component tokens follow `component.property.state` format, such as `button.background.hover`.
- Avoid brand-color names in component APIs.

### 12.3 Quality gates

Before a token or component reaches production-ready status:

1. Design review completed.
2. Accessibility review completed.
3. Light and dark mode reviewed.
4. Keyboard and screen reader behavior specified.
5. Responsive behavior specified.
6. Content guidance written.
7. Performance impact understood.
8. Token names approved.

### 12.4 Versioning

- Patch: non-breaking token documentation or value refinements that preserve intent.
- Minor: new tokens, variants, or components.
- Major: renamed/removed tokens or breaking component behavior.

### 12.5 Design-system success metrics

- Component reuse rate.
- Accessibility defect rate by component.
- Token adoption percentage.
- Design-to-build cycle time.
- Visual regression count.
- Bundle impact of shared primitives.
- Number of one-off styles introduced per feature.

---

## 13. Final Design-System Principles

1. **Calm first, cinematic second.** The platform can be beautiful only if it is usable.
2. **Tokens before taste.** Repeatable decisions beat subjective styling.
3. **Accessibility is visible craft.** Focus rings, contrast, spacing, and clear states are part of the brand.
4. **Luxury is not fragility.** Premium visuals must survive real content, localization, slow networks, admin states, and edge cases.
5. **Evidence should feel designed.** Reports, charts, tables, and footnotes deserve the same refinement as hero stories.
6. **Motion should never steal control.** Users remain in charge of pace, focus, and comprehension.
7. **The system must age well.** Prefer durable editorial foundations over trendy effects.
