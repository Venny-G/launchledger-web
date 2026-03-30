import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { platformPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See how LaunchLedger frames mission planning, launch coordination, and operational clarity for emerging smallsat teams.",
};

const workflow = [
  {
    title: "Map the mission baseline",
    body: "Define core assumptions, major dependencies, timing pressure, and the mission context that should shape every downstream decision.",
  },
  {
    title: "Track launch-facing constraints",
    body: "Surface the launch-path questions, interface requirements, scheduling realities, and readiness gates that often stay scattered across email and notes.",
  },
  {
    title: "Keep planning operational",
    body: "Treat mission planning as a living operational surface rather than a static spreadsheet snapshot that falls behind reality.",
  },
];

const focusAreas = [
  "Mission assumptions and planning structure",
  "Launch path visibility and coordination readiness",
  "Key milestones, dependencies, and handoff clarity",
  "A lighter operational layer for small or emerging teams",
];

export default function PlatformPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                Platform view
              </p>
              <h1 className="max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl">
                Designed to make launch and mission workflows more legible.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                LaunchLedger is not presented as a finished enterprise stack. It
                is a focused platform concept for teams that need structure
                around mission planning and launch coordination before complexity
                gets out ahead of them.
              </p>
            </div>
            <div className="rounded-[2rem] border border-cyan/15 bg-panel p-6 shadow-glow">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                Core framing
              </p>
              <p className="mt-4 text-base leading-8 text-cloud">
                The product direction centers on helping smaller operators work
                through early mission structure, launch access, and execution
                readiness with more clarity and less fragmentation.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Capability themes"
              title="Three areas define the initial product shape."
              description="These are not inflated feature claims. They are the operating problems LaunchLedger is being built to address."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {platformPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/8 bg-panel p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    {pillar.eyebrow}
                  </p>
                  <h2 className="mt-5 font-display text-2xl tracking-tight text-white">
                    {pillar.title}
                  </h2>
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
          <div className="grid gap-12 rounded-[2rem] border border-white/8 bg-panel px-6 py-10 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Working model"
              title="A pragmatic workflow from mission concept toward launch readiness."
              description="The platform direction assumes that smaller teams need better coordination surfaces more than they need another oversized toolchain."
            />
            <div className="grid gap-5">
              {workflow.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan/20 bg-cyan/10 font-mono text-xs text-cyan">
                      0{index + 1}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl tracking-tight text-white">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-base leading-8 text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="What sits inside scope"
              title="LaunchLedger stays focused on the operational layer around getting to orbit."
              description="That means keeping the product story narrow enough to feel credible while still useful to the right audience."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-cyan/15 bg-cyan/5 px-5 py-4 text-base leading-7 text-cloud"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="LaunchLedger is most useful where mission work is technically serious but the process layer is still thin."
        body="If that matches your team or your experience in the smallsat ecosystem, there is room for a focused conversation now."
      />
    </>
  );
}
