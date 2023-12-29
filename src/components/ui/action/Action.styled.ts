import type { ThemeCSS } from "../../../theme";

import { borderPxToRem, dimensionsPxToRem, styled } from "../../../theme";

const StyledAction = styled("div", {
    height: dimensionsPxToRem(102),
    width: dimensionsPxToRem(102),
    borderRadius: dimensionsPxToRem(102),
    border: `${borderPxToRem(1)} solid $buttonBorder`,
    background: "white",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const sharedCss: ThemeCSS = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: dimensionsPxToRem(18),

};

const Anchor = styled("a", {
    ...sharedCss,
});

const Button = styled("button", {
    ...sharedCss,
    border: "none",
    padding: 0,
    background: "none",
});

export {
    StyledAction,
    Anchor,
    Button,
};
