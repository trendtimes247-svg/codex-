import { env } from "@/lib/env";

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return { queued: false };
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: env.EMAIL_FROM, to, subject, html }) });
  return { queued: response.ok };
}
