import { styled } from "../../../theme.js";

const InputStyled = styled("input", {
    "boxSizing": "border-box",
    "height": "calc(103px / var(--ratio-dimensions))",
    "fontSize": "calc(34 / var(--ratio-font))",
    "color": "var(--text)",
    "border": "none",
    "display": "block",
    "width": "100%",
    "background": "none",
    "fontFamily": "inherit",
    "padding": "1.2em 0",

    "&::placeholder": {
        color: "var(--sub)",
    },
});

export {
    InputStyled,
};
