import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title: string;
  body: string;
};

export function CtaBanner({ title, body }: CtaBannerProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan/15 bg-[linear-gradient(180deg,rgba(123,234,255,0.08),rgba(6,8,11,0.9))] px-6 py-10 shadow-glow sm:px-10 sm:py-14">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(123,234,255,0.12),transparent_58%)] sm:block" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                Under construction
              </p>
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="text-base leading-8 text-muted sm:text-lg">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate transition hover:bg-white"
              >
                Email {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
