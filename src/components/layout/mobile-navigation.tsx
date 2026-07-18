"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

/** Mobile drawer navigation with labelled controls and escape-free close affordance. */
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return <div className="lg:hidden"><button aria-expanded={open} aria-controls="mobile-navigation" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border bg-surface" onClick={() => setOpen(!open)}>{open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}<span className="sr-only">Toggle navigation</span></button>{open ? <div id="mobile-navigation" className="fixed inset-x-4 top-20 z-50 rounded-xl border bg-surface p-4 shadow-card"><nav aria-label="Mobile navigation"><ul className="space-y-1">{siteConfig.nav.map((item) => <li key={item.href}><Link onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 font-medium hover:bg-muted" href={item.href}>{item.label}</Link></li>)}</ul></nav></div> : null}</div>;
}
