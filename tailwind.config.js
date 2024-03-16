import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: { max: "639px" },
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "30px": "1.875rem",
        "13.5px": "0.8437rem",
        "5px": "0.3125rem",
        "122.5px": "7.65rem",
        "16.5px": "1.03rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
