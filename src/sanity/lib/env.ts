import { env } from "@/lib/env";
export const sanityConfig = { projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "", dataset: env.NEXT_PUBLIC_SANITY_DATASET, apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION, perspective: env.SANITY_PREVIEW_SECRET ? "previewDrafts" : "published" } as const;
