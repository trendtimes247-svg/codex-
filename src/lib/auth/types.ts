export type UserRole = "visitor" | "donor" | "volunteer" | "administrator";
export type AuthUser = { id: string; email: string; name: string; roles: UserRole[]; avatarUrl?: string; preferences: { newsletter: boolean; donationReceipts: boolean; volunteerUpdates: boolean } };
export type Session = { user: AuthUser; expiresAt: number };
