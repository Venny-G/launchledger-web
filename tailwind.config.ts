import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070a",
        slate: "#0b1016",
        line: "rgba(123, 234, 255, 0.16)",
        panel: "rgba(9, 14, 20, 0.78)",
        cyan: "#7beaff",
        cloud: "#d8edf2",
        muted: "#8ea3ad",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(123, 234, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 234, 255, 0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(123, 234, 255, 0.16), 0 24px 64px rgba(0, 0, 0, 0.32)",
      },
      maxWidth: {
        shell: "82rem",
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        rise: "rise 0.8s ease forwards",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translate3d(0, 16px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

