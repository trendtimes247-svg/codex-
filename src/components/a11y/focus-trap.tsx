"use client";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/** Focus trap wrapper for dialogs and drawers. */
export function FocusTrap({ children, active = true }: { children: ReactNode; active?: boolean }) { const ref = useRef<HTMLDivElement | null>(null); useEffect(() => { if (!active) return; const node = ref.current; const previous = document.activeElement as HTMLElement | null; const focusables = node?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])"); focusables?.[0]?.focus(); return () => previous?.focus(); }, [active]); return <div ref={ref}>{children}</div>; }
