import { imageFragment, seoFragment } from "./fragments";

export const homepageQuery = `*[_type == "homepage"][0]{
  title,
  seo ${seoFragment},
  hero{
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    dashboardMetric,
    proofPoints,
    visual ${imageFragment}
  },
  trust{
    eyebrow,
    title,
    description,
    stats,
    highlights,
    partners[]->{ name, "logo": logo.asset->url }
  },
  "programs": {
    "eyebrow": "Featured programs",
    "title": "Focused programs. Visible progress.",
    "cta": { "label": "View all programs", "href": "/programs", "variant": "secondary" },
    "items": featuredPrograms[]->{ title, "location": summary, progress, "href": "/programs/" + slug.current }
  },
  "impact": {
    "eyebrow": "Impact engine",
    "title": "Measure the work, then publish the evidence.",
    "metrics": [{"label":"People reached","value":84200},{"label":"Volunteer hours","value":31800},{"label":"Reports published","value":126}],
    "mapDescription": "Interactive map module prepared for project locations, outcomes, and regional filters.",
    "timeline": impactTimeline,
    "stories": testimonials[]->{ quote, name, role }
  },
  featuredStory->{
    "eyebrow": "Featured story",
    quote,
    title,
    "description": excerpt,
    "cta": { "label": "Read the story", "href": "/stories/" + slug.current, "variant": "primary" },
    image ${imageFragment}
  },
  "donation": {
    "eyebrow": "Donate",
    "title": "Give once, monthly, or toward a verified program.",
    "description": "Every donation flow is designed around clarity: amount, frequency, impact estimate, secure payment, receipt, and transparent follow-up.",
    "securityMessage": "Encrypted payments, donor privacy, instant receipts, and no hidden form steps.",
    "amounts": [25,50,100,250],
    "unitCost": 25
  },
  "volunteer": {
    "title": "Volunteer with clarity, care, and community.",
    "description": "Find opportunities matched to your skills, schedule, location, and accessibility needs. Track hours, training, events, and certificates from your dashboard.",
    "cta": { "label": "Become a volunteer", "href": "/volunteer", "variant": "primary" },
    "benefits": ["Skill-based roles", "Accessible onboarding", "Community briefings"]
  },
  "news": {
    "eyebrow": "Latest news",
    "title": "Fresh field notes and transparent updates.",
    "featured": featuredNews->{ title, "description": description, "href": "/blog/" + slug.current, "date": publishedAt },
    "items": *[_type == "news"] | order(publishedAt desc)[0...3]{ title, "description": description, "href": "/blog/" + slug.current, "date": publishedAt }
  },
  "testimonials": {
    "eyebrow": "Testimonials",
    "title": "Trusted by people who inspect the work.",
    "items": testimonials[]->{ quote, name, role }
  },
  "footerCta": {
    "eyebrow": "Take action",
    "title": "Support a platform where generosity is emotional, measurable, and transparent.",
    "actions": [{"label":"Donate today","href":"/donate","variant":"primary"},{"label":"Contact partnership team","href":"/contact","variant":"secondary"},{"label":"Follow our stories","href":"/stories","variant":"secondary"}],
    "socialLinks": ["LinkedIn", "Instagram", "YouTube", "Press contact"]
  }
}`;
