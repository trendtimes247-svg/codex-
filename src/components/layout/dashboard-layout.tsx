import type { ReactNode } from "react";
export function DashboardLayout({ children }: { children: ReactNode }) { return <main id="main-content" className="mx-auto min-h-screen max-w-7xl px-6 py-10 lg:px-8">{children}</main>; }
