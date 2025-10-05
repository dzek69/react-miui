import { styled } from "@stitches/react";

import { fontPxToRem } from "../../../theme";

export const StyledItem = styled("button", {
    border: "none",
    padding: 0,
    fontSize: fontPxToRem(29),
    color: "var(--selector-text)",
    background: "none",

    variants: {
        active: {
            true: {
                color: "var(--selector-active)",
            },
        },
    },
});
