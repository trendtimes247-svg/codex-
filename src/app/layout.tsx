import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { createMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500", "600"] });

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = { colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F7F3EA" }, { media: "(prefers-color-scheme: dark)", color: "#08110F" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable} ${mono.variable}`}><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange><SkipLink />{children}<Analytics /></ThemeProvider></body></html>;
}
