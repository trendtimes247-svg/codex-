import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">Prometheus</Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground/80 transition hover:text-foreground">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-muted"><Search className="h-5 w-5" /></Link>
          <Link href="/donate" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"><Heart className="h-4 w-4" />Donate</Link>
        </div>
      </div>
    </header>
  );
}
