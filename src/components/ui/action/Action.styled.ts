import type { ThemeCSS } from "../../../theme";

import { fontPxToRem, borderPxToRem, dimensionsPxToRem, styled } from "../../../theme";

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
    position: "relative",
});

const Badge = styled("div", {
    position: "absolute",
    background: "$red1",
    color: "white",
    fontWeight: "bold",
    top: "-25%",
    right: "-25%",
    overflow: "hidden",
    display: "flex",
    fontSize: fontPxToRem(17),
    padding: dimensionsPxToRem(17),
    width: dimensionsPxToRem(60),
    height: dimensionsPxToRem(60),
    alignItems: "center", // Vertically center content
    justifyContent: "center", // Horizontally center content
    borderRadius: "50%", // Make it circular
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
    Badge,
    Anchor,
    Button,
};
