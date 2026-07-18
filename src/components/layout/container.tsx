import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/** Responsive max-width container using Prometheus spacing tokens. */
export function Container({ children, className, size = "xl" }: { children: ReactNode; className?: string; size?: "sm" | "md" | "lg" | "xl" | "full" }) {
  const sizes = { sm: "max-w-3xl", md: "max-w-5xl", lg: "max-w-6xl", xl: "max-w-7xl", full: "max-w-none" };
  return <div className={cn("mx-auto w-full px-6 lg:px-8", sizes[size], className)}>{children}</div>;
}
