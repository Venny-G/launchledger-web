import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto grid max-w-shell gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <BrandMark compact />
          <p className="max-w-xl text-sm leading-7 text-muted">
            {siteConfig.extendedDescription}
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex text-sm text-white underline decoration-cyan/35 underline-offset-4 transition hover:decoration-cyan"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
              Navigate
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
              Stage
            </p>
            <p className="text-sm leading-7 text-muted">
              Website under construction. Direct questions and inquiries to{" "}
              {siteConfig.contactEmail}.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{siteConfig.legalName}</p>
          <p>Public website for LaunchLedger</p>
        </div>
      </div>
    </footer>
  );
}
