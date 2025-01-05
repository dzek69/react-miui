import { styled } from "../../theme";

const TextLabel = styled("span");

const CheckmarkWrapper = styled("div", {
    "borderRadius": "100px",
    "background": "none",
    "border": "1px solid $inactiveBg",
    "width": "18px",
    "height": "18px",
    "display": "inline-flex",
    "justifyContent": "center",
    "alignItems": "center",
    "verticalAlign": "middle",
    "boxSizing": "border-box",

    "& svg": {
        display: "none",
        width: "9px",
        height: "9px",
        fill: "white",
    },

    [`+ ${TextLabel.toString()}`]: {
        verticalAlign: "middle",
    },

    ":checked + &": {
        "borderWidth": 0,
        "color": "var(--color)",
        "background": "currentColor",
        "& svg": {
            display: "inline-block",
        },
    },

    ":checked:disabled": {
        background: "$inactiveDarkBg",
    },

    ":disabled + &": {
        background: "$activeBg",
        [`+ ${TextLabel.toString()}`]: {
            color: "$inputDisabledText",
        },
    },

    "[readonly] + &": {
        [`+ ${TextLabel.toString()}`]: {
            color: "$inputDisabledText",
        },
    },

    "[data-error=true] + &": {
        borderColor: "$pinky2",
        [`+ ${TextLabel.toString()}`]: {
            color: "$red1",
        },
    },
});

const LabelWrapper = styled("label", {
    "--color": "$colors$mainColor",

    "& input": {
        "width": 0,
        "height": 0,
        "transform": "scale(0)",
        "margin": 0,
        "verticalAlign": "middle",
        "&:focus-visible": {
            [`+ ${CheckmarkWrapper.toString()}`]: {
                boxShadow: "0 0 5px black",
            },
        },
        [`+ ${CheckmarkWrapper.toString()} + ${TextLabel.toString()}:not(:empty)`]: {
            marginLeft: "0.75em",
        },
    },
});

export {
    LabelWrapper,
    CheckmarkWrapper,
    TextLabel,
};
