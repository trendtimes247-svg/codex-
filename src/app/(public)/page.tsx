import Link from "next/link";
import { ArrowRight, CheckCircle, Globe2, HeartHandshake, LockKeyhole, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { AnimatedCounter, CtaBanner, DonationWidget, FeatureGrid, MotionCard, MotionSection, NewsletterForm, PartnerLogos, ProjectCard, Statistics, Testimonial, Timeline } from "@/components";

const trustStats = [
  { value: "92%", label: "of every unrestricted gift directed to programs", source: "Updated quarterly" },
  { value: "48", label: "community partners coordinating local delivery", source: "Verified partner network" },
  { value: "18", label: "regions with active impact reporting", source: "Program dashboard" },
  { value: "24h", label: "average donor receipt and support response", source: "Support operations" }
];

const programs = [
  { title: "Education access", location: "Learning kits, mentoring, and safe study spaces", progress: 78, href: "/programs/education-access" },
  { title: "Community health", location: "Preventive care, local clinics, and family support", progress: 64, href: "/programs/community-health" },
  { title: "Climate resilience", location: "Preparedness, clean water, and local adaptation", progress: 52, href: "/programs/climate-resilience" }
];

const timeline = [
  { date: "Quarter 1", title: "Local partner onboarding", description: "Field teams validate needs, safeguarding policies, delivery capacity, and reporting cadence before funding begins." },
  { date: "Quarter 2", title: "Program delivery", description: "Funds move to approved projects with milestone tracking, procurement checks, and beneficiary-safe communication." },
  { date: "Quarter 3", title: "Outcome verification", description: "Impact data is reconciled with partner evidence, site visits, and community feedback loops." },
  { date: "Quarter 4", title: "Public reporting", description: "Annual results, financial allocations, methodology notes, and lessons learned are published for public review." }
];

const stories = [
  { quote: "The difference was not just the equipment. It was knowing someone would keep showing up until the work was finished.", name: "Amina Rahman", role: "Community program lead" },
  { quote: "Prometheus gave our employee volunteers a direct line of sight from time donated to outcomes reported.", name: "Marcus Lee", role: "CSR partner director" },
  { quote: "The reporting is unusually clear. I can see what changed, where it changed, and how confident the data is.", name: "Elena Ortiz", role: "Monthly donor" }
];

const news = [
  { title: "Quarterly impact notes: what changed across 18 regions", description: "A field-led update on program delivery, data confidence, and next-quarter priorities.", href: "/blog/quarterly-impact-notes" },
  { title: "How transparent donation design builds long-term trust", description: "Inside the operating principles behind receipts, reporting, and donor privacy.", href: "/blog/transparent-donation-design" },
  { title: "Volunteer teams complete first climate readiness sprint", description: "Community volunteers helped map practical preparedness needs before the monsoon season.", href: "/blog/climate-readiness-sprint" }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/.28),transparent_28%),radial-gradient(circle_at_80%_10%,hsl(var(--primary)/.16),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border bg-surface/70 px-4 py-2 text-sm font-semibold text-foreground/70 backdrop-blur">Transparent NGO impact platform</p>
            <h1 className="mt-8 max-w-5xl font-display text-6xl font-semibold leading-[.88] tracking-[-.065em] md:text-8xl">Every act of care should create measurable change.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72">Project Prometheus connects donations, volunteering, partnerships, and public reporting into one calm, trustworthy digital home for human progress.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-semibold text-primary-foreground">Donate with confidence <ArrowRight aria-hidden className="ml-2 h-4 w-4" /></Link>
              <Link href="/impact" className="inline-flex min-h-12 items-center justify-center rounded-md border bg-surface px-6 font-semibold">Inspect our impact</Link>
            </div>
          </div>
          <MotionCard className="relative rounded-[2rem] border bg-surface/75 p-4 shadow-card backdrop-blur-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-[#365A53] to-accent p-6 text-primary-foreground">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/20 bg-black/15 p-6 backdrop-blur-sm">
                <div><p className="text-sm uppercase tracking-[.18em] text-white/70">Live trust dashboard</p><p className="mt-4 font-display text-6xl font-semibold"><AnimatedCounter value={128420} /></p><p className="mt-2 text-white/75">verified acts of support recorded across programs</p></div>
                <div className="grid grid-cols-2 gap-3 text-sm"><span className="rounded-lg bg-white/15 p-3">Audited reports</span><span className="rounded-lg bg-white/15 p-3">Secure giving</span><span className="rounded-lg bg-white/15 p-3">Partner proof</span><span className="rounded-lg bg-white/15 p-3">Open data</span></div>
              </div>
            </div>
          </MotionCard>
          <a href="#trust" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sm font-semibold text-foreground/60 hover:text-foreground md:inline-flex">Scroll to explore</a>
        </div>
      </section>

      <MotionSection id="trust">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Trust by default</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Proof belongs above the fold.</h2><p className="mt-5 text-foreground/70">Donors, volunteers, partners, and communities deserve a transparent view into funding, governance, security, and outcomes.</p></div><Statistics stats={trustStats} /></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[ShieldCheck, LockKeyhole, CheckCircle, Globe2].map((Icon, index) => <div key={index} className="rounded-xl border bg-surface p-5"><Icon aria-hidden className="h-6 w-6 text-primary" /><p className="mt-4 font-semibold">{["Audited annual reporting", "Encrypted donation flows", "Safeguarding policies", "Open methodology"][index]}</p></div>)}
          </div>
          <div className="mt-10"><PartnerLogos partners={[{ name: "Civic Data Alliance" }, { name: "Global Volunteer Network" }, { name: "Open Impact Lab" }, { name: "Community Health Fund" }]} /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-muted/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Featured programs</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Focused programs. Visible progress.</h2></div><Link href="/programs" className="font-semibold underline">View all programs</Link></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{programs.map((program) => <ProjectCard key={program.title} {...program} />)}</div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Impact engine</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Measure the work, then publish the evidence.</h2><div className="mt-8 grid gap-4 sm:grid-cols-3">{[{ label: "People reached", value: 84200 }, { label: "Volunteer hours", value: 31800 }, { label: "Reports published", value: 126 }].map((item) => <div key={item.label} className="rounded-xl border bg-surface p-5"><p className="font-display text-4xl font-semibold"><AnimatedCounter value={item.value} /></p><p className="mt-2 text-sm text-foreground/65">{item.label}</p></div>)}</div><div className="mt-8 rounded-xl border bg-surface p-5"><div className="grid aspect-[16/9] place-items-center rounded-lg bg-[radial-gradient(circle,hsl(var(--primary)/.24),transparent_55%)]"><MapPin aria-hidden className="h-10 w-10 text-primary" /><span className="sr-only">Interactive impact map preview</span></div><p className="mt-4 text-sm text-foreground/65">Interactive map module prepared for project locations, outcomes, and regional filters.</p></div></div>
          <div><Timeline items={timeline} /><div className="mt-8 grid gap-4">{stories.slice(0, 2).map((story) => <Testimonial key={story.name} {...story} />)}</div></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="aspect-[4/3] rounded-[2rem] border bg-gradient-to-br from-[#0B3D3A] via-[#365A53] to-[#C6A15B] p-8 text-white shadow-card"><p className="text-sm uppercase tracking-[.18em] text-white/70">Featured story</p><blockquote className="mt-10 font-display text-5xl font-semibold leading-none tracking-[-.045em]">“A story of change, not charity.”</blockquote></div>
          <div><h2 className="font-display text-5xl font-semibold tracking-[-.04em]">When support is consistent, communities can plan beyond the emergency.</h2><p className="mt-6 text-lg leading-8 text-foreground/70">In one coastal district, local volunteers, health workers, and donors coordinated preparedness kits, clinic access, and transparent reporting before seasonal flooding began.</p><Link href="/stories/coastal-resilience" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground">Read the story <ArrowRight aria-hidden className="ml-2 h-4 w-4" /></Link></div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Donate</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Give once, monthly, or toward a verified program.</h2><p className="mt-5 text-foreground/70">Every donation flow is designed around clarity: amount, frequency, impact estimate, secure payment, receipt, and transparent follow-up.</p><div className="mt-6 rounded-xl border bg-muted p-5 text-sm"><LockKeyhole aria-hidden className="mb-3 h-5 w-5 text-primary" />Encrypted payments, donor privacy, instant receipts, and no hidden form steps.</div></div>
          <DonationWidget />
        </div>
      </MotionSection>

      <MotionSection className="bg-muted/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><CtaBanner title="Volunteer with clarity, care, and community." description="Find opportunities matched to your skills, schedule, location, and accessibility needs. Track hours, training, events, and certificates from your dashboard." action={{ href: "/volunteer", label: "Become a volunteer" }} /><div className="mt-8 grid gap-4 md:grid-cols-3">{["Skill-based roles", "Accessible onboarding", "Community briefings"].map((benefit) => <div key={benefit} className="rounded-xl border bg-surface p-5"><UsersRound aria-hidden className="h-5 w-5 text-primary" /><p className="mt-3 font-semibold">{benefit}</p></div>)}</div></div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Latest news</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Fresh field notes and transparent updates.</h2><div className="mt-8"><FeatureGrid features={news} /></div></div><div className="rounded-xl border bg-surface p-6 shadow-card"><Sparkles aria-hidden className="h-6 w-6 text-accent" /><h3 className="mt-4 font-display text-3xl font-semibold">Featured article</h3><p className="mt-3 text-foreground/70">How transparent donation design turns first-time trust into long-term participation.</p><Link href="/blog/transparent-donation-design" className="mt-5 inline-flex font-semibold underline">Read article</Link><div className="mt-8"><NewsletterForm /></div></div></div></div>
      </MotionSection>

      <MotionSection className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex items-end justify-between gap-6"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">Testimonials</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">Trusted by people who inspect the work.</h2></div><div className="hidden gap-2 md:flex" aria-label="Testimonial carousel controls"><button className="min-h-11 rounded-md border px-4">Previous</button><button className="min-h-11 rounded-md border px-4">Next</button></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{stories.map((story) => <Testimonial key={story.name} {...story} />)}</div></div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="rounded-[2rem] border bg-primary p-8 text-primary-foreground md:p-12"><p className="text-sm font-semibold uppercase tracking-[.18em] text-primary-foreground/70">Take action</p><h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-[-.04em]">Support a platform where generosity is emotional, measurable, and transparent.</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/donate" className="inline-flex min-h-12 items-center justify-center rounded-md bg-background px-6 font-semibold text-foreground">Donate today</Link><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 font-semibold">Contact partnership team</Link><Link href="/stories" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 font-semibold">Follow our stories</Link></div><div className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/75"><span>LinkedIn</span><span>Instagram</span><span>YouTube</span><span>Press contact</span></div></div></div>
      </MotionSection>
    </>
  );
}
