import { createClient } from "@sanity/client";
import { draftMode } from "next/headers";
import { sanityConfig } from "./env";

export const sanityClient = createClient({
  projectId: sanityConfig.projectId || "placeholder",
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: true,
  stega: false
});

export function getSanityClient() {
  const isDraftMode = draftMode().isEnabled;
  return sanityClient.withConfig({
    useCdn: !isDraftMode,
    perspective: isDraftMode ? "previewDrafts" : "published",
    token: isDraftMode ? process.env.SANITY_API_READ_TOKEN : undefined
  });
}
