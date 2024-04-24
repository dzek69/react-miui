import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";

const Overlay = styled("div", {
    position: "fixed",
    background: "#0000004c",
    inset: 0,
    zIndex: 4,
});

const List = styled("ul", {
    zIndex: 5,
    position: "absolute",
    background: "white",
    margin: 0,
    padding: 0,
    listStyleType: "none",
});

const ListItem = styled("li", {
    "margin": 0,
    "padding": 0,
    "listStyleType": "none",

    "& + &": {
        borderTop: "1px solid var(--border)",
    },
});

const Button = styled("button", {
    "border": "none",
    "background": "white",
    "height": dimensionsPxToRem(116),
    "padding": `0 ${dimensionsPxToRem(42)}`,
    "boxSizing": "border-box",
    "width": "100%",
    "minWidth": dimensionsPxToRem(460),
    "textAlign": "left",
    "color": "$popText",
    "fontSize": fontPxToRem(26),
    "fontWeight": "revert",
    "display": "flex",
    "alignItems": "center",

    "&:hover": {
        background: "$activeBg",
    },
});

const Icon = styled("div", {
    fill: "currentColor",
    marginRight: dimensionsPxToRem(42),
});

const FakeIcon = styled("span", {
    display: "inline-block",
    width: 16,
    height: 16,
    marginRight: dimensionsPxToRem(42),
});

export {
    Overlay,
    List,
    ListItem,
    Button,
    Icon,
    FakeIcon,
};
