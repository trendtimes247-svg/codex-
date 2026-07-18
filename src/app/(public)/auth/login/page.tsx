import { LoginForm } from "@/components/auth/login-form";
import { createCsrfToken } from "@/lib/security/csrf";

export default async function LoginPage() { const csrfToken = await createCsrfToken(); return <main className="px-6 py-20"><h1 className="mx-auto mb-8 max-w-md font-display text-4xl font-semibold">Sign in</h1><LoginForm csrfToken={csrfToken} /></main>; }
