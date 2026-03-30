import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import {
  audience,
  platformPillars,
  principles,
  problemPoints,
  siteConfig,
} from "@/lib/site";

const missionPhases = [
  "Mission scope and assumptions",
  "Launch path and rideshare constraints",
  "Payload readiness and documentation",
  "Schedule pressure and risk visibility",
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden py-20 sm:py-24 lg:py-28">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div
                data-reveal="1"
                className="construction-badge inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.32em] shadow-glow"
              >
                Under construction
              </div>
              <div className="space-y-6">
                <h1
                  data-reveal="2"
                  className="max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                  LaunchLedger is under construction.
                </h1>
                <p
                  data-reveal="3"
                  className="max-w-2xl text-lg leading-8 text-muted sm:text-xl"
                >
                  {siteConfig.description}
                </p>
                <p
                  data-reveal="4"
                  className="max-w-2xl text-base leading-8 text-muted"
                >
                  We are still building the public-facing experience. If you
                  need anything in the meantime, send your question to{" "}
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="font-medium text-white underline decoration-cyan/40 underline-offset-4 transition hover:decoration-cyan"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  .
                </p>
              </div>
              <div
                data-reveal="4"
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center justify-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate transition hover:bg-white"
                >
                  Email questions
                </a>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-cloud transition hover:border-cyan/25 hover:text-white"
                >
                  View current direction
                </Link>
              </div>
            </div>
            <div data-reveal="3" className="relative">
              <div className="absolute -right-12 top-0 hidden h-40 w-40 rounded-full bg-cyan/10 blur-3xl lg:block" />
              <div className="construction-panel relative overflow-hidden rounded-[2rem] border p-6 shadow-glow">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-300/80">
                      Temporary landing page
                    </p>
                    <p className="mt-2 text-sm text-cloud">
                      This site is being refreshed. Questions should go straight
                      to the inbox below.
                    </p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-amber-300/30 bg-amber-300/10 font-mono text-[10px] uppercase tracking-[0.3em] text-amber-200">
                    WIP
                  </div>
                </div>
                <div className="space-y-4 rounded-[1.5rem] border border-white/6 bg-black/30 p-4">
                  {missionPhases.map((phase, index) => (
                    <div
                      key={phase}
                      className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan/20 bg-cyan/10 font-mono text-xs text-cyan">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{phase}</p>
                        <p className="mt-1 text-sm text-muted">
                          Planned focus area while the full site and product
                          story are still in progress.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-300/80">
                      Status
                    </p>
                    <p className="mt-3 text-sm leading-7 text-cloud">
                      Public site under construction with a simplified contact
                      path for anyone trying to reach LaunchLedger.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-300/80">
                      Questions
                    </p>
                    <p className="mt-3 text-sm leading-7 text-cloud">
                      Email{" "}
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-white underline decoration-amber-300/40 underline-offset-4 transition hover:decoration-amber-300"
                      >
                        {siteConfig.contactEmail}
                      </a>{" "}
                      for anything you need while the website is being updated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="The problem"
              title="Getting a small satellite mission ready still involves too much hidden coordination."
              description="The gap is not only technical capability. It is the operational overhead between launch reality, mission planning, payload readiness, and the practical work of staying aligned."
            />
            <div className="grid gap-5">
              {problemPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-[1.6rem] border border-white/8 bg-panel p-6 shadow-glow"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    Issue 0{index + 1}
                  </p>
                  <p className="mt-4 text-base leading-8 text-cloud">{point}</p>
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
              eyebrow="How LaunchLedger helps"
              title="A clearer planning layer for teams that need rigor without heavyweight process."
              description="LaunchLedger is being developed as a mission-enablement platform for smaller operators. The aim is to make launch and mission workflows more legible before teams scale into more fragmented operations."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {platformPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/8 bg-panel p-6 shadow-glow"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-5 font-display text-2xl tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {pillar.body}
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
              eyebrow="Who it serves"
              title="Built for teams moving from concept to credible mission execution."
              description="The most immediate value is for technically serious groups that need more structure around launch and early operations without pretending to be a mature enterprise."
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

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 rounded-[2rem] border border-cyan/15 bg-panel px-6 py-10 shadow-glow sm:px-8 sm:py-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Why now"
              title="The smallsat ecosystem is growing faster than its operational tooling."
              description="More teams can build spacecraft than before, but the surrounding workflows are still uneven. That creates an opening for focused infrastructure that improves clarity before complexity compounds."
            />
            <div className="grid gap-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex gap-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan/20 bg-cyan/10 font-mono text-xs text-cyan">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-8 text-cloud">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="The website is still under construction, but the inbox is open."
        body="If you have a question for LaunchLedger, send it to gvenkataashish@gmail.com and we will reply from there."
      />
    </>
  );
}
