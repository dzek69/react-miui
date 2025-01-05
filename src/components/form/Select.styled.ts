import { borderPxToRem, dimensionsPxToRem, pxToRem, styled } from "../../theme";

import { errorCSS, focusCSS } from "./input/Input.css";

const Select = styled("select", {
    "boxSizing": "border-box",
    "height": dimensionsPxToRem(103),
    "color": "$text",
    "display": "flex",
    "alignItems": "center",
    "width": "100%",
    "background": "white",
    "fontFamily": "inherit",
    "borderRadius": pxToRem(2),
    "padding": `0 ${dimensionsPxToRem(36)}`,
    "border": `${borderPxToRem(1)} solid $border`,
    "appearance": "auto",

    "&:where(:disabled)": {
        background: "$inputDisabledBg",
        color: "$inputDisabledText",
    },

    "&:focus": focusCSS,

    "variants": {
        error: {
            true: errorCSS,
        },
    },
});

export {
    Select,
};
