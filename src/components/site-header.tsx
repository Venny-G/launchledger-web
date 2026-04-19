import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/95">
      <div className="mx-auto max-w-shell px-5 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <BrandMark />
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
              className="inline-flex shrink-0 border border-white bg-white px-3 py-2 text-[11px] font-medium text-ink transition hover:bg-white/90 sm:px-4 sm:text-sm"
            >
              Early Access
            </a>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 border border-white/8 px-3 py-2 text-xs text-muted transition hover:border-white/14 hover:text-white lg:border-0 lg:px-0 lg:py-0 lg:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
