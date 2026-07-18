import { createClient } from "@sanity/client";
import { draftMode } from "next/headers";
import { env } from "@/lib/env";

function projectId() {
  if (!env.NEXT_PUBLIC_SANITY_PROJECT_ID && env.NODE_ENV === "production") throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is required for Sanity content fetching");
  return env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "development-project";
}

export const sanityClient = createClient({ projectId: projectId(), dataset: env.NEXT_PUBLIC_SANITY_DATASET, apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION, useCdn: true, stega: false });

export function getSanityClient() {
  const isDraftMode = draftMode().isEnabled;
  return sanityClient.withConfig({ useCdn: !isDraftMode, perspective: isDraftMode ? "previewDrafts" : "published", token: isDraftMode ? env.SANITY_API_READ_TOKEN : undefined });
}
