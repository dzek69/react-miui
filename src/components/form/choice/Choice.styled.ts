import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";

const StyledChoice = styled("div", {
    "--choice-bg": "$colors$choiceBg",
    "--choice-text": "$colors$choiceText",
    "--choice-active-bg": "$colors$choiceActiveBg",
    "--choice-active-text": "$colors$choiceActiveText",
    "--choice-border": "$colors$choiceBorder",

    "input": {
        "width": 0,
        "height": 0,
        "overflow": "hidden",
        "opacity": 0,
        "margin": 0,
        "position": "absolute",

        "&:checked + span": {
            color: "var(--choice-active-text)",
            background: "var(--choice-active-bg)",
        },
    },

    "span": {
        display: "flex",
        padding: "0 1em",
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: fontPxToRem(24),
        color: "var(--choice-text)",
        background: "var(--choice-bg)",
        whiteSpace: "nowrap",
    },

    "display": "flex",
    "border": "1px solid var(--choice-border)",
    "position": "relative",
    "borderRadius": "8px",
    "overflow": "hidden",
    "width": "max-content",
    "marginLeft": "auto",
    "marginRight": "auto",

    "label": {
        "flex": 1,
        "height": dimensionsPxToRem(89),
        "display": "flex",

        "+ label": {
            borderLeft: "1px solid var(--choice-border)",
        },
    },

    "variants": {
        wide: {
            true: {
                width: "100%",
            },
        },
        unaligned: {
            true: {
                marginLeft: "unset",
                marginRight: "unset",
            },
        },
    },
});

export {
    StyledChoice,
};
