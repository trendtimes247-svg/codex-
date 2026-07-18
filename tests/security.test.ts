import { describe, expect, it } from "vitest";
import { rateLimit } from "@/lib/security/rate-limit";
import { securityHeaders } from "@/lib/security/headers";

describe("security hardening", () => {
  it("enforces rate limit buckets", () => {
    const key = `test-${Date.now()}`;
    expect(rateLimit(key, 1).ok).toBe(true);
    expect(rateLimit(key, 1).ok).toBe(false);
  });

  it("defines a content security policy", () => {
    expect(securityHeaders.some((header) => header.key === "Content-Security-Policy")).toBe(true);
  });
});
