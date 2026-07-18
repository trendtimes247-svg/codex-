import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(metadata: Partial<Metadata> = {}): Metadata {
  const title = metadata.title ?? siteConfig.name;
  const description = metadata.description ?? siteConfig.description;
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: String(title), template: `%s | ${siteConfig.name}` },
    description,
    openGraph: { title: String(title), description, siteName: siteConfig.name, type: "website", url: siteConfig.url },
    twitter: { card: "summary_large_image", title: String(title), description },
    robots: { index: true, follow: true },
    ...metadata
  };
}
