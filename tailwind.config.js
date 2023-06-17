/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jostBodyBold: ["var(--font-jostBold)", "sans-serif"],
        jostBodyRegular: ["var(--font-jostRegular)", "sans-serif"],
      },
      fontSize: {
        16: "16px",
        14: "14px",
      },
      fontWeight: {
        400: 400,
        700: 700,
      },
      lineHeight: {
        23: "23px",
      },
      dropShadow: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        10: "10px",
      },
      spacing: {
        "30px": "1.875rem",
        "13.5px": "0.8437rem",
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
        gray: "#A4A1AA",
        light: "#D9E1E1",
        white: "#FFFFFF",
      },
    },
  },

  plugins: [],
};
