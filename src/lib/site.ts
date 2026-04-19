export const siteConfig = {
  name: "LaunchLedger",
  legalName: "LaunchLedger SpaceWorks",
  description:
    "Software for clustered electric propulsion systems. Model plume interactions, spacing constraints, and integration risk before hardware testing begins.",
  extendedDescription:
    "LaunchLedger helps spacecraft teams analyze clustered electric propulsion configurations before hardware testing, with a focus on plume interaction, spacing, interference, and system-level integration risk.",
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
    "Clustered electric propulsion software for plume interaction, spacing, and integration risk analysis.",
  founder: {
    name: "Venkataashish Gogineni",
    title:
      "Aerospace researcher focused on electric propulsion, clustered Hall-effect thrusters, and spacecraft systems modeling",
  },
};

export const problemPoints = [
  {
    title: "Plume-plume interactions",
    body: "Adjacent thrusters can change plume shape, overlap, and downstream behavior in ways that are hard to estimate with spreadsheets alone.",
  },
  {
    title: "Efficiency losses",
    body: "Cluster effects can reduce expected performance and complicate how propulsion systems behave at the full-vehicle level.",
  },
  {
    title: "Spacing tradeoffs",
    body: "Layout decisions are constrained by packaging, structure, thermal margins, and how close thrusters can operate without unwanted interaction.",
  },
  {
    title: "Thermal coupling",
    body: "Hot spots and local heating can appear when multiple thrusters operate near shared surfaces and nearby hardware.",
  },
  {
    title: "Electromagnetic interference",
    body: "Closer layouts can create EMI concerns that affect avionics, power-processing placement, and system integration decisions.",
  },
  {
    title: "Integration risk",
    body: "These interactions often stay hidden until late review or hardware test, when fixes are slower and more expensive.",
  },
];

export const supportAreas = [
  "Thruster spacing analysis",
  "Plume interaction visualization",
  "Performance penalty estimation",
  "Thermal and electromagnetic coupling review",
  "Architecture-level trade studies",
];

export const capabilityCards = [
  {
    title: "Cluster geometry analysis",
    body: "Evaluate how thruster spacing and layout affect system behavior.",
  },
  {
    title: "Plume interaction modeling",
    body: "Visualize overlap, divergence, and interference across clustered configurations.",
  },
  {
    title: "Integration risk screening",
    body: "Identify where propulsion layout choices may create thermal or electromagnetic concerns.",
  },
  {
    title: "Trade study support",
    body: "Compare candidate configurations before committing to test campaigns or hardware changes.",
  },
];

export const audience = [
  {
    title: "Satellite manufacturers",
    body: "Teams developing spacecraft that depend on clustered electric propulsion at higher power levels.",
  },
  {
    title: "Propulsion companies",
    body: "Organizations exploring multi-thruster architectures and early configuration tradeoffs.",
  },
  {
    title: "Research labs and advanced concept teams",
    body: "Groups studying electric propulsion interactions, scalability, and system integration.",
  },
];
