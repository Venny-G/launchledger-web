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
  { label: "Reference study", value: "4-thruster Hall cluster" },
  { label: "Spacing sweep", value: "220 to 320 mm" },
  { label: "Primary concern", value: "Plume overlap" },
  { label: "Review stage", value: "Architecture screen" },
];

const flaggedInteractions = [
  "Outer plume overlap rises sharply below 240 mm spacing.",
  "Centerline thermal loading increases in the aft deck region.",
  "Power-processing placement needs EMI review near the port pair.",
];

const tradeStudyRows = [
  { configuration: "Layout A", score: "Baseline", risk: "High overlap" },
  { configuration: "Layout B", score: "Preferred", risk: "Manageable" },
  { configuration: "Layout C", score: "Rejected", risk: "Thermal concern" },
];

const workflowModules = [
  {
    title: "Cluster geometry analysis",
    body: "Capture thruster layout, cant angles, and spacing constraints in one study.",
  },
  {
    title: "Interaction review",
    body: "Inspect plume overlap, likely interference zones, and system-level coupling concerns.",
  },
  {
    title: "Trade study support",
    body: "Compare candidate layouts before committing to hardware changes or test campaigns.",
  },
];

const focusAreas = [
  "Clustered Hall-effect thrusters",
  "Plume interaction analysis",
  "Spacecraft systems modeling",
];

export default function HomePage() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_32rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_35rem]">
            <div className="max-w-3xl space-y-8">
              <div className="space-y-5">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan/75">
                  LaunchLedger
                </p>
                <h1 className="max-w-4xl font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Software for clustered electric propulsion systems
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-cloud sm:text-xl">
                  Model plume interactions, spacing constraints, and
                  integration risk before hardware testing begins.
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  Built for spacecraft teams working with multi-thruster
                  electric propulsion architectures.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Early%20Access`}
                  className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  Request Early Access
                </a>
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=LaunchLedger%20Founder%20Conversation`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-cyan/30 hover:text-white"
                >
                  Contact Founder
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-panel p-5 shadow-glow sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/75">
                    Analysis snapshot
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    Cluster configuration review
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-cloud">
                  Representative view
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.15rem] border border-white/8 bg-slate px-4 py-4"
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
                <div className="rounded-[1.25rem] border border-white/8 bg-slate px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                    Interaction map
                  </p>
                  <div className="relative mt-4 h-56 overflow-hidden rounded-[1.15rem] border border-white/8 bg-[#0d131a]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(145,213,255,0.06),transparent_60%)]" />
                    <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full border border-cyan/30 bg-cyan/10" />
                    <div className="absolute right-[18%] top-[18%] h-20 w-20 rounded-full border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] left-[18%] h-20 w-20 rounded-full border border-cyan/30 bg-cyan/10" />
                    <div className="absolute bottom-[18%] right-[18%] h-20 w-20 rounded-full border border-cyan/30 bg-cyan/10" />
                    <div className="absolute left-[31%] top-[31%] h-24 w-24 rounded-full border border-amber-200/20 bg-amber-300/10" />
                    <div className="absolute right-[31%] top-[31%] h-24 w-24 rounded-full border border-amber-200/20 bg-amber-300/10" />
                    <div className="absolute bottom-[8%] left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-cloud">
                      Cyan: plume envelope
                    </div>
                    <div className="absolute bottom-[8%] right-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-cloud">
                      Amber: flagged overlap
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.25rem] border border-white/8 bg-slate px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Flagged interactions
                    </p>
                    <div className="mt-4 space-y-3">
                      {flaggedInteractions.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/8 bg-black/15 px-3 py-3 text-sm leading-7 text-cloud"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/8 bg-slate px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Trade study
                    </p>
                    <div className="mt-4 space-y-3">
                      {tradeStudyRows.map((row) => (
                        <div
                          key={row.configuration}
                          className="grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-white/8 bg-black/15 px-3 py-3 text-sm"
                        >
                          <div>
                            <p className="font-medium text-white">
                              {row.configuration}
                            </p>
                            <p className="mt-1 text-muted">{row.risk}</p>
                          </div>
                          <span className="self-start rounded-full border border-white/10 px-2.5 py-1 text-xs text-cloud">
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

      <section id="problem" className="border-y border-white/6 py-20 sm:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="The problem"
              title="Clustered electric propulsion introduces design interactions that are hard to evaluate early."
              description="As electric propulsion systems scale, spacecraft increasingly rely on multiple thrusters operating in close proximity. These effects are difficult to evaluate early, and physical testing is expensive, slow, and limited in scope."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {problemPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-[1.25rem] border border-white/8 bg-panel px-5 py-5"
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

      <section className="py-20 sm:py-24">
        <Shell>
          <PressureTrendsFigure />
        </Shell>
      </section>

      <section id="platform" className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="What LaunchLedger does"
                title="Evaluate clustered propulsion configurations before full hardware integration."
                description="LaunchLedger helps spacecraft teams study and evaluate clustered electric propulsion configurations before full hardware integration."
              />
              <div className="space-y-4">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.1rem] border border-white/8 bg-panel px-4 py-4"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan" />
                    <p className="text-sm leading-7 text-cloud">{item}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted">
                Instead of relying only on late-stage testing, teams can use
                LaunchLedger to screen propulsion layouts earlier in the design
                process.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-panel p-5 shadow-glow sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/75">
                    Representative workflow
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Early architecture review
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cloud">
                  Private preview
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {workflowModules.map((module) => (
                  <article
                    key={module.title}
                    className="rounded-[1.2rem] border border-white/8 bg-slate px-4 py-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/75">
                      Module
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

      <section id="capabilities" className="py-20 sm:py-24">
        <Shell>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Core capabilities"
              title="Focused tools for clustered propulsion design review."
              description="LaunchLedger is being designed to help teams understand cluster behavior earlier, with enough structure to support real engineering decisions."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {capabilityCards.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-[1.35rem] border border-white/8 bg-panel px-5 py-6"
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

      <section id="users" className="py-20 sm:py-24">
        <Shell>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Who it&apos;s for"
              title="Built for teams making clustered propulsion decisions."
              description="The platform is aimed at engineering groups that need to understand multi-thruster behavior before hardware integration is locked."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {audience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/8 bg-panel px-5 py-6"
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

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="rounded-[1.75rem] border border-white/8 bg-panel px-6 py-8 sm:px-8 sm:py-10">
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
                <p className="text-base leading-8 text-cloud sm:text-lg">
                  {siteConfig.founder.title}.
                </p>
                <p className="text-base leading-8 text-muted">
                  LaunchLedger is being developed around real technical
                  challenges in multi-thruster spacecraft design.
                </p>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-sm text-cloud"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="Interested in early access?"
        body="LaunchLedger is currently in early development. Reach out if you’re working on clustered electric propulsion, spacecraft integration, or related system design problems."
        note="Private development / early access"
      />
    </>
  );
}
