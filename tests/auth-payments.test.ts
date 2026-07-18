import { describe, expect, it } from "vitest";
import { sha256 } from "@/lib/auth/crypto";
import { getDonationSummary } from "@/lib/payments/donations";

describe("authentication and donation services", () => {
  it("hashes credentials deterministically", async () => {
    await expect(sha256("secure-value")).resolves.toBe(await sha256("secure-value"));
  });

  it("summarizes donor history", async () => {
    const summary = await getDonationSummary("donor_001");
    expect(summary.totalDonated).toBeGreaterThan(0);
  });
});
