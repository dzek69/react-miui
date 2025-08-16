import { styled } from "../../theme";

// TODO pxToRem etc
const ColorDisplay = styled("div", {
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    boxSizing: "border-box",
    backgroundColor: "var(--selected-color, #000000)",
    border: "1px solid transparent",

    variants: {
        variant: {
            pill: {
                borderRadius: "8px",
                width: "auto",
                padding: "0 1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "white",
                fontWeight: "500",
            },
        },
    },
});

const LabelWrapper = styled("label", {
    "--selected-color": "#000000",
    "display": "inline-flex",
    "alignItems": "center",

    "& input": {
        "width": 0,
        "height": 0,
        "transform": "scale(0)",
        "margin": 0,
        "position": "absolute",
        "opacity": 0,
        "&:focus-visible": {
            [`+ ${ColorDisplay.toString()}`]: {
                outline: "2px solid $focusColor",
                outlineOffset: "2px",
            },
        },
    },

    "&:has(input:disabled)": {
        cursor: "not-allowed",
        [`${ColorDisplay.toString()}`]: {
            opacity: 0.5,
        },
    },

    [`&[data-error=true] > ${ColorDisplay.toString()}`]: {
        borderColor: "red",
    },

});

export {
    LabelWrapper,
    ColorDisplay,
};
