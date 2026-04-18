import Link from "next/link";

import { siteConfig } from "@/lib/site";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-[1.5rem] border border-line bg-panel px-3 py-2 text-sm text-cloud transition hover:border-cyan/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
      aria-label={siteConfig.name}
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_top,rgba(123,234,255,0.22),transparent_68%),linear-gradient(180deg,rgba(245,158,11,0.22),rgba(7,11,16,0.92))] shadow-glow md:h-12 md:w-12">
        <span className="font-display text-sm uppercase tracking-[0.16em] text-white">C4</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-cyan/70">
          {compact ? "Browser App" : "Text + MIDI"}
        </span>
        <span className="font-display text-sm uppercase tracking-[0.24em] text-white">
          {siteConfig.name}
        </span>
      </span>
    </Link>
  );
}
