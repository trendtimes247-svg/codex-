import type { AuthUser } from "./types";
import { sha256 } from "./crypto";

const seedUsers = [
  { id: "admin_001", email: "admin@prometheus.org", name: "Prometheus Admin", password: "Prometheus-admin-2026", roles: ["administrator"] as const },
  { id: "donor_001", email: "donor@prometheus.org", name: "Elena Ortiz", password: "Prometheus-donor-2026", roles: ["donor", "volunteer"] as const }
];

export async function findUserByCredentials(email: string, password: string): Promise<AuthUser | null> {
  const normalizedEmail = email.trim().toLowerCase();
  const passwordHash = await sha256(password);
  for (const user of seedUsers) {
    if (user.email === normalizedEmail && await sha256(user.password) === passwordHash) {
      return { id: user.id, email: user.email, name: user.name, roles: [...user.roles], preferences: { newsletter: true, donationReceipts: true, volunteerUpdates: true } };
    }
  }
  return null;
}
