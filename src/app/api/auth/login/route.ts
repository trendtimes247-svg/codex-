import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth/session";
import { findUserByCredentials } from "@/lib/auth/store";
import { loginSchema } from "@/lib/auth/validation";
import { audit } from "@/lib/audit/logger";
import { readJson } from "@/lib/api/json";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { clearCsrfToken, verifyCsrfToken } from "@/lib/security/csrf";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = rateLimit(`login:${ip}`, 8, 60_000);
  if (!limited.ok) { await audit({ type: "security.denied", metadata: { route: "login", ip } }); return NextResponse.json({ error: "Too many login attempts." }, { status: 429 }); }
  const body = await readJson<unknown>(request);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });
  const parsed = loginSchema.safeParse(body.data);
  if (!parsed.success) return NextResponse.json({ error: "Invalid email or password." }, { status: 400 });
  if (!await verifyCsrfToken(parsed.data.csrfToken)) return NextResponse.json({ error: "Invalid security token." }, { status: 403 });
  const user = await findUserByCredentials(parsed.data.email, parsed.data.password);
  if (!user) { await audit({ type: "security.denied", metadata: { route: "login", ip } }); return NextResponse.json({ error: "Invalid email or password." }, { status: 401 }); }
  await createSession(user);
  clearCsrfToken();
  await audit({ type: "auth.login", actorId: user.id, metadata: { ip } });
  return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, roles: user.roles } });
}
