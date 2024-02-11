import type { ThemeCSS } from "../../../theme";

import { dimensionsPxToRem, pxToRem, styled } from "../../../theme";
import { EqualActions } from "../../ui/action/EqualActions";

const Contents = styled("div", {
    flex: 1,
    display: "flex",
    alignItems: "center",
});

const Before = styled("div", {
    display: "flex",
});

const After = styled("div", {
    display: "flex",
});

const topBottomBeforeAfter: ThemeCSS = {
    padding: "7px 0",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const leftRightBeforeAfter: ThemeCSS = {
    padding: "0 7px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const topBottomShared: ThemeCSS = {
    padding: "0 16.666px",
    minHeight: pxToRem(45),

    [`& ${Before.toString()}`]: topBottomBeforeAfter,
    [`& ${After.toString()}`]: topBottomBeforeAfter,

    [`& ${EqualActions.toString()}`]: {
        margin: `${dimensionsPxToRem(56)} 0`,
    },
};

const leftRightShared: ThemeCSS = {
    padding: "16.666px 0",
    minWidth: pxToRem(45),
    flexDirection: "column",

    [`& ${Contents.toString()}`]: {
        flexDirection: "column",
        alignItems: "center",
    },

    [`& ${Before.toString()}`]: {
        flexDirection: "column",
        ...leftRightBeforeAfter,
    },

    [`& ${After.toString()}`]: {
        flexDirection: "column",
        ...leftRightBeforeAfter,
    },

    [`& ${EqualActions.toString()}`]: {
        margin: `0 ${dimensionsPxToRem(56)}`,
    },
};

const StyledHeader = styled("div", {
    "--border-color": "$colors$headerBorder",
    "--background-color": "$colors$headerBg",
    "backgroundClip": "padding-box",
    "background": "var(--background-color)",
    "display": "flex",
    "alignItems": "stretch",
    "fontSize": pxToRem(15),
    "fontWeight": "bold",
    "boxSizing": "border-box",
    "color": "$headerText",
    "gap": dimensionsPxToRem(50),

    "variants": {
        variant: {
            toolbar: {
                "--border-color": "$colors$toolbarBorder",
                "--background-color": "$colors$toolbarBg",
            },
            colored: {
                "--border-color": "var(--custom-header-color)",
                "--background-color": "var(--custom-header-color)",
                "color": "var(--custom-text-color)",
            },
        },
        position: {
            top: {
                borderBottom: "0.37px solid var(--border-color)",
                ...topBottomShared,
            },
            bottom: {
                borderTop: "0.37px solid var(--border-color)",
                order: 2,
                ...topBottomShared,
            },
            left: {
                borderRight: "0.37px solid var(--border-color)",
                ...leftRightShared,
            },
            right: {
                borderLeft: "0.37px solid var(--border-color)",
                order: 2,
                ...leftRightShared,
            },
        },
        center: {
            true: {
                [`& ${Contents.toString()}`]: {
                    justifyContent: "center",
                },
            },
        },
    },
});

export {
    StyledHeader,
    Contents,
    Before,
    After,
};
