import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth/session";
import { sendEmail } from "@/lib/notifications/email";

const schema = z.object({ project: z.string().min(2), skills: z.string().min(2), availability: z.string().min(2) });
export async function POST(request: Request) {
  const user = await requireUser(["volunteer", "administrator"]);
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid volunteer application." }, { status: 400 });
  await sendEmail({ to: user.email, subject: "Volunteer application received", html: `<p>Thank you for applying to support ${parsed.data.project}. We will review your skills and availability.</p>` });
  return NextResponse.json({ id: `vol_${Date.now()}`, status: "submitted" });
}
