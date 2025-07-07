import { styled, dimensionsPxToRem, borderPxToRem } from "../../theme";

const StyledToggle = styled("div", {
    boxSizing: "border-box",
    borderRadius: "100px",
    display: "inline-block",
    width: dimensionsPxToRem(44),
    height: dimensionsPxToRem(44),
    border: `${borderPxToRem(1)} solid $orange1Darker`,
    background: "$orange1",
    transition: "transform 200ms, background-color 200ms, border-color 200ms",
    transform: `translateX(${dimensionsPxToRem(48)})`,
});

const StyledContainer = styled("label", {
    "display": "inline-flex",
    "alignItems": "center",
    "border": "1px solid #ccc",
    "borderRadius": "100px",
    "position": "relative",
    "lineHeight": 0,
    "width": dimensionsPxToRem(110),
    "height": dimensionsPxToRem(62),
    "paddingLeft": dimensionsPxToRem(8),
    "boxSizing": "border-box",

    "& input": {
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        visibility: "hidden",

        [`&:not(:checked) + ${StyledToggle.toString()}`]: {
            transform: "translateX(0)",
            background: "$toggleHandleBg",
            borderColor: "$toggleHandleBorder",
        },

        [`&[data-undetermined=true] + ${StyledToggle.toString()}`]: {
            transform: `translateX(${dimensionsPxToRem(24)})`,
            background: "$toggleHandleBorder",
            borderColor: "$toggleHandleBorder",
        },

        [`&:disabled:checked + ${StyledToggle.toString()}`]: {
            borderColor: "$toggleHandleBorderDisabled",
            background: "$toggleHandleBgDisabled",
        },
    },

    "variants": {
        disabled: {
            true: {
                background: "$toggleBgDisabled",
            },
        },
    },
});

export {
    StyledContainer,
    StyledToggle,
};
