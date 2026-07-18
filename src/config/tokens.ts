export const tokens = {
  color: { background: "hsl(var(--background))", foreground: "hsl(var(--foreground))", primary: "hsl(var(--primary))", accent: "hsl(var(--accent))", focus: "hsl(var(--ring))" },
  space: { 1: "0.25rem", 2: "0.5rem", 4: "1rem", 8: "2rem", 16: "4rem", 32: "8rem" },
  motion: { fast: "120ms", base: "180ms", moderate: "260ms", slow: "420ms" },
  radius: { sm: "0.5rem", md: "0.75rem", lg: "1.25rem", xl: "1.75rem", full: "999px" }
} as const;
