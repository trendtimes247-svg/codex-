import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/** Semantic section with consistent vertical rhythm and optional labelled region semantics. */
export function SectionWrapper({ children, className, id, labelledBy }: { children: ReactNode; className?: string; id?: string; labelledBy?: string }) {
  return <section id={id} aria-labelledby={labelledBy} className={cn("py-16 md:py-24", className)}>{children}</section>;
}
