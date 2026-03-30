import Image from "next/image";
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
      <span className="relative overflow-hidden rounded-2xl border border-white/8 bg-black/30 shadow-glow">
        <Image
          src="/launchledger-logo.png"
          alt="LaunchLedger logo"
          width={compact ? 44 : 56}
          height={compact ? 44 : 56}
          className="h-11 w-11 object-cover md:h-12 md:w-12"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-cyan/70">
          {compact ? "Homepage" : "Under Construction"}
        </span>
        <span className="font-display text-sm uppercase tracking-[0.24em] text-white">
          {siteConfig.name}
        </span>
      </span>
    </Link>
  );
}
