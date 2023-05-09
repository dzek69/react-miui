import { styled } from "../../../theme.js";

const StyledValue = styled("div", {
    color: "var(--icon)",
    fontSize: "calc(26px / var(--ratio-font))",
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
});

export {
    StyledValue,
};
