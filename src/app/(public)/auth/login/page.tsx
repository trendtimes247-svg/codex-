import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { createCsrfToken } from "@/lib/security/csrf";
export default async function LoginPage() { const csrfToken = await createCsrfToken(); return <section className="mx-auto max-w-md px-6 py-20"><h1 className="font-display text-5xl font-semibold">Sign in</h1><LoginForm csrfToken={csrfToken} /><Link className="mt-6 inline-flex underline" href="/donate">Continue as a guest donor</Link></section>; }
