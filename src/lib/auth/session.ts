import { cookies } from "next/headers";
import { decodeJson, encodeJson, signPayload, verifyPayload } from "./crypto";
import type { AuthUser, Session, UserRole } from "./types";

const sessionCookie = "prometheus_session";
const maxAgeSeconds = 60 * 60 * 24 * 7;
function getSecret() { return process.env.AUTH_SECRET ?? "development-auth-secret-change-before-production"; }
export async function createSession(user: AuthUser) { const session: Session = { user, expiresAt: Date.now() + maxAgeSeconds * 1000 }; const signed = await signPayload(encodeJson(session), getSecret()); cookies().set(sessionCookie, signed, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: maxAgeSeconds }); }
export function clearSession() { cookies().delete(sessionCookie); }
export async function getSession(): Promise<Session | null> { const signed = cookies().get(sessionCookie)?.value; if (!signed) return null; const payload = await verifyPayload(signed, getSecret()); if (!payload) return null; const session = decodeJson<Session>(payload); return session.expiresAt > Date.now() ? session : null; }
export async function requireUser(roles?: UserRole[]) { const session = await getSession(); if (!session) return null; if (roles?.length && !roles.some((role) => session.user.roles.includes(role))) return null; return session.user; }
