import { styled } from "@stitches/react";

import { dimensionsPxToRem } from "../../../theme";

export const Root = styled("div", {
    "--selector-text": "$colors$selectorText",
    "--selector-active": "$colors$selectorActive",

    "display": "flex",
    "flex": 1,
    "justifyContent": "center",
    "gap": dimensionsPxToRem(114),
});
