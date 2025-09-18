// ESM
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D4D2D",
        accent: "#F5B301",
        ink: "#0b1220",
      },
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
