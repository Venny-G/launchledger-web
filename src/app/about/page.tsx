import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { principles, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how LaunchLedger is being built as an early-stage mission-planning and launch coordination platform for emerging space teams.",
};

const values = [
  {
    title: "Technical credibility first",
    body: "LaunchLedger should feel usable to aerospace people. That means clear language, practical assumptions, and respect for mission reality.",
  },
  {
    title: "Focused scope",
    body: "The goal is not to mimic large legacy systems. It is to provide better structure where early teams most often lose clarity and time.",
  },
  {
    title: "Honest stage",
    body: "This is an early-stage company and product direction. The website reflects that directly rather than leaning on invented proof points.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                About LaunchLedger
              </p>
              <h1 className="max-w-3xl font-display text-5xl tracking-tight text-white sm:text-6xl">
                Built to reduce friction between mission intent and launch
                reality.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                {siteConfig.extendedDescription}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/8 bg-panel p-6 shadow-glow">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                Current stage
              </p>
              <p className="mt-4 text-base leading-8 text-cloud">
                LaunchLedger is early-stage and actively being shaped around the
                workflows that smallsat teams actually struggle with: mission
                structure, launch-path clarity, readiness tracking, and the
                coordination work that sits around hardware.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Positioning"
              title="A startup website should answer what exists now, not what might exist years from now."
              description="LaunchLedger is positioned as a space logistics and mission-planning platform for emerging operators. The emphasis is on operational clarity, not hype."
            />
            <div className="grid gap-5">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-[1.75rem] border border-white/8 bg-panel p-6"
                >
                  <h2 className="font-display text-2xl tracking-tight text-white">
                    {value.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {value.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-10 rounded-[2rem] border border-cyan/15 bg-panel px-6 py-10 shadow-glow sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Founder context"
              title="Grounded in spacecraft systems thinking."
              description="The company is intentionally company-first, but it benefits from a technically serious perspective shaped by work around electric propulsion research and spacecraft systems."
            />
            <div className="space-y-4">
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

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-8 rounded-[2rem] border border-white/8 bg-panel p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                Formal naming
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-white">
                Public brand: LaunchLedger.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Legal or formal references can use{" "}
                <span className="text-white">{siteConfig.legalName}</span>,
                while the public-facing brand remains LaunchLedger.
              </p>
            </div>
            <div className="flex items-end">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-cyan/25 bg-cyan/10 px-5 py-3 text-sm font-semibold text-cyan transition hover:border-cyan/40 hover:bg-cyan/14 hover:text-white"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </Shell>
      </section>

      <CtaBanner
        title="LaunchLedger is being built carefully, with emphasis on useful structure and real mission workflows."
        body="That makes early feedback from operators, researchers, and technically grounded collaborators especially valuable right now."
      />
    </>
  );
}
