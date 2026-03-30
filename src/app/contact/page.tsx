import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "The website is under construction. Send questions and inquiries to gvenkataashish@gmail.com.",
};

const prompts = [
  "Mission type and rough orbit profile",
  "Current stage of planning or launch readiness",
  "What coordination or workflow friction you are dealing with",
  "Whether you are reaching out as an operator, collaborator, investor, or advisor",
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyan/70">
                Contact
              </p>
              <h1 className="max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl">
                Questions while the site is under construction.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                The fastest way to reach LaunchLedger right now is by email.
                Use the address below for questions, partnership notes, or
                general inquiries while the website is still being updated.
              </p>
            </div>
            <div className="rounded-[2rem] border border-cyan/15 bg-panel p-6 shadow-glow">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                Best fit
              </p>
              <p className="mt-4 text-base leading-8 text-cloud">
                Anyone with a question for LaunchLedger. For now, this page is
                mainly a simple contact surface while the rest of the site is
                under construction.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20 sm:py-24">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="How to reach out"
              title="Email is the primary contact channel right now."
              description="A short note is enough. If your message is related to missions or launch workflows, extra context is helpful, but any question is welcome."
            />
            <div className="rounded-[2rem] border border-white/8 bg-panel p-6">
              <div className="space-y-4">
                <div className="rounded-[1.4rem] border border-cyan/15 bg-cyan/5 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-3 inline-flex text-lg text-white underline decoration-cyan/40 underline-offset-4 transition hover:decoration-cyan"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Current inbox for all questions and inquiries while the
                    website remains under construction.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/70">
                    Follow
                  </p>
                  <p className="mt-3 text-base leading-8 text-cloud">
                    {siteConfig.socialLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="pb-20 pt-4 sm:pb-24">
        <Shell>
          <div className="grid gap-8 rounded-[2rem] border border-cyan/15 bg-panel px-6 py-10 shadow-glow sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Helpful context"
              title="A concise message should usually include four things."
              description="This keeps early conversations grounded in mission reality and makes it easier to determine fit."
            />
            <div className="grid gap-4">
              {prompts.map((prompt, index) => (
                <div
                  key={prompt}
                  className="flex gap-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan/20 bg-cyan/10 font-mono text-xs text-cyan">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-8 text-cloud">{prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
