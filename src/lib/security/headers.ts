const scriptSrc = process.env.NODE_ENV === "production" ? "script-src 'self' https://vercel.live" : "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live";
export const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(self)" },
  { key: "Content-Security-Policy", value: `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com; font-src 'self' data:; connect-src 'self' https://api.stripe.com https://api.resend.com https://*.api.sanity.io https://*.apicdn.sanity.io; frame-src https://checkout.stripe.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' https://checkout.stripe.com; upgrade-insecure-requests` }
] as const;
