import type { Donation } from "./types";

const donationLedger = new Map<string, Donation>();
export function recordDonation(donation: Donation) { donationLedger.set(donation.id, donation); return donation; }
export function updateDonationStatus(id: string, status: Donation["status"], receiptUrl?: string) { const existing = donationLedger.get(id); if (!existing) return null; const updated = { ...existing, status, receiptUrl }; donationLedger.set(id, updated); return updated; }
export async function getDonationHistory(userId: string): Promise<Donation[]> { return Array.from(donationLedger.values()).filter((donation) => donation.donorId === userId); }
export async function getDonationSummary(userId: string) {
  const history = await getDonationHistory(userId);
  const succeeded = history.filter((donation) => donation.status === "succeeded");
  return { totalDonated: succeeded.reduce((total, donation) => total + donation.amount, 0), activeRecurring: succeeded.filter((donation) => donation.frequency === "monthly").length, supportedProjects: new Set(succeeded.map((donation) => donation.project)).size, receipts: succeeded.filter((donation) => donation.receiptUrl).length };
}
