export const siteConfig = {
  name: "LaunchLedger",
  legalName: "LaunchLedger SpaceWorks",
  description:
    "LaunchLedger is currently under construction. For questions, updates, or early inquiries, email gvenkataashish@gmail.com.",
  extendedDescription:
    "The LaunchLedger website is currently under construction while the product direction and public presence are being refined. If you have questions or want to reach the team directly, use gvenkataashish@gmail.com.",
  url: "https://launchledger.space",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/platform", label: "Platform" },
    { href: "/contact", label: "Contact" },
  ],
  contactEmail: "gvenkataashish@gmail.com",
  socialLabel:
    "Questions, partnership notes, and general inquiries should go to gvenkataashish@gmail.com while the site is under construction.",
};

export const audience = [
  {
    title: "CubeSat teams",
    body: "Teams coordinating launch readiness, interfaces, timelines, and mission dependencies with limited internal bandwidth.",
  },
  {
    title: "University programs",
    body: "Student-led missions that need more structure around launch access, planning assumptions, and operational handoffs.",
  },
  {
    title: "Early-stage smallsat startups",
    body: "Founders and mission leads shaping repeatable workflows before operations become fragmented across spreadsheets and email chains.",
  },
];

export const problemPoints = [
  "Launch access is still fragmented across provider constraints, rideshare timing, payload requirements, and mission-specific tradeoffs.",
  "Emerging teams often operate without a coherent planning layer for readiness, documentation, schedule pressure, and coordination risk.",
  "Early mission work is usually spread across disconnected tools before a team can justify heavier enterprise systems.",
];

export const platformPillars = [
  {
    eyebrow: "Mission planning",
    title: "Turn early mission assumptions into a usable operating surface.",
    body: "LaunchLedger is designed to give teams a clearer structure for timelines, constraints, milestones, and decision points before those details turn into hidden risk.",
  },
  {
    eyebrow: "Launch coordination",
    title: "Make launch access and integration workflows easier to reason about.",
    body: "We are exploring a platform layer that helps smaller teams track launch paths, requirements, dependencies, and readiness signals in one place.",
  },
  {
    eyebrow: "Operational clarity",
    title: "Reduce friction between planning, execution, and handoff.",
    body: "The goal is not more dashboard noise. It is better visibility into the operational work around getting a mission from concept toward orbit.",
  },
];

export const principles = [
  "Built for technically literate teams that need clarity, not marketing gloss.",
  "Focused on early mission phases where ambiguity is expensive and process is still lightweight.",
  "Honest about stage: LaunchLedger is early, exploratory, and being shaped around real workflow pain.",
];
