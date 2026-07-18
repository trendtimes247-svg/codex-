export type DonationFrequency = "one_time" | "monthly";
export type Donation = { id: string; donorId: string; amount: number; currency: "usd"; frequency: DonationFrequency; project: string; status: "succeeded" | "pending" | "failed"; checkoutSessionId?: string; receiptUrl?: string; createdAt: string };
export type DonationCheckoutInput = { amount: number; frequency: DonationFrequency; project?: string; donorEmail: string; successUrl: string; cancelUrl: string; referenceId: string };
