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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/95">
      <div className="mx-auto max-w-shell px-5 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />
          <div className="hidden md:flex md:items-center md:gap-8">
            {siteConfig.nav.map((item) => (
              <HeaderLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
          <a
            href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
            className="inline-flex shrink-0 border border-cyan/25 bg-cyan/12 px-3 py-2 text-xs font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/18 hover:text-white sm:px-4 sm:text-sm"
          >
            Request Early Access
          </a>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 border border-white/8 px-3 py-1.5 text-xs text-muted transition hover:border-white/14 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
