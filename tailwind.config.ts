import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-manrope)", "sans-serif"], serif: ["var(--font-playfair)", "serif"] },
      colors: { ink: "#15130f", paper: "#f4f1eb", peach: "#e48f6b", moss: "#405843" },
      boxShadow: { soft: "0 22px 55px -28px rgb(33 28 22 / .36)" },
    },
  },
  plugins: [],
};

export default config;
