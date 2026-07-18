import type { NextConfig } from "next";
import { securityHeaders } from "./src/lib/security/headers";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
  async headers() { return [{ source: "/(.*)", headers: [...securityHeaders] }]; }
};

export default nextConfig;
