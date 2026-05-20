import type { ThemeCSS } from "../../../theme";

import { borderPxToRem, dimensionsPxToRem, fontPxToRem } from "../../../theme";

const ITEM_HEIGHT_PX = 200;
const VISIBLE_ITEMS = 5;

const wheelViewport = {
    "position": "relative",
    "height": dimensionsPxToRem(ITEM_HEIGHT_PX * VISIBLE_ITEMS),
    "width": dimensionsPxToRem(360),
    "overflowY": "scroll",
    "scrollSnapType": "y mandatory",
    "scrollbarWidth": "none",
    "WebkitMaskImage":
        "linear-gradient(to bottom, transparent 0%, transparent 10%, black 45%,"
        + " black 55%, transparent 90%, transparent 100%)",
    "maskImage":
        "linear-gradient(to bottom, transparent 0%, transparent 10%, black 45%,"
        + " black 55%, transparent 90%, transparent 100%)",
    "overscrollBehavior": "contain",

    "&::-webkit-scrollbar": {
        display: "none",
    },
    "&:focus": {
        outline: "none",
    },
} satisfies ThemeCSS;

const wheelWrapper = {
    position: "relative",
    display: "flex",
} satisfies ThemeCSS;

const wheelFocusRing = {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: dimensionsPxToRem(ITEM_HEIGHT_PX),
    transform: "translateY(-50%)",
    pointerEvents: "none",
    border: `${borderPxToRem(2)} solid transparent`,
    borderRadius: dimensionsPxToRem(16),
    boxSizing: "border-box",
    transition: "border-color 0.15s",
} satisfies ThemeCSS;

const wheelPadder = {
    height: dimensionsPxToRem(ITEM_HEIGHT_PX * 2),
} satisfies ThemeCSS;

const wheelItem = {
    height: dimensionsPxToRem(ITEM_HEIGHT_PX),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    scrollSnapAlign: "center",
    scrollSnapStop: "always",
    fontSize: fontPxToRem(80),
    fontVariantNumeric: "tabular-nums",
    color: "$text",
    userSelect: "none",
    fontWeight: 500,
} satisfies ThemeCSS;

const wheelHighlight = {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: dimensionsPxToRem(ITEM_HEIGHT_PX),
    transform: "translateY(-50%)",
    pointerEvents: "none",
    borderTop: "1px solid $border",
    borderBottom: "1px solid $border",
} satisfies ThemeCSS;

const wheelsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: dimensionsPxToRem(36),
    position: "relative",
} satisfies ThemeCSS;

const wheelSeparator = {
    fontSize: fontPxToRem(80),
    color: "$text",
    fontWeight: 500,
    userSelect: "none",
    pointerEvents: "none",
} satisfies ThemeCSS;

const suffixButton = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "background": "none",
    "border": "none",
    "padding": dimensionsPxToRem(24),
    "margin": `0 -${dimensionsPxToRem(24)}`,
    "cursor": "pointer",
    "color": "$text",

    "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.5,
    },
} satisfies ThemeCSS;

const timeInput = {
    fontVariantNumeric: "tabular-nums",
    letterSpacing: "0.05em",
    caretColor: "$mainColor",
} satisfies ThemeCSS;

export {
    ITEM_HEIGHT_PX,
    VISIBLE_ITEMS,
    wheelViewport,
    wheelWrapper,
    wheelFocusRing,
    wheelPadder,
    wheelItem,
    wheelHighlight,
    wheelsContainer,
    wheelSeparator,
    suffixButton,
    timeInput,
};
