module.exports = (theme) => ({
    "html": {
        "font-size": "10px",
        "@media (min-width: 768px)": { // md
            "font-size": "12px",
        },
        "@media (min-width: 1024px)": { // lg
            "font-size": "14px",
        },
        "@media (min-width: 1280px)": { // xl
            "font-size": "16px",
        },
    },
    "body": {
        "color": "#565656",
        "background-color": "transparent",
        "background-image": theme("colors.mildGradient"),
    },
    "h1, h2": {
        "color": "#111",
        "font-size": "2.5rem",
        "font-weight": "600",
        "line-height": "normal",
        "max-width": "480px",
    },
    "p": {
        "font-size": "1rem",
        "line-height": "160%",
        "max-width": "560px",
    },
    "a": {
        "transition": "250ms color, 250ms background-color",
    },
})
