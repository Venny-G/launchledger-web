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
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <BrandMark />
        <div className="hidden md:flex md:items-center md:gap-8">
          {siteConfig.nav.map((item) => (
            <HeaderLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <a
          href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
          className="inline-flex rounded-full border border-cyan/25 bg-cyan/12 px-4 py-2 text-sm font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/18 hover:text-white"
        >
          Request Early Access
        </a>
      </div>
    </header>
  );
}
