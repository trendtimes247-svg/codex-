import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth/session";
import { audit } from "@/lib/audit/logger";
import { readJson } from "@/lib/api/json";
import { sendEmail } from "@/lib/notifications/email";
import { escapeHtml } from "@/lib/security/html";

const schema = z.object({ project: z.string().min(2).max(120), skills: z.string().min(2).max(1000), availability: z.string().min(2).max(500) });
export async function POST(request: Request) {
  const user = await requireUser(["volunteer", "administrator"]);
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  const body = await readJson<unknown>(request);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });
  const parsed = schema.safeParse(body.data);
  if (!parsed.success) return NextResponse.json({ error: "Invalid volunteer application." }, { status: 400 });
  await sendEmail({ to: user.email, subject: "Volunteer application received", html: `<p>Thank you for applying to support ${escapeHtml(parsed.data.project)}. We will review your skills and availability.</p>` });
  await audit({ type: "volunteer.apply", actorId: user.id, metadata: { project: parsed.data.project } });
  return NextResponse.json({ id: `vol_${Date.now()}`, status: "submitted" });
}
