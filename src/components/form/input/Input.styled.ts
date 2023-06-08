import { borderPxToRem, dimensionsPxToRem, fontPxToRem, styled } from "../../../theme.js";

const StyledInput = styled("input", {
    "height": dimensionsPxToRem(103),
    "fontSize": fontPxToRem(34),
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
});

const StyledWrapper = styled("div", {
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

                [StyledInput.toString()]: {
                    color: "$inputDisabledText",
                },
            },
        },
        readOnly: {
            true: {
                color: "$inputDisabledText",

                [StyledInput.toString()]: {
                    color: "$inputDisabledText",
                },
            },
        },
        focused: {
            true: {
                borderColor: "$focusColor",
            },
        },
    },
});

const StyledPrefix = styled("div", {
    marginRight: dimensionsPxToRem(36),
    display: "flex",
});

const StyledSuffix = styled("div", {
    marginLeft: dimensionsPxToRem(36),
    display: "flex",
});

export {
    StyledInput,
    StyledWrapper,
    StyledPrefix,
    StyledSuffix,
};
