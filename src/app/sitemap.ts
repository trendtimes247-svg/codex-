import type { MetadataRoute } from "next";
const routes = ["", "/mission", "/programs", "/projects", "/impact", "/stories", "/reports", "/donate", "/volunteer", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prometheus.example"; return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 })); }
