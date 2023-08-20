import { borderPxToRem, dimensionsPxToRem, fontPxToRem, pxToRem, styled } from "../../../theme";

/**
 * Call-to-action button.
 */
const Button = styled("button", {
    "height": dimensionsPxToRem(118),
    "background": "$green1",
    "border": `${borderPxToRem(1)} solid $green1Darker`,
    "color": "white",
    "borderRadius": "1000px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "100%",
    "fontSize": fontPxToRem(26),
    "padding": "0 1em",
    "gap": pxToRem(10),

    "&:disabled": {
        opacity: 0.5,
    },

    "variants": {
        inline: {
            true: {
                width: "auto",
                display: "inline-flex",
            },
        },
        outline: {
            true: {
                background: "white",
                borderColor: "$buttonBorder",
                color: "$grey1",
            },
        },
    },
});

export {
    Button,
};
