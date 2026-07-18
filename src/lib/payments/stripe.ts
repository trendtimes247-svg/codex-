import type { DonationCheckoutInput } from "./types";
import { requireServerSecret } from "@/lib/env";

export async function createStripeCheckout(input: DonationCheckoutInput) {
  const secret = requireServerSecret("STRIPE_SECRET_KEY");
  const mode = input.frequency === "monthly" ? "subscription" : "payment";
  const body = new URLSearchParams({ mode, success_url: input.successUrl, cancel_url: input.cancelUrl, customer_email: input.donorEmail, client_reference_id: input.referenceId, "metadata[donationId]": input.referenceId, "line_items[0][quantity]": "1", "line_items[0][price_data][currency]": "usd", "line_items[0][price_data][product_data][name]": input.project ?? "Project Prometheus donation", "line_items[0][price_data][unit_amount]": String(Math.round(input.amount * 100)) });
  if (input.frequency === "monthly") body.set("line_items[0][price_data][recurring][interval]", "month");
  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", { method: "POST", headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/x-www-form-urlencoded", "Idempotency-Key": input.referenceId }, body });
  if (!response.ok) throw new Error("Unable to create checkout session");
  return response.json() as Promise<{ id: string; url: string }>;
}
