type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const usingMemoryFallback = !process.env.RATE_LIMIT_REDIS_URL;
export function rateLimit(key: string, limit = 20, windowMs = 60_000) {
  if (process.env.NODE_ENV === "production" && usingMemoryFallback) throw new Error("RATE_LIMIT_REDIS_URL is required in production");
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) { buckets.set(key, { count: 1, resetAt: now + windowMs }); return { ok: true, remaining: limit - 1 }; }
  if (bucket.count >= limit) return { ok: false, remaining: 0 };
  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count };
}
export function getClientIp(request: Request) { return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown"; }
