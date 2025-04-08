/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Include mdx if you use it
  ],
  theme: {
    extend: {
      // You can merge theme settings from the template later if needed
      colors: {
        // Brand colors
        primary: {
          DEFAULT: "#800020", // Burgundy - for headings and accents
          light: "#A00030", // Lighter burgundy
          dark: "#600010", // Darker burgundy
        },
        secondary: {
          DEFAULT: "#000000", // Black - for secondary elements
          light: "#333333", // Dark gray
        },
        // Text colors
        text: {
          DEFAULT: "#000000", // Black - for body text
          light: "#333333", // Dark gray - for secondary text
          inverse: "#FFFFFF", // White - for text on dark backgrounds
        },
      },
      // Add font families if you want to customize them globally
      // fontFamily: {
      //   sans: ['Inter Variable', 'sans-serif'], // Example using Inter
      //   serif: ['YourSerifFont', 'serif'],
      // },
    },
  },
  plugins: [
    // Add any Tailwind plugins used by the template or your old site here
    // e.g., require('@tailwindcss/typography'),
    require("@tailwindcss/typography"), // Enable the typography plugin
  ],
};

export default config;
