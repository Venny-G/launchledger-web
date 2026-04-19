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
        cyan: "#91d5ff",
        cloud: "#dfe7ee",
        muted: "#99a8b5",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 42px rgba(0, 0, 0, 0.22)",
      },
      maxWidth: {
        shell: "78rem",
      },
    },
  },
  plugins: [],
};

export default config;
