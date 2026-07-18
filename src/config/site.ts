export const siteConfig = {
  name: "Project Prometheus",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prometheus.example",
  description: "A transparent NGO platform for measurable impact, donations, volunteering, and partnerships.",
  nav: [
    { href: "/mission", label: "Mission" },
    { href: "/programs", label: "Programs" },
    { href: "/projects", label: "Projects" },
    { href: "/impact", label: "Impact" },
    { href: "/stories", label: "Stories" },
    { href: "/volunteer", label: "Volunteer" }
  ]
} as const;
