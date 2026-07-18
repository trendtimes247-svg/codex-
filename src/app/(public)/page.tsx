import Link from "next/link";
import { ArrowRight, CheckCircle, Globe2, LockKeyhole, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { AnimatedCounter, CtaBanner, DonationWidget, FeatureGrid, MotionCard, MotionSection, NewsletterForm, PartnerLogos, ProjectCard, Statistics, Testimonial, Timeline } from "@/components";

import type { Metadata } from "next";
import { homepageQuery } from "@/sanity/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { homepageFallback } from "@/sanity/lib/homepage-fallback";
import type { HomepageData } from "@/types/cms/homepage";
import { SanityImageView } from "@/components/media/sanity-image";

export const revalidate = 300;

async function getHomepage(): Promise<HomepageData> {
  const data = await sanityFetch<HomepageData>({ query: homepageQuery, tags: ["homepage"], revalidate });
  return data ?? homepageFallback;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomepage();
  const title = page.seo?.title ?? page.title;
  const description = page.seo?.description ?? page.hero.description;
  return {
    title,
    description,
    alternates: { canonical: page.seo?.canonical ?? "/" },
    openGraph: { title, description, images: page.seo?.image?.asset?.url ? [{ url: page.seo.image.asset.url, alt: page.seo.image.alt }] : undefined },
    twitter: { card: "summary_large_image", title, description },
    robots: page.seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true }
  };
}

function organizationJsonLd(page: HomepageData) {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: page.title,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prometheus.example",
    description: page.seo?.description ?? page.hero.description,
    sameAs: page.footerCta.socialLinks
  };
}

export default async function HomePage() {
  const page = await getHomepage();
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(page)) }} />
      <section className="relative overflow-hidden border-b">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/.28),transparent_28%),radial-gradient(circle_at_80%_10%,hsl(var(--primary)/.16),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border bg-surface/70 px-4 py-2 text-sm font-semibold text-foreground/70 backdrop-blur">{page.hero.eyebrow}</p>
            <h1 className="mt-8 max-w-5xl font-display text-6xl font-semibold leading-[.88] tracking-[-.065em] md:text-8xl">{page.hero.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72">{page.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={page.hero.primaryCta.href} className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-semibold text-primary-foreground">{page.hero.primaryCta.label} <ArrowRight aria-hidden className="ml-2 h-4 w-4" /></Link>
              <Link href={page.hero.secondaryCta.href} className="inline-flex min-h-12 items-center justify-center rounded-md border bg-surface px-6 font-semibold">{page.hero.secondaryCta.label}</Link>
            </div>
          </div>
          <MotionCard className="relative rounded-[2rem] border bg-surface/75 p-4 shadow-card backdrop-blur-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-[#365A53] to-accent p-6 text-primary-foreground">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/20 bg-black/15 p-6 backdrop-blur-sm">
                <div><p className="text-sm uppercase tracking-[.18em] text-white/70">Live trust dashboard</p><p className="mt-4 font-display text-6xl font-semibold"><AnimatedCounter value={page.hero.dashboardMetric.value} /></p><p className="mt-2 text-white/75">{page.hero.dashboardMetric.label}</p></div>
                <div className="grid grid-cols-2 gap-3 text-sm">{page.hero.proofPoints.map((point) => <span key={point} className="rounded-lg bg-white/15 p-3">{point}</span>)}</div>
              </div>
            </div>
          </MotionCard>
          <a href="#trust" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sm font-semibold text-foreground/60 hover:text-foreground md:inline-flex">Scroll to explore</a>
        </div>
      </section>

      <MotionSection id="trust">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.trust.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.trust.title}</h2><p className="mt-5 text-foreground/70">{page.trust.description}</p></div><Statistics stats={page.trust.stats} /></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[ShieldCheck, LockKeyhole, CheckCircle, Globe2].map((Icon, index) => <div key={index} className="rounded-xl border bg-surface p-5"><Icon aria-hidden className="h-6 w-6 text-primary" /><p className="mt-4 font-semibold">{page.trust.highlights[index]}</p></div>)}
          </div>
          <div className="mt-10"><PartnerLogos partners={page.trust.partners} /></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-muted/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.programs.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.programs.title}</h2></div><Link href={page.programs.cta.href} className="font-semibold underline">{page.programs.cta.label}</Link></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{page.programs.items.map((program) => <ProjectCard key={program.title} {...program} />)}</div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.impact.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.impact.title}</h2><div className="mt-8 grid gap-4 sm:grid-cols-3">{page.impact.metrics.map((item) => <div key={item.label} className="rounded-xl border bg-surface p-5"><p className="font-display text-4xl font-semibold"><AnimatedCounter value={item.value} /></p><p className="mt-2 text-sm text-foreground/65">{item.label}</p></div>)}</div><div className="mt-8 rounded-xl border bg-surface p-5"><div className="grid aspect-[16/9] place-items-center rounded-lg bg-[radial-gradient(circle,hsl(var(--primary)/.24),transparent_55%)]"><MapPin aria-hidden className="h-10 w-10 text-primary" /><span className="sr-only">Interactive impact map preview</span></div><p className="mt-4 text-sm text-foreground/65">{page.impact.mapDescription}</p></div></div>
          <div><Timeline items={page.impact.timeline} /><div className="mt-8 grid gap-4">{page.impact.stories.slice(0, 2).map((story) => <Testimonial key={story.name} {...story} />)}</div></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-[#0B3D3A] via-[#365A53] to-[#C6A15B] p-8 text-white shadow-card">{page.featuredStory.image ? <SanityImageView image={page.featuredStory.image} className="absolute inset-0 h-full w-full object-cover opacity-45" sizes="(min-width: 1024px) 45vw, 100vw" /> : null}<div className="relative"><p className="text-sm uppercase tracking-[.18em] text-white/70">{page.featuredStory.eyebrow}</p><blockquote className="mt-10 font-display text-5xl font-semibold leading-none tracking-[-.045em]">“{page.featuredStory.quote}”</blockquote></div></div>
          <div><h2 className="font-display text-5xl font-semibold tracking-[-.04em]">{page.featuredStory.title}</h2><p className="mt-6 text-lg leading-8 text-foreground/70">{page.featuredStory.description}</p><Link href={page.featuredStory.cta.href} className="mt-8 inline-flex min-h-12 items-center rounded-md bg-primary px-6 font-semibold text-primary-foreground">{page.featuredStory.cta.label} <ArrowRight aria-hidden className="ml-2 h-4 w-4" /></Link></div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.donation.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.donation.title}</h2><p className="mt-5 text-foreground/70">{page.donation.description}</p><div className="mt-6 rounded-xl border bg-muted p-5 text-sm"><LockKeyhole aria-hidden className="mb-3 h-5 w-5 text-primary" />{page.donation.securityMessage}</div></div>
          <DonationWidget amounts={page.donation.amounts} unitCost={page.donation.unitCost} />
        </div>
      </MotionSection>

      <MotionSection className="bg-muted/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><CtaBanner title={page.volunteer.title} description={page.volunteer.description} action={page.volunteer.cta} /><div className="mt-8 grid gap-4 md:grid-cols-3">{page.volunteer.benefits.map((benefit) => <div key={benefit} className="rounded-xl border bg-surface p-5"><UsersRound aria-hidden className="h-5 w-5 text-primary" /><p className="mt-3 font-semibold">{benefit}</p></div>)}</div></div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.news.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.news.title}</h2><div className="mt-8"><FeatureGrid features={page.news.items} /></div></div><div className="rounded-xl border bg-surface p-6 shadow-card"><Sparkles aria-hidden className="h-6 w-6 text-accent" /><h3 className="mt-4 font-display text-3xl font-semibold">{page.news.featured.title}</h3><p className="mt-3 text-foreground/70">{page.news.featured.description}</p><Link href={page.news.featured.href} className="mt-5 inline-flex font-semibold underline">Read article</Link><div className="mt-8"><NewsletterForm /></div></div></div></div>
      </MotionSection>

      <MotionSection className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex items-end justify-between gap-6"><div><p className="text-sm font-semibold uppercase tracking-[.18em] text-foreground/60">{page.testimonials.eyebrow}</p><h2 className="mt-4 font-display text-5xl font-semibold tracking-[-.04em]">{page.testimonials.title}</h2></div><div className="hidden gap-2 md:flex" aria-label="Testimonial carousel controls"><button className="min-h-11 rounded-md border px-4">Previous</button><button className="min-h-11 rounded-md border px-4">Next</button></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{page.testimonials.items.map((story) => <Testimonial key={story.name} {...story} />)}</div></div>
      </MotionSection>

      <MotionSection>
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="rounded-[2rem] border bg-primary p-8 text-primary-foreground md:p-12"><p className="text-sm font-semibold uppercase tracking-[.18em] text-primary-foreground/70">{page.footerCta.eyebrow}</p><h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-[-.04em]">{page.footerCta.title}</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row">{page.footerCta.actions.map((action) => <Link key={action.href} href={action.href} className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 font-semibold first:bg-background first:text-foreground">{action.label}</Link>)}</div><div className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/75">{page.footerCta.socialLinks.map((link) => <span key={link}>{link}</span>)}</div></div></div>
      </MotionSection>
    </>
  );
}
