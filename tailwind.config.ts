import type { Config } from "tailwindcss";

const config = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Instrument Serif'", "serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
