/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          colors: {
              primary: "var(--color-primary)",
              business: "var(--color-business)",
              personal: "var(--color-personal)",
              mothers: "var(--color-mothers)",
              dark: "var(--color-dark)",
              dimmed: "var(--color-dimmed)",
              bright: "var(--color-bright)",
              gust: "var(--color-gust)",
              rameo: "var(--color-rameo)",
              meraki: "var(--color-meraki)",              
          },
          fontFamily: {
              sans: ["RubikVariable", "Rubik", ...defaultTheme.fontFamily.sans],
          },
          fontSize: {
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
          },
    },
  },
  plugins: [],
}
