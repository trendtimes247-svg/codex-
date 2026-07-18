import Link from "next/link";
import type { NavigationItem } from "@/types/navigation";

export type MegaNavigationGroup = { title: string; items: NavigationItem[]; featured?: NavigationItem };
/** Keyboard-accessible mega navigation panel rendered as semantic grouped lists. */
export function MegaNavigation({ groups }: { groups: MegaNavigationGroup[] }) {
  return <div className="grid gap-6 rounded-xl border bg-surface p-6 shadow-card md:grid-cols-3" role="group" aria-label="Mega navigation">{groups.map((group) => <section key={group.title} aria-labelledby={`mega-${group.title}`}><h2 id={`mega-${group.title}`} className="text-sm font-semibold">{group.title}</h2><ul className="mt-3 space-y-2">{group.items.map((item) => <li key={item.href}><Link className="block rounded-md px-2 py-2 text-sm text-foreground/75 hover:bg-muted hover:text-foreground" href={item.href}>{item.label}{item.description ? <span className="mt-1 block text-xs text-foreground/55">{item.description}</span> : null}</Link></li>)}</ul>{group.featured ? <Link href={group.featured.href} className="mt-4 block rounded-lg bg-muted p-4 text-sm font-semibold">{group.featured.label}</Link> : null}</section>)}</div>;
}
