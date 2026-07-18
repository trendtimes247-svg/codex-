import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        info: "hsl(var(--info))",
        ring: "hsl(var(--ring))"
      },
      fontFamily: { sans: ["var(--font-sans)"], display: ["var(--font-display)"], mono: ["var(--font-mono)"] },
      borderRadius: { sm: "0.5rem", md: "0.75rem", lg: "1.25rem", xl: "1.75rem" },
      boxShadow: { focus: "0 0 0 3px hsl(var(--ring) / .36)", card: "0 10px 30px hsl(160 16% 11% / .10), 0 2px 8px hsl(160 16% 11% / .06)" }
    }
  },
  plugins: []
};
export default config;
