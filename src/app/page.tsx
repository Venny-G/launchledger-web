import { CtaBanner } from "@/components/cta-banner";
import { PressureTrendsFigure } from "@/components/pressure-trends-figure";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import {
  audience,
  capabilityCards,
  problemPoints,
  siteConfig,
  supportAreas,
} from "@/lib/site";

const heroStats = [
  { label: "Example configuration", value: "4-thruster Hall cluster" },
  { label: "Spacing", value: "220 to 320 mm" },
  { label: "Primary risk", value: "Plume overlap" },
];

const heroRecommendation =
  "Increase spacing beyond 240 mm and expand the power electronics keep-out zone before the layout is fixed.";

const comparisonRows = [
  { configuration: "Layout A", outcome: "High overlap", action: "Review" },
  { configuration: "Layout B", outcome: "Preferred", action: "Keep" },
  { configuration: "Layout C", outcome: "Thermal concern", action: "Review" },
];

const workflowModules = [
  {
    title: "Cluster geometry",
    body: "Define spacing, cant angles, and mounting constraints.",
  },
  {
    title: "Interaction screen",
    body: "Inspect plume overlap and aft-surface exposure.",
  },
  {
    title: "Compare options",
    body: "Review spacing, cant angle, and layout options before hardware is fixed.",
  },
];

const outerCardClass =
  "h-full border border-white/8 bg-panel px-5 py-5 transition-colors duration-200 hover:border-white/14 hover:bg-[#17212c]";

const innerCardClass =
  "h-full border border-white/8 bg-slate px-4 py-4 transition-colors duration-200 hover:border-white/14 hover:bg-[#182330]";

export default function HomePage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_31rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_34rem] xl:gap-14">
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan/75">
                  LaunchLedger
                </p>
                <h1 className="max-w-4xl font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Software for clustered electric propulsion systems
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-cloud sm:text-xl">
                  Study plume interactions, spacing limits, and integration
                  risk before hardware testing begins.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
                  className="inline-flex w-full items-center justify-center border border-cyan bg-cyan px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white sm:w-auto"
                >
                  Request Early Access
                </a>
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Founder%20Conversation`}
                  className="inline-flex w-full items-center justify-center border border-white/10 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-cyan/30 hover:text-white sm:w-auto"
                >
                  Contact Founder
                </a>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                Built for spacecraft teams evaluating multi-thruster propulsion
                layouts.
              </p>
            </div>

            <div className="border border-white/8 bg-panel p-4 shadow-glow sm:p-5 lg:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/75">
                    Example Assessment
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Four-thruster layout review
                  </h2>
                </div>
                <span className="border border-white/10 px-3 py-1 text-xs font-medium text-cloud">
                  Demonstration
                </span>
              </div>

              <dl className="mt-6 grid gap-px border border-white/8 bg-white/8 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate px-4 py-3"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan/75">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 grid gap-4">
                <div className={innerCardClass}>
                  <div className="relative h-56 overflow-hidden border border-white/8 bg-[#0d131a] sm:h-64">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(145,213,255,0.06),transparent_60%)]" />
                    <div className="absolute left-[18%] top-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute right-[18%] top-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] left-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] right-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute left-[31%] top-[31%] h-24 w-24 border border-amber-200/20 bg-amber-300/10" />
                    <div className="absolute right-[31%] top-[31%] h-24 w-24 border border-amber-200/20 bg-amber-300/10" />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-muted">
                    Cyan indicates plume envelope. Amber marks overlap pressure
                    near centerline.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className={innerCardClass}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Recommendation
                    </p>
                    <p className="mt-3 text-sm leading-6 text-cloud">
                      {heroRecommendation}
                    </p>
                  </div>

                  <div className={innerCardClass}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Comparison
                    </p>
                    <div className="mt-3 divide-y divide-white/8 border border-white/8 bg-black/15">
                      {comparisonRows.map((row) => (
                        <div
                          key={row.configuration}
                          className="grid gap-1 px-3 py-3 text-sm sm:grid-cols-[6.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-3"
                        >
                          <p className="font-medium text-white">
                            {row.configuration}
                          </p>
                          <p className="text-muted">{row.outcome}</p>
                          <span className="self-start border border-white/10 px-2.5 py-1 text-xs text-cloud">
                            {row.action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section id="problem" className="border-y border-white/6 py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Problem"
              title="Clustered propulsion creates interactions that are expensive to discover late."
              description="As spacecraft power levels rise, multiple thrusters are increasingly used in close proximity. That introduces plume, thermal, EMI, and packaging constraints that are hard to assess early."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {problemPoints.map((point) => (
                <article
                  key={point.title}
                  className={outerCardClass}
                >
                  <h3 className="text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <PressureTrendsFigure />
        </Shell>
      </section>

      <section id="platform" className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="What It Does"
                title="Evaluate clustered propulsion layouts before integration is locked."
                description="LaunchLedger helps engineering teams compare propulsion configurations earlier, when layout changes are still practical."
              />
              <div className="space-y-4">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className={`${outerCardClass} flex items-start gap-3`}
                  >
                    <span className="mt-2 h-2 w-2 bg-cyan" />
                    <p className="text-sm leading-7 text-cloud">{item}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Use LaunchLedger earlier in the design cycle instead of relying
                only on late-stage hardware testing.
              </p>
            </div>

            <div className="border border-white/8 bg-panel p-5 shadow-glow sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/75">
                    Typical Review Process
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Initial Review Steps
                  </h3>
                </div>
                <span className="border border-white/10 px-3 py-1 text-xs text-cloud">
                  Early stage
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {workflowModules.map((module, index) => (
                  <article
                    key={module.title}
                    className={innerCardClass}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      0{index + 1}
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-white">
                      {module.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {module.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section id="capabilities" className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Capabilities"
              title="Tools for real clustered propulsion design decisions."
              description="Inspect plume overlap, clearances, and layout conflicts while changes are still manageable."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {capabilityCards.map((capability) => (
                <article
                  key={capability.title}
                  className={outerCardClass}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {capability.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section id="users" className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Who It Serves"
              title="Teams making propulsion layout decisions early."
              description="Satellite developers, propulsion teams, and research groups reviewing clustered layouts before hardware is fixed."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {audience.map((item) => (
                <article
                  key={item.title}
                  className={outerCardClass}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="Interested in early access?"
        body="If you're working on clustered propulsion, spacecraft integration, or related design challenges, reach out."
        note="Private development / early access"
      />
    </>
  );
}
