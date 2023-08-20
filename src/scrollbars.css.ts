import type { ThemeCSS } from "./theme";

import { pxToRem } from "./theme";

const thumbStyle = {
    background: "var(--scrollbars-thumb)",
    backgroundClip: "padding-box",
    border: "2px solid var(--scrollbars-bg)",
    borderRadius: "$1",
};

const thumbActive: ThemeCSS = {
    background: "var(--scrollbars-thumb-active)",
    border: "2px solid var(--scrollbars-bg)",
};

// @TODO use colors from theme
const miuiScrollbars: ThemeCSS = {
    "--scrollbars-thumb": "#737373",
    "--scrollbars-thumb-active": "#737373",
    "--scrollbars-bg": "transparent",
    "scrollbar-color": "var(--scrollbars-thumb) var(--scrollbars-bg)",
    "scrollbar-width": "thin !important",

    "&::-webkit-scrollbar": {
        height: pxToRem(7),
        width: pxToRem(7),
        backgroundColor: "transparent",
        borderRadius: pxToRem(7),
    },
    "&::-webkit-scrollbar-thumb:vertical": {
        ...thumbStyle,
        "minHeight": pxToRem(10),
        "marginRight": pxToRem(2),
        "&:active": {
            ...thumbActive,
            minHeight: pxToRem(8),
            marginRight: pxToRem(4),
        },
    },
    "&::-webkit-scrollbar-thumb:horizontal": {
        ...thumbStyle,
        "minWidth": pxToRem(10),
        "marginBottom": pxToRem(2),
        "&:active": {
            ...thumbActive,
            minWidth: pxToRem(8),
            marginBottom: pxToRem(4),
        },
    },
    "&::-webkit-scrollbar-corner": {
        backgroundColor: "transparent",
    },
};

export { miuiScrollbars };
