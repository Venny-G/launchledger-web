import Link from "next/link";

import { siteConfig } from "@/lib/site";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-full border border-line bg-panel px-3 py-2 text-sm text-cloud transition hover:border-cyan/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
      aria-label={siteConfig.name}
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-cyan/30 bg-slate">
        <span className="absolute inset-[6px] rounded-full border border-cyan/25" />
        <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-cyan/70" />
        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-cyan/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_18px_rgba(123,234,255,0.8)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-cyan/70">
          {compact ? "LL" : "Mission Systems"}
        </span>
        <span className="font-display text-sm uppercase tracking-[0.24em] text-white">
          {compact ? siteConfig.name : "LaunchLedger"}
        </span>
      </span>
    </Link>
  );
}
