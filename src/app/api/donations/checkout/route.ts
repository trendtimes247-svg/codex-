import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth/session";
import { audit } from "@/lib/audit/logger";
import { readJson } from "@/lib/api/json";
import { siteUrl } from "@/lib/env";
import { recordDonation } from "@/lib/payments/donations";
import { createStripeCheckout } from "@/lib/payments/stripe";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";

const schema = z.object({ amount: z.number().min(1).max(100000), frequency: z.enum(["one_time", "monthly"]), project: z.string().max(120).optional() });
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = rateLimit(`donation:${ip}`, 12, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "Too many donation attempts." }, { status: 429 });
  const user = await requireUser(["donor", "administrator"]);
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  const body = await readJson<unknown>(request);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });
  const parsed = schema.safeParse(body.data);
  if (!parsed.success) return NextResponse.json({ error: "Invalid donation request." }, { status: 400 });
  const donationId = crypto.randomUUID();
  recordDonation({ id: donationId, donorId: user.id, amount: parsed.data.amount, currency: "usd", frequency: parsed.data.frequency, project: parsed.data.project ?? "General fund", status: "pending", createdAt: new Date().toISOString() });
  try {
    const checkout = await createStripeCheckout({ amount: parsed.data.amount, frequency: parsed.data.frequency, project: parsed.data.project, donorEmail: user.email, successUrl: new URL("/donate/success", siteUrl).toString(), cancelUrl: new URL("/donate/cancel", siteUrl).toString(), referenceId: donationId });
    await audit({ type: "donation.checkout", actorId: user.id, metadata: { donationId, amount: parsed.data.amount, ip } });
    return NextResponse.json({ url: checkout.url });
  } catch {
    return NextResponse.json({ error: "Donation checkout is currently unavailable." }, { status: 503 });
  }
}
