import type { ThemeCSS } from "../../../theme";

import { borderPxToRem, dimensionsPxToRem, fontPxToRem } from "../../../theme";

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
} satisfies ThemeCSS;

const focusCSS = {
    borderColor: "$focusColor",
};

const errorCSS = {
    borderColor: "$pinky2",
    color: "$red1",
};

const wrapper = {
    background: "$background",
    display: "inline-flex",
    width: "100%",
    borderRadius: "2px",
    padding: `0 ${dimensionsPxToRem(36)}`,
    border: `${borderPxToRem(1)} solid $border`,
    alignItems: "center",
    position: "relative",

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
} satisfies ThemeCSS;

const inputContainer = {
    position: "relative",
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "inherit",
} satisfies ThemeCSS;

const label = {
    position: "absolute",
    left: 0,
    color: "$sub",
    pointerEvents: "none",
    backgroundColor: "inherit",
    padding: `0 ${dimensionsPxToRem(12)}`,
    marginLeft: `-${dimensionsPxToRem(12)}`,
    maxWidth: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "top 150ms ease, font-size 150ms ease, color 150ms ease",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: fontPxToRem(25),
    lineHeight: 1,

    variants: {
        floating: {
            true: {
                top: 0,
                fontSize: fontPxToRem(17),
                color: "$text",
            },
        },
        error: {
            true: {},
        },
    },

    compoundVariants: [
        {
            floating: true,
            error: true,
            css: { color: "$red1" },
        },
    ],
} satisfies ThemeCSS;

export {
    input,
    wrapper,
    inputContainer,
    label,
    focusCSS,
    errorCSS,
};
