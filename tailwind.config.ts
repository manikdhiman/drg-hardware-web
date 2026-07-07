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
        industrial: {
          base: "#F4F5F6",       // Premium Silver Base
          card: "#FFFFFF",
          dark: "#1A1A1A",       // Architectural Charcoal
          accent: "#0044FF",     // Anodized Cobalt Accent
        },
      },
    },
  },
  plugins: [],
};
export default config;