import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import {
  audience,
  featureCards,
  productPreview,
  problemPoints,
  siteConfig,
  solutionPoints,
} from "@/lib/site";

const heroSnapshot = [
  { label: "Launch path", value: "Rideshare shortlist" },
  { label: "Readiness", value: "14 open actions" },
  { label: "Target window", value: "Q1 2027" },
];

const timelineItems = [
  { date: "May 12", title: "Payload interface review" },
  { date: "May 27", title: "Provider document package due" },
  { date: "Jun 04", title: "Mission readiness checkpoint" },
];

const riskItems = [
  "Thermal test dates still pending",
  "Provider mass margin update requested",
  "Two documents waiting on team review",
];

const checklistItems = [
  ["Payload envelope confirmation", "Done"],
  ["ICD review package", "In review"],
  ["Provider interface matrix", "Open"],
  ["Mass properties update", "Open"],
] as const;

const milestoneItems = [
  ["May", "Integration review locked"],
  ["Jun", "Final requirement package due"],
  ["Jul", "Readiness status checkpoint"],
  ["Aug", "Launch path confirmation"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden py-20 sm:py-24 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                  Mission planning software for emerging space teams
                </p>
                <h1 className="max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Mission planning software for emerging space teams.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Track launch readiness, timelines, constraints, and mission
                  risk in one place.
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  LaunchLedger helps CubeSat, university satellite, and early
                  smallsat teams manage mission planning, launch readiness, and
                  operational coordination without relying on scattered
                  spreadsheets and email threads.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <p className="max-w-2xl text-sm leading-7 text-cloud">
                Built for CubeSat teams, university missions, and early
                smallsat operators.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-panel p-6 shadow-glow">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                      Product preview
                    </p>
                    <h2 className="mt-3 font-display text-2xl tracking-tight text-white">
                      Mission Overview
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      A planning view that keeps launch path, open work, and
                      mission status in the same place.
                    </p>
                  </div>
                  <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
                    Private preview
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
                  <div className="rounded-[1.5rem] border border-white/8 bg-slate/80 p-5">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {heroSnapshot.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-black/20 p-4"
                        >
                          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan/70">
                            {item.label}
                          </p>
                          <p className="mt-3 text-sm font-medium text-white">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan/70">
                            Launch readiness
                          </p>
                          <p className="mt-2 text-base font-medium text-white">
                            82% complete
                          </p>
                        </div>
                        <p className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                          3 blockers
                        </p>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[82%] rounded-full bg-cyan" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan/70">
                        Timeline
                      </p>
                      <div className="mt-3 space-y-3">
                        {timelineItems.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start justify-between gap-3 text-sm"
                          >
                            <span className="text-cyan">{item.date}</span>
                            <span className="flex-1 text-right text-cloud">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan/70">
                        Risks & blockers
                      </p>
                      <div className="mt-3 space-y-3">
                        {riskItems.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-cloud"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section id="problem" className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Problem"
              title="Small satellite missions still run on scattered spreadsheets, email, and hidden coordination."
              description="Early teams often manage launch access, readiness, and documentation in separate places. That makes it harder to see what is blocked, what changed, and what has to happen next."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {problemPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-[1.6rem] border border-white/8 bg-panel p-6 shadow-glow"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    {point.title}
                  </p>
                  <p className="mt-4 text-base leading-8 text-cloud">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section id="solution" className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionHeading
              eyebrow="Solution"
              title="A clearer planning layer for teams preparing real missions."
              description="LaunchLedger is a mission-planning platform that helps teams track launch paths, provider constraints, milestones, documentation status, and schedule risk in one place."
            />
            <div className="grid gap-4">
              {solutionPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-[1.4rem] border border-white/8 bg-panel p-5"
                >
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan" />
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-base leading-8 text-muted">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Capabilities"
              title="Core capabilities for launch planning and mission coordination."
              description="LaunchLedger focuses on the parts of mission planning that early teams usually have to manage by hand."
              align="center"
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[1.6rem] border border-white/8 bg-panel p-6 shadow-glow"
                >
                  <h3 className="font-display text-2xl tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Who it's for"
              title="Built for teams that need a clear planning process."
              description="The best fit is a technically serious team that needs one shared source of truth for mission planning and launch readiness."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {audience.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.6rem] border border-white/8 bg-panel p-6"
                >
                  <h3 className="font-display text-2xl tracking-tight text-white">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {group.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section id="preview" className="py-20 sm:py-24">
        <Shell>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Product preview"
              title="A mock dashboard that shows how LaunchLedger can feel in practice."
              description="This preview is product-shaped on purpose: mission overview, launch window tracking, requirements, documentation status, risks, and milestone timing."
            />

            <div className="rounded-[2rem] border border-white/8 bg-panel p-6 shadow-glow sm:p-8">
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.5rem] border border-white/8 bg-slate/80 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/70">
                        Mission workspace
                      </p>
                      <h3 className="mt-3 font-display text-2xl tracking-tight text-white">
                        LaunchLedger dashboard
                      </h3>
                    </div>
                    <div className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                      Early access
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {productPreview.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[1.2rem] border border-white/8 bg-black/20 p-4"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/70">
                          Module
                        </p>
                        <h4 className="mt-3 text-base font-medium text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/70">
                      Requirements checklist
                    </p>
                    <div className="mt-4 space-y-3">
                      {checklistItems.map(([label, status]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm"
                        >
                          <span className="text-cloud">{label}</span>
                          <span className="text-cyan">{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan/70">
                      Timeline / milestones
                    </p>
                    <div className="mt-4 space-y-4">
                      {milestoneItems.map(([month, item]) => (
                        <div key={item} className="flex gap-4">
                          <span className="w-10 text-sm font-medium text-cyan">
                            {month}
                          </span>
                          <span className="flex-1 border-l border-white/10 pl-4 text-sm text-cloud">
                            {item}
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

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="rounded-[2rem] border border-white/8 bg-slate/80 px-6 py-8 shadow-glow sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                  Founder
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
                  Built by {siteConfig.founder.name}
                </h2>
              </div>
              <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
                <p>
                  {siteConfig.founder.title} building operational software for
                  emerging space teams.
                </p>
                <p>
                  LaunchLedger is being shaped around real workflow problems in
                  early mission planning, launch coordination, and technical
                  team execution.
                </p>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="Interested in early access?"
        body="LaunchLedger is currently in private development. If you’re part of a CubeSat team, university mission, or small satellite program, reach out to learn more or share your workflow needs."
        note="Private development / early access"
      />
    </>
  );
}
