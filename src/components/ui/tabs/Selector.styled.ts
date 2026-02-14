import { keyframes, styled } from "@stitches/react";

import { dimensionsPxToRem, fontPxToRem } from "../../../theme";

const nudgeRight = keyframes({
    "0%, 100%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(3px)" },
});

const nudgeLeft = keyframes({
    "0%, 100%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(-3px)" },
});

const Root = styled("div", {
    "--selector-text": "$colors$selectorText",
    "--selector-active": "$colors$selectorActive",

    "display": "flex",
    "flex": 1,
    "justifyContent": "center",
    "gap": dimensionsPxToRem(114),

    "variants": {
        multiLine: {
            true: {
                flexWrap: "wrap",
                rowGap: dimensionsPxToRem(60),
            },
            false: {
                "flexWrap": "nowrap",
                "overflowX": "auto",
                "scrollbarWidth": "none",
                "justifyContent": "flex-start",
                "paddingRight": dimensionsPxToRem(60),
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            },
        },
    },
});

const Wrapper = styled("div", {
    position: "relative",
    display: "flex",
    flex: 1,
    overflow: "hidden",
});

const Arrow = styled("div", {
    position: "absolute",
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
    fontSize: fontPxToRem(29),
    color: "var(--selector-text)",
    opacity: 0,
    transition: "opacity 0.2s ease",

    variants: {
        side: {
            right: {
                right: 0,
                paddingRight: dimensionsPxToRem(12),
                animation: `${String(nudgeRight)} 1.5s ease-in-out 0.5s 2`,
            },
            left: {
                left: 0,
                paddingLeft: dimensionsPxToRem(12),
                animation: `${String(nudgeLeft)} 1.5s ease-in-out 0.5s 2`,
            },
        },
        visible: {
            true: {
                opacity: 0.65,
            },
        },
    },
});

export { Arrow, Root, Wrapper };
