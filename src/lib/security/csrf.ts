import { cookies } from "next/headers";
import { signPayload, verifyPayload } from "@/lib/auth/crypto";

const cookieName = "prometheus_csrf";
function secret() { return process.env.CSRF_SECRET ?? process.env.AUTH_SECRET ?? "development-csrf-secret-change-before-production"; }
export async function createCsrfToken() { const token = crypto.randomUUID(); const signed = await signPayload(token, secret()); cookies().set(cookieName, signed, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 }); return token; }
export async function verifyCsrfToken(token: string | null) { const signed = cookies().get(cookieName)?.value; if (!signed || !token) return false; const payload = await verifyPayload(signed, secret()); return payload === token; }
