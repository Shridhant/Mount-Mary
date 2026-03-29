import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0B1220",
          800: "#111E33",
          700: "#162645",
          600: "#1E3560",
        },
        gold: {
          300: "#E8C06A",
          400: "#D4A843",
          500: "#C9963A",
          600: "#A87A2A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
