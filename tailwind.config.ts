import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111b",
        slate: "#0f1724",
        line: "rgba(119, 209, 255, 0.18)",
        panel: "#0f1724",
        cyan: "#77d1ff",
        cloud: "#dce8ef",
        muted: "#92a3b3",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(119, 209, 255, 0.14), 0 20px 48px rgba(0, 0, 0, 0.26)",
      },
      maxWidth: {
        shell: "82rem",
      },
    },
  },
  plugins: [],
};

export default config;
