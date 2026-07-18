export type AuditEvent = {
  type: "auth.login" | "auth.logout" | "donation.checkout" | "donation.webhook" | "volunteer.apply" | "security.denied";
  actorId?: string;
  metadata?: Record<string, string | number | boolean | null>;
  createdAt?: string;
};

export async function audit(event: AuditEvent) {
  const payload = { ...event, createdAt: event.createdAt ?? new Date().toISOString() };
  const endpoint = process.env.AUDIT_LOG_ENDPOINT;
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") console.info("audit", payload);
    return;
  }
  await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), keepalive: true }).catch(() => undefined);
}
