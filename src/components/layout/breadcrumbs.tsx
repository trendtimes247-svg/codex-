import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };
/** Accessible breadcrumb trail for deep pages. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-sm text-foreground/70">{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 ? <ChevronRight aria-hidden className="h-4 w-4" /> : null}{item.href && index < items.length - 1 ? <Link className="hover:text-foreground" href={item.href}>{item.label}</Link> : <span aria-current="page" className="font-medium text-foreground">{item.label}</span>}</li>)}</ol></nav>;
}
