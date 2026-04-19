export const siteConfig = {
  name: "LaunchLedger",
  legalName: "LaunchLedger SpaceWorks",
  description:
    "Software for clustered electric propulsion systems. Study plume interactions, spacing limits, and integration risk before hardware testing begins.",
  extendedDescription:
    "LaunchLedger is early software for evaluating clustered electric propulsion layouts, with emphasis on plume overlap, thermal loading, EMI proximity, and packaging conflicts.",
  url: "https://launchledger.app",
  nav: [
    { href: "#problem", label: "Problem" },
    { href: "#platform", label: "Platform" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#users", label: "Who It's For" },
    { href: "#contact", label: "Contact" },
  ],
  contactEmail: "inquiry@launchledger.app",
  socialLabel:
    "Clustered electric propulsion software for plume interaction, spacing, and integration review.",
  founder: {
    name: "Venkataashish Gogineni",
    title:
      "Aerospace researcher focused on electric propulsion, clustered Hall-effect thrusters, and spacecraft systems modeling",
  },
};

export const problemPoints = [
  {
    title: "Plume-plume interactions",
    body: "Adjacent thrusters can distort plume shape and downstream flow behavior.",
  },
  {
    title: "Efficiency losses",
    body: "Cluster effects can reduce expected net performance.",
  },
  {
    title: "Spacing tradeoffs",
    body: "Layouts are limited by structure, thermal margins, and interaction distance.",
  },
  {
    title: "Thermal coupling",
    body: "Shared surfaces may see localized heating.",
  },
  {
    title: "Electromagnetic interference",
    body: "Thruster placement can affect avionics and power electronics zones.",
  },
  {
    title: "Integration risk",
    body: "Late discoveries are slower and costlier to fix.",
  },
];

export const supportAreas = [
  "Thruster spacing review",
  "Plume overlap screening",
  "Performance impact estimates",
  "Thermal / EMI checks",
  "Layout trade studies",
];

export const capabilityCards = [
  {
    title: "Cluster geometry analysis",
    body: "Evaluate how layout choices affect proximity and clearance.",
  },
  {
    title: "Plume interaction modeling",
    body: "Inspect overlap, divergence, and likely interference zones.",
  },
  {
    title: "Integration screening",
    body: "Highlight thermal or EMI concerns near sensitive systems.",
  },
  {
    title: "Trade comparisons",
    body: "Compare multiple candidate layouts quickly.",
  },
];

export const audience = [
  {
    title: "Satellite manufacturers",
    body: "Programs integrating clustered electric propulsion into larger spacecraft.",
  },
  {
    title: "Propulsion companies",
    body: "Teams evaluating multi-thruster architectures.",
  },
  { title: "Research labs", body: "Groups studying propulsion interaction and scalability." },
];
