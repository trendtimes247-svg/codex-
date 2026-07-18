import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth/session";
import { findUserByCredentials } from "@/lib/auth/store";
import { loginSchema } from "@/lib/auth/validation";

export async function POST(request: Request) {
  const parsed = loginSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid email or password." }, { status: 400 });
  const user = await findUserByCredentials(parsed.data.email, parsed.data.password);
  if (!user) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  await createSession(user);
  return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, roles: user.roles } });
}
