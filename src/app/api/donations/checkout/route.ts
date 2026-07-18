import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth/session";
import { createStripeCheckout } from "@/lib/payments/stripe";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";

const schema = z.object({ amount: z.number().min(1).max(100000), frequency: z.enum(["one_time", "monthly"]), project: z.string().optional() });
export async function POST(request: Request) {
  const limited = rateLimit(`donation:${getClientIp(request)}`, 12, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "Too many donation attempts." }, { status: 429 });
  const user = await requireUser(["donor", "administrator"]);
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid donation request." }, { status: 400 });
  const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://prometheus.example";
  try {
    const checkout = await createStripeCheckout({ amount: parsed.data.amount, frequency: parsed.data.frequency, project: parsed.data.project, donorEmail: user.email, successUrl: `${origin}/donate/success`, cancelUrl: `${origin}/donate/cancel` });
    return NextResponse.json({ url: checkout.url });
  } catch {
    return NextResponse.json({ error: "Donation checkout is currently unavailable." }, { status: 503 });
  }
}
