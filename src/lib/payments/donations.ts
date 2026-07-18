import type { Donation } from "./types";

export async function getDonationSummary(userId: string) {
  const donations = await getDonationHistory(userId);
  return { totalDonated: donations.reduce((sum, donation) => sum + donation.amount, 0), activeRecurring: donations.filter((donation) => donation.frequency === "monthly" && donation.status === "succeeded").length, supportedProjects: [...new Set(donations.map((donation) => donation.project))] };
}
export async function getDonationHistory(_userId: string): Promise<Donation[]> {
  return [
    { id: "dn_1001", amount: 100, currency: "usd", frequency: "monthly", project: "Education access", status: "succeeded", receiptUrl: "/dashboard/donations/receipts/dn_1001", createdAt: "2026-06-15" },
    { id: "dn_1002", amount: 250, currency: "usd", frequency: "one_time", project: "Climate resilience", status: "succeeded", receiptUrl: "/dashboard/donations/receipts/dn_1002", createdAt: "2026-07-01" }
  ];
}
