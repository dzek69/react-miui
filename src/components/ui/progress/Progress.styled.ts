import { borderPxToRem, css, dimensionsPxToRem, styled } from "../../../theme";

const Container = styled("div", {
    "height": dimensionsPxToRem(20),
    "position": "relative",
    "overflow": "hidden",

    "variants": {
        size: {
            big: {
                height: dimensionsPxToRem(40),
            },
        },
    },

    "--value-border-color": "$colors$blue5",
    "--value-background-color": "$colors$blue4",
    "--container-border-color": "$colors$border",
    "--container-background-color": "$colors$toggleBgDisabled",

});

const sharedValueStyles = css({
    position: "absolute",
    top: 0,
    height: `100%`,
    borderRadius: "9999px",
    border: `${borderPxToRem(1)} solid $border`,
    background: "$background",
});

const Value = styled("div", sharedValueStyles, {
    borderColor: "var(--value-border-color)",
    background: "var(--value-background-color)",
    transition: "right 0.3s, border-width 0.3s, left 0.3s",

    variants: {
        zero: {
            true: {
                borderWidth: 0,
            },
        },
    },
});

const Background = styled("div", sharedValueStyles, {
    borderColor: "var(--container-border-color)",
    background: "var(--container-background-color)",
    width: "100%",
});

export {
    Container,
    Value,
    Background,
};
