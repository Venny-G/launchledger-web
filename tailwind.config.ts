import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1016",
        slate: "#111923",
        line: "rgba(255, 255, 255, 0.08)",
        panel: "#141d27",
        cloud: "#dfe7ee",
        muted: "#99a8b5",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 255, 255, 0.04), 0 12px 28px rgba(0, 0, 0, 0.18)",
      },
      maxWidth: {
        shell: "73.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
