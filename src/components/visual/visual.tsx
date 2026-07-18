"use client";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

/** Animated counter that respects reduced-motion preferences. */
export function AnimatedCounter({ value, duration = 700 }: { value: number; duration?: number }) { const [current, setCurrent] = useState(value); useEffect(() => { const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches; if (reduce) { setCurrent(value); return; } const start = performance.now(); const from = current; const tick = (time: number) => { const progress = Math.min(1, (time - start) / duration); setCurrent(Math.round(from + (value - from) * progress)); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }, [value]); return <span>{current.toLocaleString()}</span>; }
/** Reveals content on scroll without hiding content from assistive tech. */
export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) { const ref = useRef<HTMLDivElement | null>(null); const [visible, setVisible] = useState(false); useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 }); observer.observe(node); return () => observer.disconnect(); }, []); return <div ref={ref} className={cn("transition duration-500 motion-reduce:transition-none", visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100", className)}>{children}</div>; }
/** Decorative section divider with hidden semantics. */
export function SectionDivider() { return <hr aria-hidden className="mx-auto my-12 h-px max-w-7xl border-0 bg-border" />; }
/** Decorative floating background elements. */
export function FloatingElements() { return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden"><span className="absolute left-10 top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" /><span className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" /></div>; }
/** Glass surface card with tokenized blur and border. */
export function GlassCard({ children, className }: { children: ReactNode; className?: string }) { return <div className={cn("rounded-xl border bg-surface/70 p-6 shadow-card backdrop-blur-md", className)}>{children}</div>; }
/** Gradient background wrapper. */
export function GradientBackground({ children }: { children: ReactNode }) { return <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background"><FloatingElements /> <div className="relative">{children}</div></div>; }
/** Theme switcher using next-themes and accessible labels. */
export function ThemeSwitcher() { const { theme, setTheme } = useTheme(); const isDark = theme === "dark"; return <button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border bg-surface" aria-label="Toggle color theme" onClick={() => setTheme(isDark ? "light" : "dark")}>{isDark ? <Sun aria-hidden className="h-5 w-5" /> : <Moon aria-hidden className="h-5 w-5" />}</button>; }
