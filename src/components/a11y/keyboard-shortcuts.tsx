"use client";
import { useEffect } from "react";

/** Registers a single-key keyboard shortcut outside editable controls. */
export function useKeyboardShortcut(key: string, handler: () => void) { useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { const target = event.target as HTMLElement | null; if (target?.closest("input, textarea, select, [contenteditable='true']")) return; if (event.key.toLowerCase() === key.toLowerCase()) handler(); }; window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, [handler, key]); }
