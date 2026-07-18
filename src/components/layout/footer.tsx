import Link from "next/link";

const groups = [
  { title: "Platform", links: [["Mission", "/mission"], ["Programs", "/programs"], ["Projects", "/projects"], ["Impact", "/impact"]] },
  { title: "Act", links: [["Donate", "/donate"], ["Volunteer", "/volunteer"], ["CSR", "/csr"], ["Events", "/events"]] },
  { title: "Trust", links: [["Reports", "/reports"], ["Transparency", "/transparency"], ["Privacy", "/privacy"], ["Terms", "/terms"]] }
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_2fr] lg:px-8">
        <div><p className="font-display text-2xl font-semibold">Project Prometheus</p><p className="mt-3 max-w-sm text-sm leading-6 text-foreground/70">Transparent impact, dignified storytelling, and secure ways to help.</p></div>
        <nav className="grid gap-8 sm:grid-cols-3" aria-label="Footer navigation">
          {groups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><Link className="text-sm text-foreground/70 hover:text-foreground" href={href}>{label}</Link></li>)}</ul></div>)}
        </nav>
      </div>
    </footer>
  );
}
