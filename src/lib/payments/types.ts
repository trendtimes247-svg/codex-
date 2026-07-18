export type DonationFrequency = "one_time" | "monthly";
export type Donation = { id: string; amount: number; currency: "usd"; frequency: DonationFrequency; project: string; status: "succeeded" | "pending" | "failed"; receiptUrl?: string; createdAt: string };
export type DonationCheckoutInput = { amount: number; frequency: DonationFrequency; project?: string; donorEmail: string; successUrl: string; cancelUrl: string };
