"use client";
import { useState } from "react";

type LoginStatus = "idle" | "submitting" | "error" | "success";

export function LoginForm({ csrfToken }: { csrfToken: string }) {
  const [status, setStatus] = useState<LoginStatus>("idle");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password"), csrfToken }) });
    setStatus(response.ok ? "success" : "error");
  }
  return <form className="mx-auto grid max-w-md gap-4 rounded-xl border bg-surface p-6" onSubmit={submit}><label className="text-sm font-medium">Email<input name="email" type="email" autoComplete="email" required className="mt-2 min-h-12 w-full rounded-md border bg-background px-4" /></label><label className="text-sm font-medium">Password<input name="password" type="password" autoComplete="current-password" required minLength={12} className="mt-2 min-h-12 w-full rounded-md border bg-background px-4" /></label><button disabled={status === "submitting"} className="min-h-12 rounded-md bg-primary px-6 font-semibold text-primary-foreground disabled:opacity-60">{status === "submitting" ? "Signing in…" : "Sign in"}</button>{status === "error" ? <p role="alert" className="text-sm text-error">Sign in failed. Check your credentials and try again.</p> : null}{status === "success" ? <p role="status" className="text-sm text-success">Signed in securely.</p> : null}</form>;
}
