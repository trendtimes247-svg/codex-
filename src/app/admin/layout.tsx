import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { AdminLayout } from "@/components/layout/admin-layout";
import { requireUser } from "@/lib/auth/session";
export default async function Layout({ children }: { children: ReactNode }) { const user = await requireUser(["administrator"]); if (!user) redirect("/dashboard"); return <AdminLayout>{children}</AdminLayout>; }
