import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18181B", // Text color based on design
        secondary: "#52525B", // Secondary text color
        accent: "#DC3035", // Red accent color
        background: "#FFFFFF",
        "background-alt": "#FAFAFA",
        "button-primary": "#18181B",
        "button-secondary": "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        "plus-jakarta": ["var(--font-plus-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};

export default config;