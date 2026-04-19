import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title: string;
  body: string;
  note?: string;
};

export function CtaBanner({ title, body, note }: CtaBannerProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="border border-white/8 bg-panel px-5 py-8 shadow-glow sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/55">
                Early access
              </p>
              <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                {body}
              </p>
              {note ? (
                <p className="text-sm leading-7 text-cloud">{note}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
                className="inline-flex w-full items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white/90 sm:w-auto"
              >
                Request Early Access
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Founder%20Conversation`}
                className="inline-flex w-full items-center justify-center border border-white/12 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-white/28 hover:text-white sm:w-auto"
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
