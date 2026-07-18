import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function PublicLayout({ children }: { children: ReactNode }) {
  return <><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></>;
}
