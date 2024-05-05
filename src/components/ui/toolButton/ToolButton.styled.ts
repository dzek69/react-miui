import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";

/**
 * Small buttons for toolbars
 */
const ToolButton = styled("button", {
    "height": dimensionsPxToRem(79),
    "borderRadius": dimensionsPxToRem(10),
    "fontWeight": "bold",
    "fontSize": fontPxToRem(23),
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingInline": dimensionsPxToRem(16),
    "background": "white",
    "boxSizing": "border-box",
    "border": `${dimensionsPxToRem(6)} solid transparent`,

    "color": "$toolButtonText",
    "&:hover": {
        background: "#ffffffcc",
    },

    "variants": {
        inline: {
            true: {
                width: "auto",
                display: "inline-flex",
            },
        },
        variant: {
            secondary: {
                "border": `${dimensionsPxToRem(6)} solid #ffffff42`,
                "background": "none",

                "&:hover": {
                    background: "#ffffff22",
                },
                "color": "white",
            },
            secondaryOnLight: {
                "border": `${dimensionsPxToRem(6)} solid $border`,
                "background": "none",
                "color": "$text",

                "&:hover": {
                    borderColor: "$buttonBorder",
                },
            },
        },
    },
});

export {
    ToolButton,
};
