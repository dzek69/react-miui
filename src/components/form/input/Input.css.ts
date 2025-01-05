// import type { ThemeCSS } from "../../../theme"; TODO restore

import { dimensionsPxToRem, fontPxToRem, borderPxToRem } from "../../../theme";

const input = {
    "height": dimensionsPxToRem(103),
    "fontSize": fontPxToRem(25),
    "color": "$text",
    "border": "none",
    "display": "block",
    "width": "100%",
    "background": "none",
    "fontFamily": "inherit",
    "padding": "1.2em 0",
    "flex": 1,

    "&::placeholder": {
        color: "$sub",
    },

    "&:read-only, &:disabled, &[data-error=true]": {
        color: "inherit",
    },
};
// satisfies ThemeCSS; @TODO restore

const focusCSS = {
    borderColor: "$focusColor",
};

const errorCSS = {
    borderColor: "$pinky2",
    color: "$red1",
};

const wrapper = {
    background: "white",
    display: "inline-flex",
    width: "100%",
    borderRadius: "2px",
    padding: `0 ${dimensionsPxToRem(36)}`,
    border: `${borderPxToRem(1)} solid $border`,
    alignItems: "center",

    variants: {
        disabled: {
            true: {
                background: "$inputDisabledBg",
                color: "$inputDisabledText",
            },
        },
        readOnly: {
            true: {
                color: "$inputDisabledText",
            },
        },
        focused: {
            true: focusCSS,
        },
        error: {
            true: {
                "&": errorCSS,
            },
        },
    },
};
// satisfies ThemeCSS; TODO restore

export {
    input,
    wrapper,
    focusCSS,
    errorCSS,
};
