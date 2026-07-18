import type { ReactNode } from "react";
import { notFound, redirect } from "next/navigation";
import { AdminLayout } from "@/components/layout/admin-layout";
import { getSession, requireUser } from "@/lib/auth/session";
export default async function Layout({ children }: { children: ReactNode }) { const session = await getSession(); if (!session) redirect("/auth/login"); const user = await requireUser(["administrator"]); if (!user) notFound(); return <AdminLayout>{children}</AdminLayout>; }
