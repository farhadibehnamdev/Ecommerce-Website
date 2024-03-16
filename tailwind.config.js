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

      borderRadius: {
        10: "10px",
      },
      spacing: {
        "30px": "1.875rem",
        "13.5px": "0.8437rem",
        "5px": "0.3125rem",
        "122.5px": "7.65rem",
        "16.5px": "1.03rem",
      },

      colors: {
        primary: {
          100: "#A29FA9",
          200: "#8D8A94",
          300: "#77757C",
          400: "#575360",
          500: "#131118",
          600: "#14111C",
          700: "#14111C",
          800: "#14111C",
          900: "#14111C",
        },
        secondary: {
          100: "#E1F1BC",
          200: "#CEE993",
          300: "#BCDE6B",
          400: "#AFD751",
          500: "#A3D139",
          600: "#97BD33",
          700: "#88A52A",
          800: "#798D21",
          900: "#626615",
        },
        tertiary: {
          100: "#F0B0D9",
          200: "#E67BC2",
          300: "#D846AB",
          400: "#CD0D9B",
          500: "#B21589",
          600: "#AF0A87",
          700: "#9B0982",
          800: "#8A087C",
          900: "#6C0772",
        },
        dark: "#131118",
        dark5: "#1311180D",
        dark600: "#14111C",
        dark90: "#131118E8",
        gray: "#A4A1AA",
        grayOpacity: "#A4A1AA33",
        light: "#D9E1E1",
        white: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
