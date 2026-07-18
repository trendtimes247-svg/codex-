import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { requireUser } from "@/lib/auth/session";
export default async function Layout({ children }: { children: ReactNode }) { const user = await requireUser(["donor", "volunteer", "administrator"]); if (!user) redirect("/search"); return <DashboardLayout>{children}</DashboardLayout>; }
