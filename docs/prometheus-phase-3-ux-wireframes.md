# Project Prometheus — Phase 3 UX Architecture, User Flows & High-Fidelity Wireframes

**Scope:** UX architecture, navigation, page hierarchy, user journeys, component placement, animation planning, accessibility notes, and production-ready textual wireframes.  
**Foundation:** This specification assumes the Phase 1 platform architecture and Phase 2 design-system tokens are approved. It does not redefine product strategy, brand foundations, or implementation code.

---

## 1. Complete Sitemap

### 1.1 Global routes and page purpose

| Route | Page | Purpose | Primary users | Primary actions |
|---|---|---|---|---|
| `/` | Home | Introduce the mission, prove trust quickly, and route users to donate, volunteer, explore impact, or learn. | All users | Donate, volunteer, explore impact, search. |
| `/about` | About | Explain the organization, origin, governance posture, and operating model. | Visitors, donors, media, partners | Read history, meet team, verify legitimacy. |
| `/mission` | Mission | Present the problem, theory of change, values, and program philosophy. | Visitors, donors, researchers | Understand mission, view programs. |
| `/vision` | Vision | Describe long-term ambition and future impact targets. | Donors, CSR, government, media | Explore roadmap, partner. |
| `/leadership` | Leadership | Introduce executive leadership with credentials and accountability. | Donors, government, media | Contact media/partnership, verify leadership. |
| `/trustees` | Trustees | Show trustees/board members, committees, governance role, conflicts policy. | Donors, government, researchers | Download governance docs. |
| `/team` | Team | Humanize staff and departments; support recruiting and media credibility. | Visitors, applicants, media | Browse team, view careers. |
| `/projects` | Projects index | Search and filter active/completed projects by cause, location, status, funding need. | Donors, volunteers, CSR, researchers | Filter, open project, donate. |
| `/projects/[slug]` | Project detail | Explain project story, budget, location, progress, updates, outcomes, and ways to help. | Donors, volunteers, partners | Donate to project, volunteer, share. |
| `/programs` | Programs index | Explain major program pillars and how projects map to strategy. | Visitors, donors, researchers | Explore program, compare pillars. |
| `/programs/[slug]` | Program detail | Present intervention model, eligibility, outcomes, stories, reports, team, and funding. | Donors, beneficiaries, partners | Donate, apply, download report. |
| `/impact` | Impact | Show aggregate outcomes, maps, methodology, and proof. | Donors, CSR, researchers, media | Explore metrics, download data. |
| `/impact/map` | Impact map | Visualize geographic footprint, project status, and location-level outcomes. | Donors, partners, researchers | Filter map, open location/project. |
| `/transparency` | Transparency | Central trust hub for financials, governance, policies, safeguarding, audit trail. | Donors, government, media | Download documents, review policies. |
| `/reports` | Reports | Searchable library of impact, research, financial, and policy reports. | Researchers, media, partners | Filter, read HTML, download. |
| `/reports/annual` | Annual reports | Dedicated annual reports archive with executive summaries and downloads. | Donors, government, media | Read/download annual reports. |
| `/csr` | CSR partnerships | Convert corporate social responsibility teams with partnership models and proof. | CSR partners | Submit proposal, download diligence pack. |
| `/donate` | Donate | Primary donation flow entry for one-time, monthly, tribute, project, and major gifts. | Donors | Complete donation. |
| `/volunteer` | Volunteer | Recruit volunteers and route to opportunities by skill, location, schedule, accessibility. | Volunteers | Find/apply for opportunity. |
| `/events` | Events | Publish upcoming events, fundraisers, webinars, field briefings, and volunteer sessions. | Visitors, volunteers, donors | Register, add to calendar. |
| `/gallery` | Gallery | Curated visual archive of dignified photography, films, field work, and campaigns. | Visitors, media, donors | Browse, share, request media. |
| `/stories` | Stories | Editorial storytelling hub connecting people, places, programs, and measurable outcomes. | Visitors, donors, media | Read story, donate/share. |
| `/blog` | Blog / Insights | Timely updates, thought leadership, explainers, field notes, announcements. | Subscribers, researchers, media | Read, subscribe, filter. |
| `/faq` | FAQ | Answer common questions about donations, volunteering, programs, finances, privacy. | All users | Search answers, contact. |
| `/contact` | Contact | Route inquiries by intent with clear SLAs and safe contact options. | All users | Submit inquiry. |
| `/careers` | Careers | Recruit staff/interns and communicate culture, benefits, open roles. | Applicants | View/apply for role. |
| `/dashboard` | Dashboard | Personalized donor/volunteer/user account overview. | Returning users | View donations, volunteering, events, preferences. |
| `/dashboard/donations` | Donation history | Receipts, recurring gifts, tax docs, saved payment preferences. | Donors | Download receipt, manage monthly gift. |
| `/dashboard/volunteering` | Volunteer activity | Applications, shifts, hours, certificates, onboarding tasks. | Volunteers | Manage shifts, upload docs. |
| `/admin` | Admin | Staff operations dashboard for content, donations, forms, volunteers, reports. | Administrators | Review tasks, publish, export. |
| `/admin/content` | Admin content | Editorial workflow, previews, approvals, scheduled publishing. | Editors/admins | Create/review/publish. |
| `/admin/forms` | Admin forms | Intake management for contact, volunteer, CSR, applications. | Staff/admins | Triage, assign, export. |
| `/search` | Search | Global search across pages, projects, reports, FAQs, stories, events. | All users | Search/filter/open result. |
| `/privacy` | Privacy | Explain data collection, rights, retention, cookies, donor privacy. | All users | Review rights, manage preferences. |
| `/terms` | Terms | Terms of use, donation conditions, acceptable behavior. | All users | Review terms. |
| `/404` | 404 | Help users recover from broken/missing pages. | All users | Search, navigate, report issue. |

### 1.2 Route relationships

- Home routes into every major journey but prioritizes donate, volunteer, impact, and stories.
- Programs are strategic pillars; projects are concrete implementations within one or more programs.
- Impact aggregates program/project outcomes and links to methodology, reports, and transparency.
- Transparency links to reports, annual reports, trustees, leadership, policies, and financial downloads.
- Dashboard personalizes public journeys for donors and volunteers.
- Admin manages the operational back office and must not leak into public navigation.

---

## 2. Homepage High-Fidelity Wireframe

### 2.1 Homepage section stack

| Order | Section | Purpose | Headline | Content | Layout | Interactions | Animation | Accessibility | Responsive behavior | Expected components |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Global header | Provide orientation and primary routes. | N/A | Logo, nav, search, language, donate, account. | 72px desktop sticky shell; 64px mobile. | Mega menu, search overlay, account menu. | Header glass activates after scroll. | Skip link precedes header; visible focus; `aria-current`. | Mobile collapses to bottom-safe drawer menu. | Header, MegaMenu, SearchTrigger, Button. |
| 2 | Hero | Create immediate emotional connection and trust. | “Every act of care should create measurable change.” | 1–2 sentence mission, primary donate CTA, secondary impact CTA, trust microcopy. | Split editorial: left text, right cinematic image/video card with stat overlay. | CTA hover, pause video, open impact proof. | Text fade-up 16px; media scale 1.01; reduced motion static. | H1 first; video has captions/transcript; no autoplay audio. | Stacks text above media; CTAs full width on small phones. | Hero, Button, ResponsiveImage/Video, StatCard. |
| 3 | Trust strip | Answer “can I trust this?” above fold. | “Transparent by design.” | Audited reports, secure donation, governance, impact methodology. | Four compact proof cards. | Cards link to transparency/report pages. | Staggered opacity only. | Each proof has text plus icon. | Horizontal scroll only if accessible; preferred 2x2 grid. | ProofCard, Icon, Link. |
| 4 | Impact snapshot | Show measurable results. | “Proof you can inspect.” | 3–5 top KPIs with dates and methodology link. | Large stat row plus mini chart. | Hover reveals source; click opens impact. | Count-up only if no reduced motion. | Final numbers rendered in DOM; chart has table summary. | Cards stack; chart becomes summary table. | Statistics, ChartSummary, CTA. |
| 5 | Featured projects | Route donors/volunteers to tangible work. | “Active projects needing support.” | 3 featured project cards with status, location, need, CTA. | 3-column cards. | Filter chips, card hover, donate/learn actions. | Card lift max 2px. | Full card not the only link; clear labels. | Single-column list with sticky filter button. | ProjectCard, Tag, Progress, Button. |
| 6 | Story chapter | Build emotion through a human narrative. | “A story of change, not charity.” | Featured story excerpt, portrait, program link, quote. | Magazine layout with pull quote and image. | Read story, share, related program. | Subtle chapter reveal; no scroll hijack. | Alt text, quote semantics, reading order text first. | Image below intro; quote remains text. | StoryFeature, Quote, Image. |
| 7 | Ways to help | Clarify action choices. | “Choose how you want to help.” | Donate, volunteer, partner, attend, share. | Five action cards with icons and short copy. | Hover, keyboard focus, CTA per card. | Background tint transition. | Icons decorative; action text explicit. | 1-column cards; donation first. | ActionCard, Icon, Button. |
| 8 | Program pillars | Explain operating model. | “Focused programs. Connected outcomes.” | 4–6 program pillars with short descriptions. | Alternating cards or editorial grid. | Filter by cause; open program. | Minimal fade. | Headings nested correctly. | Two-column tablet, one-column mobile. | ProgramCard, Tag. |
| 9 | Transparency module | Make financial/governance proof visible. | “See where support goes.” | Fund allocation visualization, latest annual report, policies. | Left copy, right donut/bar chart with download links. | Download report, view methodology. | Chart draws only if motion allowed. | Chart table fallback; download file size/type shown. | Chart becomes stacked rows. | ReportCard, ChartSummary, DownloadLink. |
| 10 | Events/news | Show freshness and community. | “Latest from the field.” | Upcoming event, latest news, field note. | 3-card editorial rail. | Register/read/subscribe. | Card reveal on viewport. | Dates use semantic time. | Horizontal rail becomes vertical list. | EventCard, ArticleCard, NewsletterMini. |
| 11 | Newsletter | Capture ongoing relationship. | “Receive transparent updates.” | Topic/frequency preferences and privacy note. | Compact form with email and preferences. | Inline validation, submit confirmation. | Success state crossfade. | Label visible, error summary, consent text. | Full-width stacked form. | NewsletterForm, Checkbox, Alert. |
| 12 | Footer | Provide comprehensive utility and trust routes. | N/A | Sitemap, contact, legal, social, charity IDs, language, emergency contacts. | Multi-column footer. | Links, language switch, back to top. | None. | Landmark `contentinfo`; logical order. | Accordion groups on mobile. | Footer, LinkList, SocialLinks. |

---

## 3. Page Wireframes

### 3.1 Home

**Page hierarchy:** Header → Hero → Trust strip → Impact snapshot → Featured projects → Story chapter → Ways to help → Program pillars → Transparency → Events/news → Newsletter → Footer.

**Implementation notes:** Home is editorial but not slow. LCP must be the hero image or H1, never a video. Donation CTA remains visible in header and repeated after proof modules.

### 3.2 About

**Purpose:** Establish legitimacy, history, people, values, and governance links.

**Wireframe:**
1. Hero: “Built for trust. Powered by people.” with founding summary and portrait/office/field image.
2. Origin story: timeline from founding to current scale.
3. Values: six cards aligned to Phase 2 values.
4. Operating model: diagram showing donors, partners, field teams, beneficiaries, reporting loop.
5. Leadership preview: executive cards linking to Leadership.
6. Trustees/governance CTA: board, policies, financials.
7. Careers CTA: culture and open roles.
8. Contact/media strip.

**Components:** Hero, Timeline, ValueCard, DiagramPanel, PersonCard, CTASection, Footer.

**Accessibility:** Timeline uses ordered list; leadership cards expose names/titles as text; diagrams have text equivalents.

### 3.3 Projects

**Purpose:** Help users find tangible work by location, cause, funding need, and status.

**Wireframe:**
1. Search/filter hero with count of projects and active filters.
2. Filter sidebar desktop: cause, region, status, funding need, volunteer availability, date.
3. Results grid: project cards with image, location, program, status, progress, primary action.
4. Map/list toggle with accessible list always available.
5. Featured urgent project band.
6. Empty state with suggested filters and contact link.

**Components:** SearchInput, FilterPanel, ProjectCard, MapPanel, Pagination, EmptyState, CTA.

**Accessibility:** Filters are form controls with clear labels; map pins duplicate in list; keyboard order goes search → filters → results.

### 3.4 Programs

**Purpose:** Explain strategic pillars and connect them to projects, eligibility, outcomes, and reports.

**Wireframe:**
1. Hero: “Programs designed for measurable change.”
2. Program pillar cards with icon, audience, outcome metric, link.
3. Comparison matrix: problem, intervention, geography, evidence, ways to help.
4. Featured outcome story per program.
5. Related reports and methodology CTA.

**Components:** ProgramCard, ComparisonTable, StatCard, StoryCard, ReportCard.

**Accessibility:** Comparison matrix includes caption and responsive table behavior; icons are decorative unless labeled.

### 3.5 Donate

**Purpose:** Convert intent into secure, confident giving.

**Wireframe:**
1. Donation shell with progress indicator: Amount → Details → Payment → Confirmation.
2. Left panel: donation form; right panel: impact explanation, security, tax, privacy.
3. Amount selector: suggested amounts, custom amount, fund selector.
4. Frequency selector: one-time/monthly/annual.
5. Donor details: guest/account, receipt email, optional dedication.
6. Payment method: wallet first where supported, card/bank alternatives.
7. Review summary before submit.
8. Confirmation: receipt, dashboard prompt, share/update preferences.

**Components:** DonationWidget, Stepper, AmountSelector, SegmentedControl, FormField, PaymentPanel, TrustPanel, Alert.

**Accessibility:** Errors appear inline and in summary; all amounts use buttons with `aria-pressed`; payment iframe labels must be tested.

### 3.6 Volunteer

**Purpose:** Match volunteers to meaningful opportunities with clear expectations.

**Wireframe:**
1. Hero with volunteer impact stat and CTA.
2. Opportunity finder: location/remote, skills, schedule, accessibility, commitment length.
3. Opportunity cards with role, date, requirements, training, status.
4. “How volunteering works” stepper.
5. Testimonials from volunteers.
6. FAQ and safeguarding notes.

**Components:** FilterPanel, OpportunityCard, Stepper, Testimonial, FAQAccordion, CTA.

**Accessibility:** Opportunity requirements are plain text; filters keyboard navigable; applications can be saved.

### 3.7 Impact

**Purpose:** Provide measurable proof and data exploration.

**Wireframe:**
1. Hero: “Impact you can verify.”
2. KPI dashboard with dates and methodology.
3. Interactive map with list fallback.
4. Outcome categories with charts and narratives.
5. Methodology explainer.
6. Data downloads and report links.
7. Caveats and limitations statement.

**Components:** StatGrid, ChartCard, MapPanel, MethodologyCard, DownloadCard, ReportCard.

**Accessibility:** Charts include summaries and tables; map is not required for completion; data can be downloaded as CSV.

### 3.8 CSR

**Purpose:** Convert corporate partners with credibility, clarity, and proposal intake.

**Wireframe:**
1. Hero with corporate partnership proposition.
2. Partnership models: funding, employee volunteering, matched giving, strategic program, in-kind.
3. ESG/SDG alignment matrix.
4. Case studies with outcomes and partner quotes.
5. Due diligence pack downloads.
6. Proposal intake form with company details and goals.
7. Contact/account manager CTA.

**Components:** PartnershipCard, MatrixTable, CaseStudyCard, DownloadCard, ProposalForm, TrustPanel.

**Accessibility:** Form supports save/resume; downloads list file type/size; matrix has table semantics.

### 3.9 Stories

**Purpose:** Create emotional understanding while connecting stories to outcomes.

**Wireframe:**
1. Editorial hero story.
2. Topic filters: program, region, format, date.
3. Story grid with image, title, excerpt, program, reading time.
4. Featured video story with transcript.
5. Related impact statistics.
6. Newsletter CTA.

**Components:** StoryHero, FilterChips, ArticleCard, VideoEmbed, StatCard, NewsletterForm.

**Accessibility:** Images require ethical alt text; video has captions/transcript; reading time is supplemental.

### 3.10 Events

**Purpose:** Help users discover, register, attend, and follow up.

**Wireframe:**
1. Events hero with upcoming featured event.
2. Calendar/list toggle.
3. Filters: online/in-person, location, topic, accessibility, date.
4. Event cards with date block, title, location, capacity, CTA.
5. Event detail pattern: agenda, speakers, accessibility, map, registration.
6. Past events archive with recordings.

**Components:** EventCard, CalendarView, FilterPanel, RegistrationWidget, SpeakerCard, MapEmbed.

**Accessibility:** Dates use semantic time; registration controls meet 48px touch target; venue accessibility is visible.

### 3.11 Reports

**Purpose:** Make proof discoverable, readable, and citable.

**Wireframe:**
1. Reports hero with search.
2. Filters: annual, impact, financial, research, policy, year, program.
3. Report cards with title, summary, year, type, HTML/PDF/CSV links.
4. Featured annual report module.
5. Citation guidance and methodology link.
6. Empty state with contact/research request.

**Components:** SearchInput, FilterPanel, ReportCard, DownloadLink, CitationBlock, Pagination.

**Accessibility:** HTML-first reports; PDFs must be tagged; cards do not hide download controls behind hover.

### 3.12 Dashboard

**Purpose:** Give returning users a personalized, trustworthy account home.

**Wireframe:**
1. Dashboard header: greeting, role badges, profile completion, quick actions.
2. Donation summary: receipts, recurring gift, next charge, impact updates.
3. Volunteer summary: applications, upcoming shifts, hours, certificates.
4. Event registrations.
5. Saved projects/stories/reports.
6. Preferences: email topics, privacy, accessibility, language.
7. Support/contact panel.

**Components:** DashboardShell, StatCard, ActivityCard, ReceiptList, StatusBadge, PreferencesPanel.

**Accessibility:** Dashboard uses landmarks; quick actions have clear labels; tables/lists support keyboard operations.

### 3.13 Admin

**Purpose:** Provide secure operational controls for staff.

**Wireframe:**
1. Admin shell with role-aware sidebar and MFA/session status.
2. Overview: task queues, content awaiting review, form submissions, donation alerts, system health.
3. Content module: draft/review/publish workflow with preview link.
4. Forms module: triage queues, assignment, notes, export.
5. Donation module: transaction search, refunds, receipt resend, audit trail.
6. Volunteer module: application review, background checks, scheduling.
7. Reports module: exports, analytics, compliance.
8. Audit log and user management.

**Components:** AdminShell, DataTable, QueueCard, StatusBadge, FilterPanel, AuditLog, Modal, Drawer.

**Accessibility:** Admin tables need keyboard row actions, visible focus, persistent headings, and non-color status labels.

### 3.14 Contact

**Purpose:** Route inquiries safely and efficiently.

**Wireframe:**
1. Hero: “How can we help?”
2. Intent cards: donation, volunteer, media, CSR, programs, safeguarding, general.
3. Conditional form based on intent.
4. Contact alternatives: phone/email/address/hours.
5. Map/location only if relevant with static fallback.
6. FAQ suggestions before submit.
7. Confirmation with SLA and reference number.

**Components:** IntentCard, SmartForm, ContactInfo, FAQAccordion, Alert, MapEmbed.

**Accessibility:** Intent cards are buttons/radio options; safeguarding path is private and clearly labeled; forms provide error summary.

### 3.15 Search

**Purpose:** Help users find content, documents, projects, events, FAQs, and data.

**Wireframe:**
1. Search input with suggestions and recent/popular searches.
2. Results tabs: All, Projects, Programs, Stories, Reports, Events, FAQ.
3. Facets: topic, type, date, location.
4. Result cards with highlighted terms and breadcrumbs.
5. Zero-results guidance with spelling suggestions and contact link.
6. Optional AI answer panel with citations and “view sources.”

**Components:** SearchInput, ResultTabs, FilterPanel, ResultCard, Breadcrumb, EmptyState, AIAnswerCard.

**Accessibility:** Search input is first focusable item after header; result count announced; AI answer never replaces source links.

---

## 4. User Flows

### 4.1 Visitor flow

Landing page/social/search → Home hero → Trust strip → Impact snapshot → Story or Program → Donate/Volunteer/Newsletter → Confirmation or saved preference.

**Success criteria:** user understands mission within 10 seconds, sees proof within 1 scroll, and has two clear next actions.

### 4.2 Donor flow

Entry CTA → Donate amount/frequency/fund → Donor details → Payment → Review → Confirmation → Receipt → Dashboard or email preferences → Impact updates.

**Failure handling:** payment errors preserve form state; abandoned donations trigger respectful reminder only with consent.

### 4.3 Volunteer flow

Volunteer hub → Filter opportunity → Opportunity detail → Eligibility check → Application → Document upload/training → Review status → Shift selection → Reminder → Attendance → Hours/certificate.

### 4.4 CSR partner flow

CSR page → Partnership model → Case study → Due diligence pack → Proposal form → Confirmation/SLA → CRM assignment → Partner portal invitation.

### 4.5 Administrator flow

Admin login + MFA → Overview queue → Select task → Review details → Approve/assign/export/publish → Audit log entry → Notification to relevant user/team.

### 4.6 Media flow

Search or media route → About/Leadership/Transparency → Press assets or stories → Contact media intent → SLA confirmation → Staff follow-up.

### 4.7 Researcher flow

Impact/Reports → Filter by year/program/type → HTML report or dataset → Methodology → Download CSV/PDF → Citation block → Contact research inquiry.

### 4.8 Returning user flow

Login → Dashboard overview → Resume donation/application/volunteer task → Manage preferences/receipts/events → Continue to public content.

### 4.9 Anonymous visitor flow

Home/Search/FAQ → Browse without account → Donate as guest or submit low-risk contact → Optional account creation after value is delivered.

---

## 5. Navigation System

### 5.1 Desktop navigation

- Left: logo.
- Center: Mission, Programs, Projects, Impact, Stories, Get Involved, Resources, About.
- Right: Search, language, accessibility, Login, Donate.
- Header behavior: transparent only on safe hero backgrounds; becomes solid/glass after scroll.
- Active route: `aria-current`, underline/bar, weight change.

### 5.2 Mobile navigation

- Top bar: logo, donate button, menu button.
- Drawer: search first, primary nav groups, quick actions, language/accessibility, login.
- Sticky bottom quick action optional on key pages: Donate / Volunteer / Search.
- Drawer closes with escape, close button, route selection, or outside tap.

### 5.3 Mega menu

| Menu | Columns | Featured item | Utility links |
|---|---|---|---|
| Mission | Mission, Vision, Theory of change, Values | Founder/origin story | FAQ, Contact |
| Programs | Program pillars | Featured program | Eligibility, Reports |
| Projects | Active, Completed, Map, Urgent | Urgent project card | Filter by location |
| Impact | Dashboard, Map, Outcomes, Methodology | Latest impact stat | Download data |
| Get Involved | Donate, Volunteer, Events, Campaigns | Monthly giving CTA | Corporate giving |
| Resources | Stories, Blog, Reports, Gallery, Media | Annual report | Search |
| About | About, Leadership, Trustees, Team, Careers | Governance CTA | Privacy, Terms |

### 5.4 Breadcrumbs

- Display below header for all pages deeper than top-level.
- Format: Home / Section / Current page.
- Current page is text, not link.
- Use structured data when implementation begins.

### 5.5 Search

- Desktop: command-style overlay with large input.
- Mobile: full-screen search sheet.
- Suggestions: popular searches, urgent projects, reports, FAQ.
- Results page preserves query in URL.

### 5.6 Footer

Footer groups:

1. Mission and Programs.
2. Donate and Volunteer.
3. Impact and Transparency.
4. Resources and Media.
5. Contact and Help.
6. Legal and Preferences.

Footer must include registration/charity identifiers, social links, newsletter, address, language, accessibility statement, privacy, terms, and back-to-top.

### 5.7 Quick links

Contextual quick links appear near page top for long pages:

- On Impact: Metrics, Map, Methodology, Reports, Data.
- On Donate: Amount, Details, Payment, FAQ.
- On Volunteer: Opportunities, How it works, FAQ.
- On Admin: Overview, Content, Forms, Donations, Volunteers, Audit.

---

## 6. Mobile UX Strategy

### 6.1 Global mobile rules

- One primary action per viewport.
- Minimum preferred touch target: 44–48px.
- Sticky CTAs only when they do not cover form fields or cookie/privacy controls.
- Forms use single-column layout and native input types.
- Heavy modules such as maps, video, 3D, and charts load after core content.
- Tables provide horizontal scroll with visible affordance plus summary cards where appropriate.

### 6.2 Mobile page behavior by page

| Page | Mobile layout | Touch interactions | Performance | Offline/degraded behavior |
|---|---|---|---|---|
| Home | Single-column editorial stack; hero CTAs full width. | Tap CTAs/cards; no hover dependency. | Static hero image, lazy video. | Core text and CTA remain available. |
| About | Timeline vertical; people cards stacked. | Expand/collapse timeline details. | Lazy portraits. | Text timeline works without media. |
| Projects | Search first, filter bottom sheet, list default, map secondary. | Filter chips, sheet drag close, card CTAs. | Map lazy loaded. | Project list cached/readable. |
| Programs | Program cards stacked; comparison table scrolls. | Accordion details. | Minimal JS. | Text and links remain. |
| Donate | One-step-at-a-time form; sticky secure summary. | Large amount buttons, wallet buttons. | Payment SDK lazy loaded. | If offline, preserve draft and show retry. |
| Volunteer | Finder first; opportunity cards list. | Filter chips, save opportunity. | Lazy testimonials. | Save application draft locally if safe. |
| Impact | KPI cards first; map becomes optional module. | Chart tabs, data download. | Charts lazy loaded. | Show text summaries and cached last-updated. |
| CSR | Partnership cards stacked; proposal form single column. | Expand case studies. | Download pack links visible. | Form draft preserved until online. |
| Stories | Feature story then card feed. | Swipe not required; tap cards. | Images lazy loaded. | Text content readable. |
| Events | List default; calendar optional. | Date filters, RSVP buttons. | Calendar lazy loaded. | Event details cached; registration needs online. |
| Reports | Search/filter; cards with direct downloads. | Filter sheet, download buttons. | No PDF preload. | HTML summaries cached. |
| Dashboard | Cards stacked by urgency. | Quick action buttons. | Fetch personalized data after shell. | Show last synced data and offline notice. |
| Admin | Responsive admin shell; dense tables become list/detail. | Row actions in drawers. | Virtualize long tables. | Read-only cached queues if safe. |
| Contact | Intent cards then conditional form. | Tap intent, submit, call/email links. | Minimal JS. | Show offline message and preserve draft. |
| Search | Full-screen input; results grouped. | Clear, filters, tabs. | Debounced requests. | Recent cached searches shown. |

---

## 7. Component Placement Matrix

| Page | Required components |
|---|---|
| Home | Header, Hero, ProofCard, Statistics, ProjectCard, StoryFeature, ActionCard, ProgramCard, ChartSummary, EventCard, NewsletterForm, Footer. |
| About | Header, Hero, Timeline, ValueCard, DiagramPanel, PersonCard, CTASection, Footer. |
| Mission | Header, Hero, TheoryOfChangeDiagram, ValueCard, ProgramCard, CTASection, Footer. |
| Vision | Header, Hero, Timeline, StatCard, RoadmapCard, CTASection, Footer. |
| Leadership | Header, PersonCard, BioDrawer, ContactCTA, Footer. |
| Trustees | Header, TrusteeCard, GovernanceTable, DownloadCard, Footer. |
| Team | Header, TeamFilter, PersonCard, CareersCTA, Footer. |
| Projects | Header, SearchInput, FilterPanel, ProjectCard, MapPanel, Pagination, EmptyState, Footer. |
| Programs | Header, ProgramCard, ComparisonTable, StatCard, StoryCard, ReportCard, Footer. |
| Impact | Header, StatGrid, ChartCard, MapPanel, MethodologyCard, DownloadCard, ReportCard, Footer. |
| CSR | Header, PartnershipCard, MatrixTable, CaseStudyCard, DownloadCard, ProposalForm, Footer. |
| Donate | Header, DonationWidget, Stepper, TrustPanel, PaymentPanel, FAQAccordion, Footer. |
| Volunteer | Header, OpportunityFinder, OpportunityCard, Stepper, Testimonial, FAQAccordion, Footer. |
| Events | Header, EventCard, CalendarView, FilterPanel, RegistrationWidget, Footer. |
| Gallery | Header, MediaGrid, LightboxDialog, FilterChips, Footer. |
| Stories | Header, StoryHero, ArticleCard, VideoEmbed, StatCard, NewsletterForm, Footer. |
| Blog | Header, ArticleCard, FilterChips, NewsletterForm, Footer. |
| Reports | Header, SearchInput, FilterPanel, ReportCard, DownloadLink, CitationBlock, Footer. |
| Transparency | Header, TrustPanel, GovernanceTable, ReportCard, DownloadCard, FAQAccordion, Footer. |
| FAQ | Header, SearchInput, FAQAccordion, ContactCTA, Footer. |
| Contact | Header, IntentCard, SmartForm, ContactInfo, FAQAccordion, Footer. |
| Careers | Header, JobCard, CultureCard, BenefitsList, ApplicationCTA, Footer. |
| Dashboard | DashboardShell, StatCard, ActivityCard, ReceiptList, PreferencesPanel, SupportPanel. |
| Admin | AdminShell, QueueCard, DataTable, FilterPanel, Modal, Drawer, AuditLog. |
| Search | Header, SearchInput, ResultTabs, FilterPanel, ResultCard, EmptyState, Footer. |
| 404 | Header, ErrorState, SearchInput, QuickLinks, Footer. |

---

## 8. Animation Planning

| Page | Entry animation | Scroll animation | Hover interaction | Loading state | Transition | Reduced-motion alternative |
|---|---|---|---|---|---|---|
| Home | Hero text fade/translate 16px. | Section reveals once. | Card lift 2px; CTA tint. | Skeleton for project/news cards. | Standard route fade. | Static content, no transforms. |
| About | Hero fade; timeline items appear. | Timeline line progress optional. | Person cards reveal bio affordance. | Image placeholders. | Fade only. | Full timeline visible. |
| Projects | Results fade after filters. | None for results. | Card border/shadow. | Result skeleton cards. | Preserve filters in URL. | Instant result swap. |
| Programs | Pillar cards stagger. | Comparison sections fade. | Card lift. | Skeleton cards. | Fade. | No stagger. |
| Donate | Step panel crossfade. | None. | Amount button state. | Payment loading spinner with text. | Step transition only. | Instant step change. |
| Volunteer | Finder appears after hero. | How-it-works step reveal. | Opportunity card shadow. | Opportunity skeleton. | Filter state preserved. | Static list. |
| Impact | KPI cards fade; charts draw. | Chart modules reveal. | Tooltip/popover. | Chart skeleton/table fallback. | Fade. | Charts render final state. |
| CSR | Hero fade; case cards reveal. | Matrix appears statically. | Download button tint. | Form skeleton. | Fade. | Static. |
| Stories | Feature story fade. | Article cards reveal. | Image scale max 1.015. | Image blur placeholders. | Fade. | No image scale. |
| Events | Featured event fade. | None. | Event card border. | Calendar skeleton. | Preserve date filter. | Static. |
| Reports | Results appear instantly after search. | None. | Download link underline. | Report card skeleton. | Query URL update. | Instant. |
| Dashboard | Shell loads first, cards stream in. | None. | Quick action tint. | Personalized skeleton. | Internal tabs no full route flash. | Instant. |
| Admin | Shell no animation; data loads. | None. | Row action highlight. | Table skeleton. | Drawer slide. | Drawer appears instantly. |
| Contact | Intent cards fade. | None. | Intent selected state. | Submit spinner with text. | Conditional form crossfade. | Instant form swap. |
| Search | Overlay opens scale/fade. | None. | Result underline. | Debounced loading rows. | Query state update. | Overlay appears instantly. |

---

## 9. Accessibility Architecture

### 9.1 Global keyboard order

1. Skip link.
2. Header logo.
3. Primary navigation.
4. Search.
5. Language/accessibility controls.
6. Login/donate.
7. Main page H1.
8. In-page quick links where present.
9. Page content in visual order.
10. Footer.

### 9.2 Page-specific accessibility notes

| Page type | Keyboard | ARIA | Reading order | Contrast | Touch targets | Screen reader notes |
|---|---|---|---|---|---|---|
| Marketing/editorial | CTAs before decorative media controls. | Landmarks and labelled regions. | H1 → summary → primary CTA → proof. | Text tokens only. | 44px+. | Media has alt/captions/transcripts. |
| Listings | Search → filters → results → pagination. | Result count live region. | Filters precede results. | Filter chips not color-only. | 44px+. | Announce active filters and result counts. |
| Forms | Field order matches visual. | `aria-describedby`, error summary. | Label → help → input → error. | Errors pass AA and include icon/text. | 48px preferred. | Preserve data after errors. |
| Donation/payment | Stepper accessible before form. | `aria-current=step`; secure payment labels. | Amount → frequency → details → payment. | High contrast summary. | 48px. | Final review announced before submit. |
| Dashboard/admin | Sidebar → page title → task cards/table. | Table captions, status text. | Summary before dense data. | Status not color-only. | 44px+. | Row actions must have explicit labels. |
| Maps/charts | List/table fallback first or adjacent. | Chart summaries. | Narrative before visualization. | Data colors tested separately. | 44px+. | Do not require spatial understanding. |

### 9.3 Focus states

- Use Phase 2 focus ring token globally.
- Focus must be visible on glass, image, dark, and light surfaces.
- Modal/drawer focus is trapped and restored.
- Mega menu and mobile drawer close on escape.

### 9.4 ARIA considerations

- Use native HTML wherever possible.
- `aria-expanded` for disclosures, menus, drawers.
- `aria-current` for active nav and current step.
- `aria-live=polite` for search result counts, form submission states, and async dashboard updates.
- Avoid ARIA roles that override correct semantics.

---

## 10. Production Implementation Notes

### 10.1 Page hierarchy conventions

- Every public page has exactly one H1.
- Long pages include quick links after the intro.
- Conversion pages include proof/trust modules before irreversible action.
- Every page ends with either a next-step CTA or a helpful recovery path.

### 10.2 Responsive strategy

- Desktop supports editorial composition and side-by-side proof modules.
- Tablet preserves two-column cards but simplifies complex diagrams.
- Mobile prioritizes task completion, single-column content, bottom sheets for filters, and no hover-only states.
- Admin/dashboards switch from dense tables to list/detail drawers where needed.

### 10.3 Performance notes

- Hero media should be optimized and never block H1 rendering.
- Maps, charts, video, 3D, payment SDK, and admin tables are lazy loaded.
- Listing filters update URL state and avoid full page reload.
- Use skeletons only where they reduce uncertainty; do not over-skeleton static content.

### 10.4 Content readiness notes

Engineers should not build final pages until content owners provide:

- Approved hero copy and fallback copy.
- Real project/program data.
- Report metadata and download files.
- Leadership/trustee bios.
- Donation amount impact examples.
- Accessibility text for media: alt text, captions, transcripts.
- Legal/privacy/terms copy.

### 10.5 QA checklist

Before implementation signoff for each page:

1. Sitemap route and page purpose confirmed.
2. Wireframe section stack mapped to components.
3. Mobile behavior specified.
4. Keyboard order tested from header to footer.
5. Reduced-motion behavior specified.
6. Loading and empty states specified.
7. Error states specified for forms/search/listings.
8. SEO title/description/schema requirements identified.
9. Analytics events identified for primary CTAs.
10. Content dependencies resolved.

---

## 11. Final Deliverable Summary

This Phase 3 specification provides:

- Complete sitemap with page purpose and relationships.
- High-fidelity homepage section wireframe.
- Production textual wireframes for Home, About, Projects, Programs, Donate, Volunteer, Impact, CSR, Stories, Events, Reports, Dashboard, Admin, Contact, and Search.
- User journeys for visitors, donors, volunteers, CSR partners, administrators, media, researchers, returning users, and anonymous visitors.
- Desktop, mobile, mega menu, breadcrumb, search, footer, and quick-link navigation systems.
- Mobile UX strategy by page.
- Component placement matrix for the full platform.
- Animation plan by page with reduced-motion alternatives.
- Accessibility architecture for keyboard order, focus, ARIA, reading order, contrast, touch, and screen readers.
- Implementation notes that allow frontend teams to build directly from the design intent without inventing layouts.
