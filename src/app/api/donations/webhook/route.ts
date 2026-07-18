import { NextResponse } from "next/server";
import { audit } from "@/lib/audit/logger";
import { requireServerSecret } from "@/lib/env";
import { updateDonationStatus } from "@/lib/payments/donations";

const encoder = new TextEncoder();
function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  return mismatch === 0;
}
async function hmac(payload: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function verifyStripeSignature(body: string, signatureHeader: string | null) {
  if (!signatureHeader) return false;
  const timestamp = signatureHeader.split(",").find((part) => part.startsWith("t="))?.slice(2);
  const signature = signatureHeader.split(",").find((part) => part.startsWith("v1="))?.slice(3);
  if (!timestamp || !signature) return false;
  const expected = await hmac(`${timestamp}.${body}`, requireServerSecret("STRIPE_WEBHOOK_SECRET"));
  return timingSafeEqual(signature, expected);
}

type StripeEvent = { type?: string; data?: { object?: { client_reference_id?: string; payment_status?: string; receipt_url?: string } } };
export async function POST(request: Request) {
  const body = await request.text();
  if (!await verifyStripeSignature(body, request.headers.get("stripe-signature"))) return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  const event = JSON.parse(body) as StripeEvent;
  const session = event.data?.object;
  if (event.type === "checkout.session.completed" && session?.client_reference_id) updateDonationStatus(session.client_reference_id, session.payment_status === "paid" ? "succeeded" : "pending", session.receipt_url);
  await audit({ type: "donation.webhook", metadata: { event: event.type ?? "unknown", donationId: session?.client_reference_id ?? null } });
  return NextResponse.json({ received: true });
}
