import type { ReactNode } from "react";
export function AdminLayout({ children }: { children: ReactNode }) { return <main id="main-content" className="grid min-h-screen bg-muted lg:grid-cols-[280px_1fr]"><aside className="border-r bg-surface p-6"><p className="font-semibold">Prometheus Admin</p></aside><section className="p-6 lg:p-10">{children}</section></main>; }
