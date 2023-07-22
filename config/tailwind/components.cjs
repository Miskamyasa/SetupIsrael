const centered = {
    "display": "grid",
    "place-items": "center",
}

module.exports = (theme) => {
    const outline = `2px solid ${theme("colors.sky.600")}`
    return {
        ".container": {
            "width": "100%",
            "max-width": "1280px",
            "padding": `0 ${theme("spacing.6")}`,
            "margin": "0 auto",
        },
        ".row": {
            "display": "flex",
            "flex-wrap": "wrap",
            "align-items": "center",
        },
        ".onfocus": {
            // focus:ring-blue-500 focus:border-blue-500
        },
        ".outlined": {
            // outline-none focus-visible:outline-sky-600 focus-visible:outline-offset-2
            "outline": "none",
            "&:focus-visible": {
                outline,
                "outline-offset": "2px",
            },
        },
        ".button": {
            "display": "inline-flex",
            "justify-content": "center",
            "align-items": "center",
            "height": theme("spacing.10"),
            "width": "auto",
            "border-radius": theme("borderRadius.3xl"),
            "padding": `${theme("spacing.6")} ${theme("spacing.8")}`,
            "background-color": theme("colors.primary"),
            "color": theme("colors.bright"),
            "line-height": "0",
            "transition": "250ms background-color",
            "outline": "none",
            "&:hover": {
                "background-color": theme("colors.secondary"),
                "transition": "250ms opacity",
                "opacity": 0.81,
            },
            "&:active": {
                "background-color": theme("colors.secondary"),
            },
            "&:focus-visible": {
                outline,
                "outline-offset": "2px",
            },
        },
        ".overlay": {
            "position": "fixed",
            "inset": "0",
            "z-index": "50",
            "background-color": "rgba(0, 0, 0, 0.5)",
            ...centered,
        },
        ".overlay-positioner": {
            "position": "fixed",
            "inset": "0",
            "z-index": "51",
            ...centered,
        },
        ".overlay-content": {
            "max-width": `min(calc(100vw - ${theme("spacing.4")}), 500px)`,
            "background-color": theme("colors.gray.50"),
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.lg"),
            "margin": "10vh auto auto",
            "z-index": "52",
            "padding": `${theme("spacing.2")} ${theme("spacing.6")}`,
            "@screen lg": {
                "padding": `${theme("spacing.4")} ${theme("spacing.8")}`,
            },
        },
    }
}
