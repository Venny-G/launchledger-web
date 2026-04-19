import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title: string;
  body: string;
  note?: string;
};

export function CtaBanner({ title, body, note }: CtaBannerProps) {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/8 bg-slate/80 px-6 py-10 shadow-glow sm:px-10 sm:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                Early access
              </p>
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">{body}</p>
              {note ? (
                <p className="text-sm leading-7 text-cloud">{note}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
                className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate transition hover:bg-white"
              >
                Request Early Access
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Founder%20Conversation`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-cyan/25 hover:text-white"
              >
                Contact Founder
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
