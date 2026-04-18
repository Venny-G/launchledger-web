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
        Browser audio app: text playback, keyboard animation, and MIDI piano.
      </div>
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <BrandMark />
        <div className="hidden md:flex md:items-center md:gap-8">
          {siteConfig.nav.map((item) => (
            <HeaderLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <a
          href="#midi-studio"
          className="inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:border-cyan/40 hover:bg-cyan/14 hover:text-white"
        >
          Open piano
        </a>
      </div>
    </header>
  );
}
