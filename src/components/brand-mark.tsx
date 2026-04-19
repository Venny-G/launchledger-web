import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/lib/site";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-sm text-cloud transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      aria-label={siteConfig.name}
    >
      <span className="relative overflow-hidden border border-white/8 bg-slate shadow-glow">
        <Image
          src="/launchledger-logo.png"
          alt="LaunchLedger logo"
          width={56}
          height={56}
          className="h-11 w-11 object-cover md:h-12 md:w-12"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-mono uppercase text-white/55 ${
            compact
              ? "max-w-[13rem] text-[0.56rem] leading-[1.35] tracking-[0.18em]"
              : "hidden max-w-[16rem] text-[0.56rem] leading-[1.35] tracking-[0.18em] lg:block"
          }`}
        >
          {siteConfig.tagline}
        </span>
        <span className="font-display text-xs uppercase tracking-[0.24em] text-white sm:text-sm">
          {siteConfig.name}
        </span>
      </span>
    </Link>
  );
}
