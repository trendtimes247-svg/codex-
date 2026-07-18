import { z } from "zod";

const optionalUrl = z.string().url().optional();
const requiredSecret = z.string().min(32);

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_SITE_URL: optionalUrl.default("https://prometheus.example"),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).default("production"),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1).default("2026-07-18"),
  SANITY_API_READ_TOKEN: z.string().min(1).optional(),
  SANITY_PREVIEW_SECRET: z.string().min(32).optional(),
  AUTH_SECRET: z.string().min(32).optional(),
  CSRF_SECRET: z.string().min(32).optional(),
  STRIPE_SECRET_KEY: z.string().startsWith("sk_").optional(),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_").optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  EMAIL_FROM: z.string().min(3).default("Project Prometheus <noreply@prometheus.example>"),
  RATE_LIMIT_REDIS_URL: optionalUrl,
  AUDIT_LOG_ENDPOINT: optionalUrl,
  MONITORING_DSN: optionalUrl
}).superRefine((value: Record<string, string | undefined>, ctx: { addIssue(issue: { code: string; path: string[]; message: string }): void }) => {
  if (value.NODE_ENV !== "production") return;
  const requiredProductionSecrets: string[] = ["AUTH_SECRET", "CSRF_SECRET", "NEXT_PUBLIC_SANITY_PROJECT_ID", "STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET"];
  for (const key of requiredProductionSecrets) {
    if (!value[key]) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: `${key} is required in production` });
  }
});

export const env = envSchema.parse(process.env);
export const siteUrl = new URL(env.NEXT_PUBLIC_SITE_URL);
export function requireServerSecret(name: "AUTH_SECRET" | "CSRF_SECRET" | "STRIPE_SECRET_KEY" | "STRIPE_WEBHOOK_SECRET") {
  const value = env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}
