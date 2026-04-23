/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0047A6", // Indiana Blue
          light: "#2060C0",
          dark: "#003080",
        },
        crimson: "#E3170A",  // Cardinal Crimson
        gold: "#D09006",     // Victory Gold
        secondary: {
          DEFAULT: "#000000",
          light: "#333333",
        },
        text: {
          DEFAULT: "#000000",
          light: "#333333",
          inverse: "#FFFFFF",
        },
      },
      fontFamily: {
        sunborn: ['"Limelight"', '"Arial Black"', "serif"],
        hussar: ['"Josefin Sans"', "Verdana", "sans-serif"],
        sans: ["Verdana", "Geneva", "sans-serif"],
        body: ["Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
