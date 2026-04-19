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
  { label: "Study case", value: "4-thruster Hall cluster" },
  { label: "Spacing range", value: "220 to 320 mm" },
  { label: "Main flag", value: "Plume overlap" },
  { label: "Stage", value: "Pre-integration" },
];

const flaggedInteractions = [
  "Outer plumes begin overlapping below 240 mm spacing.",
  "Aft-surface exposure rises near the centerline.",
  "Power electronics zone needs wider EMI clearance.",
];

const tradeStudyRows = [
  { configuration: "Layout A", score: "Baseline", risk: "High overlap" },
  { configuration: "Layout B", score: "Preferred", risk: "Manageable" },
  { configuration: "Layout C", score: "Rejected", risk: "Thermal concern" },
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
            <div className="max-w-3xl space-y-7">
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

            <div className="border border-white/8 bg-panel p-5 shadow-glow sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/75">
                    Review snapshot
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Four-thruster layout check
                  </h2>
                </div>
                <span className="border border-white/10 px-3 py-1 text-xs font-medium text-cloud">
                  Illustrative
                </span>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className={innerCardClass}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                <div className={innerCardClass}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                    Plume overlap map
                  </p>
                  <div className="relative mt-4 h-56 overflow-hidden border border-white/8 bg-[#0d131a]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(145,213,255,0.06),transparent_60%)]" />
                    <div className="absolute left-[18%] top-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute right-[18%] top-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] left-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] right-[18%] h-20 w-20 border border-cyan/30 bg-cyan/10" />
                    <div className="absolute left-[31%] top-[31%] h-24 w-24 border border-amber-200/20 bg-amber-300/10" />
                    <div className="absolute right-[31%] top-[31%] h-24 w-24 border border-amber-200/20 bg-amber-300/10" />
                    <div className="absolute bottom-[8%] left-4 border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-cloud">
                      Cyan: plume envelope
                    </div>
                    <div className="absolute bottom-[8%] right-4 border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-cloud">
                      Amber: flagged overlap
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={innerCardClass}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Review notes
                    </p>
                    <div className="mt-4 space-y-3">
                      {flaggedInteractions.map((item) => (
                        <div
                          key={item}
                          className="border border-white/8 bg-black/15 px-3 py-3 text-sm leading-7 text-cloud"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={innerCardClass}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Layout comparison
                    </p>
                    <div className="mt-4 space-y-3">
                      {tradeStudyRows.map((row) => (
                        <div
                          key={row.configuration}
                          className="grid grid-cols-[1fr_auto] gap-3 border border-white/8 bg-black/15 px-3 py-3 text-sm"
                        >
                          <div>
                            <p className="font-medium text-white">
                              {row.configuration}
                            </p>
                            <p className="mt-1 text-muted">{row.risk}</p>
                          </div>
                          <span className="self-start border border-white/10 px-2.5 py-1 text-xs text-cloud">
                            {row.score}
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
              eyebrow="The problem"
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
                eyebrow="What LaunchLedger does"
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
                    Typical review flow
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Typical Review Flow
                  </h3>
                </div>
                <span className="border border-white/10 px-3 py-1 text-xs text-cloud">
                  Early workflow
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {workflowModules.map((module) => (
                  <article
                    key={module.title}
                    className={innerCardClass}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Step
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
              eyebrow="Core capabilities"
              title="Tools built for real clustered propulsion design decisions."
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
              eyebrow="Who it's for"
              title="Who it's for"
              description="For teams making propulsion layout decisions early."
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

      <section className="py-16 sm:py-20 lg:py-24">
        <Shell>
          <div className="border border-white/8 bg-panel px-5 py-8 shadow-glow sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan/75">
                  Founder
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
                  Built by {siteConfig.founder.name}
                </h2>
              </div>

              <div className="space-y-5">
                <p className="max-w-2xl text-sm leading-7 text-cloud sm:text-base">
                  {siteConfig.founder.title}.
                </p>
                <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  LaunchLedger began as independent research into clustered Hall
                  thruster plume interactions and the lack of practical
                  early-stage design tools.
                </p>
              </div>
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
