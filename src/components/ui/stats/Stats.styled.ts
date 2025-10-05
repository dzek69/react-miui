import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";

const StyledStats = styled("ul", {
    "--stats-border": "1px solid rgba(255, 255, 255, .15)",
    "--stats-bg": "rgba(255, 255, 255, .05)",
    "--stats-value-color": "rgba(255, 255, 255, .9)",
    "--stats-label-color": "rgba(255, 255, 255, .61)",

    "display": "flex",
    "width": "100%",
    "padding": dimensionsPxToRem(60),
    "margin": "0",
    "borderTop": "var(--stats-border)",
    "background": "var(--stats-bg)",
    "backgroundClip": "padding-box",
    "listStyleType": "none",

    "variants": {
        variant: {
            dark: {
                "--stats-border": "1px solid rgba(0, 0, 0, .15)",
                "--stats-bg": "rgba(0, 0, 0, .05)",
                "--stats-value-color": "rgba(0, 0, 0, .9)",
                "--stats-label-color": "rgba(0, 0, 0, .61)",
            },
        },
    },
});

const Item = styled("li", {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    gap: dimensionsPxToRem(20),
});

const Separator = styled("li", {
    borderLeft: "var(--stats-border)",
});

const Label = styled("span", {
    display: "block",
    color: "var(--stats-label-color)",
    fontSize: fontPxToRem(22),
});

const Value = styled("span", {
    display: "block",
    color: "var(--stats-value-color)",
    fontSize: fontPxToRem(30),
});

export {
    StyledStats,
    Item,
    Separator,
    Label,
    Value,
};
