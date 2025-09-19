// ESM example; keep your current format consistent (ESM or CJS)
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D4D2D",   // keep if you still use it elsewhere
        accent:  "#F5B301",
        ink:     "#0b1220",
        navy:    "#0B2E4E",   // NEW: navy
        skywash: "#E8F4FF",   // NEW: watery light blue (background)
        skyline: "#CFE9FF"    // NEW: slightly stronger blue
      },
      fontFamily: { sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans] },
    }
  },
  plugins: [],
}
