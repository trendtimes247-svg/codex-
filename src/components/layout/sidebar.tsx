import Link from "next/link";
import type { NavigationItem } from "@/types/navigation";
import { cn } from "@/utils/cn";

/** Reusable sidebar navigation for dashboard and admin surfaces. */
export function Sidebar({ items, label = "Sidebar navigation", className }: { items: NavigationItem[]; label?: string; className?: string }) {
  return <aside className={cn("rounded-lg border bg-surface p-3", className)}><nav aria-label={label}><ul className="space-y-1">{items.map((item) => <li key={item.href}><Link href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/75 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:shadow-focus">{item.label}</Link></li>)}</ul></nav></aside>;
}
