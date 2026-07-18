import { unstable_cache } from "next/cache";
import { getSanityClient } from "./client";

export async function sanityFetch<T>({ query, params = {}, tags = [], revalidate = 300 }: { query: string; params?: Record<string, string | number | boolean>; tags?: string[]; revalidate?: number }): Promise<T | null> {
  const fetcher = async (): Promise<T> => getSanityClient().fetch(query, params, { next: { revalidate, tags } }) as Promise<T>;
  return unstable_cache(fetcher, [query, JSON.stringify(params)], { revalidate, tags })();
}
