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
        </div>
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
            Modes
          </p>
          <p className="text-sm leading-7 text-muted">
            Use Text Mode to replay sentences like live typing, then switch to
            MIDI Mode to upload files and hear them through the on-screen piano.
          </p>
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{siteConfig.legalName}</p>
          <p>Interactive text and MIDI browser app</p>
        </div>
      </div>
    </footer>
  );
}
