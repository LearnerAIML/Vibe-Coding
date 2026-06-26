import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forsythia: "var(--forsythia)",
        nocturnalExpedition: "var(--nocturnal-expedition)",
        arcticPowder: "var(--arctic-powder)",
        mysticMint: "var(--mystic-mint)",
        deepSaffron: "var(--deep-saffron)",
        oceanicNoir: "var(--oceanic-noir)",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
