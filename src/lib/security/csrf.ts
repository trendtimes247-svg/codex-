import { cookies } from "next/headers";
import { signPayload, verifyPayload } from "@/lib/auth/crypto";
import { requireServerSecret } from "@/lib/env";

const cookieName = "prometheus_csrf";
const maxAge = 60 * 60;
function secret() { return requireServerSecret("CSRF_SECRET"); }
export async function createCsrfToken() {
  const token = crypto.randomUUID();
  const signed = await signPayload(token, secret());
  cookies().set(cookieName, signed, { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge });
  return token;
}
export async function verifyCsrfToken(token: string | null) {
  const signed = cookies().get(cookieName)?.value;
  if (!signed || !token) return false;
  const payload = await verifyPayload(signed, secret());
  return payload === token;
}
export function clearCsrfToken() { cookies().delete(cookieName); }
