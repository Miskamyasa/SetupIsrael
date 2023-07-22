/* eslint-disable @typescript-eslint/no-var-requires */

/* @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require("tailwindcss/defaultTheme")

const colors = {
    primary: "#2639ED",
    business: "#7000FF",
    personal: "#FFD600",
    mothers: "#FA00FF",
    dark: "#565656",
    dimmed: "#757575",
    bright: "#FFFFFF",

    // svg fills
    gust: "#DAE9FF",
    rameo: "#FFF5DB",
    meraki: "#FEE3FF",
}

// background: var(--test, linear-gradient(180deg, #7086FF 0 %, #4C4EF0 100 %));
// background: var(--test, linear-gradient(180deg, #7086FF 0%, #4C4EF0 100%));


module.exports = {
    colors,
    fontFamily: {
        sans: ["RubikVariable", "Rubik", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
        "overlay-show": {from: {opacity: 0}, to: {opacity: 1}},
        "overlay-hide": {from: {opacity: 1}, to: {opacity: 0}},
        "content-show": {
            from: {opacity: 0, transform: "scale(0.96)"},
            to: {opacity: 1, transform: "scale(1)"},
        },
        "content-hide": {
            from: {opacity: 1, transform: "scale(1)"},
            to: {opacity: 0, transform: "scale(0.96)"},
        },
    },
    animation: {
        "overlay-show": "overlay-show 0.2s ease-out",
        "overlay-hide": "overlay-hide 0.2s ease-out",
        "content-show": "content-show 0.2s ease-out",
        "content-hide": "content-hide 0.2s ease-out",
    },
}
