import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-ink/85 backdrop-blur">
      <div className="construction-strip border-b border-amber-300/20 px-6 py-2 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-amber-100 lg:px-8">
        Under construction. Questions: {siteConfig.contactEmail}
      </div>
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <HeaderLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/14 hover:text-white md:inline-flex"
        >
          Contact via email
        </Link>
      </div>
      <details className="border-t border-white/6 md:hidden">
        <summary className="mx-auto flex max-w-shell cursor-pointer list-none items-center justify-between px-6 py-3 text-sm text-cloud lg:px-8">
          Navigation
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
            Open
          </span>
        </summary>
        <nav
          className="mx-auto flex max-w-shell flex-col gap-4 px-6 pb-5 lg:px-8"
          aria-label="Mobile"
        >
          {siteConfig.nav.map((item) => (
            <HeaderLink key={item.href} href={item.href} label={item.label} />
          ))}
          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/14 hover:text-white"
          >
            Contact via email
          </Link>
        </nav>
      </details>
    </header>
  );
}
