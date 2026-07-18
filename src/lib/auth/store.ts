import type { AuthUser, UserRole } from "./types";
import { sha256 } from "./crypto";

const roles: UserRole[] = ["administrator", "donor", "volunteer"];
function configuredPasswordHash() { return process.env.ADMIN_PASSWORD_HASH; }
function configuredEmail() { return process.env.ADMIN_EMAIL?.trim().toLowerCase(); }

export async function findUserByCredentials(email: string, password: string): Promise<AuthUser | null> {
  const adminEmail = configuredEmail();
  const passwordHash = configuredPasswordHash();
  if (!adminEmail || !passwordHash) return null;
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail !== adminEmail) return null;
  if (await sha256(password) !== passwordHash) return null;
  return { id: "admin", email: adminEmail, name: "Project Prometheus Administrator", roles, preferences: { newsletter: true, donationReceipts: true, volunteerUpdates: true } };
}
