import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth/session";
import { findUserByCredentials } from "@/lib/auth/store";
import { loginSchema } from "@/lib/auth/validation";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { verifyCsrfToken } from "@/lib/security/csrf";

export async function POST(request: Request) {
  const limited = rateLimit(`login:${getClientIp(request)}`, 8, 60_000);
  if (!limited.ok) return NextResponse.json({ error: "Too many login attempts." }, { status: 429 });
  const body = await request.json();
  if (!await verifyCsrfToken(typeof body.csrfToken === "string" ? body.csrfToken : null)) return NextResponse.json({ error: "Invalid security token." }, { status: 403 });
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid email or password." }, { status: 400 });
  const user = await findUserByCredentials(parsed.data.email, parsed.data.password);
  if (!user) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  await createSession(user);
  return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, roles: user.roles } });
}
