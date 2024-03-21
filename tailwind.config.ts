import { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        10: "10px",
      },

      colors: {
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
export default config;
