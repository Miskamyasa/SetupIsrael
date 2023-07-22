/* eslint-disable @typescript-eslint/no-var-requires */

/* @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require("tailwindcss/defaultTheme")


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    colors: {},
    fontFamily: {
      sans: ["RubikVariable", "Rubik", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      "overlay-show": { from: { opacity: 0 }, to: { opacity: 1 } },
      "overlay-hide": { from: { opacity: 1 }, to: { opacity: 0 } },
      "content-show": {
        from: { opacity: 0, transform: "scale(0.96)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
      "content-hide": {
        from: { opacity: 1, transform: "scale(1)" },
        to: { opacity: 0, transform: "scale(0.96)" },
      },
    },
    animation: {
      "overlay-show": "overlay-show 0.2s ease-out",
      "overlay-hide": "overlay-hide 0.2s ease-out",
      "content-show": "content-show 0.2s ease-out",
      "content-hide": "content-hide 0.2s ease-out",
    },
  },
  plugins: [
    require("@kobalte/tailwindcss"),
  ],
}
