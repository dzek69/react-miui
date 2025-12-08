import { createStitches } from "@stitches/react";

import type { CSS as StitchesCSS } from "@stitches/react";
import type { StyledComponent } from "@stitches/react/types/styled-component";

const RATIOS = {
    dimensions: 3,
    border: 1,
    font: 1.666666,
};

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const pxToRem = (px: number) => `${px / 16}rem`;
const dimensionsPxToRem = (px: number) => pxToRem(px / RATIOS.dimensions);
const borderPxToRem = (px: number) => pxToRem(px / RATIOS.border);
const fontPxToRem = (px: number) => pxToRem(px / RATIOS.font);

const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            background: "white",

            mainColor: "#008ad2",
            mainColorAlt: "#006AA9",

            activeBg: "#e7e7e7",
            inactiveBg: "#d3d3de",
            inactiveDarkBg: "#999",

            toggleHandleBg: "#e0e0e0",
            toggleHandleBorder: "#cdcdcd",
            toggleBgDisabled: "#f0f0f0",
            toggleHandleBorderDisabled: "#c29f7d",
            toggleHandleBgDisabled: "#deae84",

            icon: "#636363",
            border: "#d5d5d5",
            buttonBorder: "#bababa",

            headerBorder: "#c8c8c9",
            headerBg: "#efeff0",
            headerText: "#484848",
            text: "#323232",
            text2: "#181818",
            text3: "#000000",
            sub: "#959595",

            popText: "#666",

            toolbarBorder: "#ababab",
            toolbarBg: "#f8f8f8",
            modalBg: "#f7f7f7",
            modalButtonBg: "#f8f8f8",
            modalButtonBorder: "#c2c2c2",

            inputDisabledBg: "#f3f3f3",
            inputDisabledText: "#959595",

            choiceBg: "#ffffff",
            choiceText: "#999999",
            choiceActiveBg: "#f3f3f3",
            choiceActiveText: "#313131",
            choiceBorder: "#cfcfcf",

            selectorText: "#606060",
            selectorActive: "#008ad2",

            // Shades: https://maketintsandshades.com/#038bf4,ff7200,7357e8,3ec234,3ec234,ff388f,ea2700
            blue1: "#038bf4",
            blue2: "#b7d6f5",
            blue3: "#dbe6ff",
            blue4: "#33b4ff",
            blue5: "#30a2e6",
            orange1: "#ff7200",
            orange1Darker: "#cc5b00",
            purple1: "#7357e8",
            green1: "#3ec234",
            green1Darker: "#38af2f",
            pink1: "#ff388f",
            red1: "#ea2700",
            yellow1: "#ffde9d",
            yellow2: "#e4a429",
            yellow3: "#fff5db",
            pinky1: "#f5c0b7",
            pinky2: "#e07b67",
            pinky3: "#ffe1db",

            grey1: "#737373",
            focusColor: "#dcaf00",
            scrollbarsThumb: "#737373",
            scrollbarsBg: "transparent",
            tableStripedBg: "#fafafa",

            toolButtonText: "#666e80",
        },
    },
    utils: {
        mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
        my: (value: string | number) => ({ marginTop: value, marginBottom: value }),
        px: (value: string | number) => ({ paddingLeft: value, paddingRight: value }),
        py: (value: string | number) => ({ paddingTop: value, paddingBottom: value }),
        size: (value: string | number) => ({ width: value, height: value }),
    },
});

const darkTheme = createTheme("theme-dark", {
    colors: {
        background: "#0f0f11",

        mainColor: "#5bb8ff",
        mainColorAlt: "#3a94d4",

        activeBg: "#2a2a2d",
        inactiveBg: "#1f1f23",
        inactiveDarkBg: "#141414",

        toggleHandleBg: "#2c2c2c",
        toggleHandleBorder: "#3a3a3a",
        toggleBgDisabled: "#1c1c1c",
        toggleHandleBorderDisabled: "#6a513c",
        toggleHandleBgDisabled: "#8a6447",

        icon: "#c6c6c6",
        border: "#2e2e2e",
        buttonBorder: "#3a3a3a",

        headerBorder: "#2c2c2d",
        headerBg: "#1b1b1c",
        headerText: "#e0e0e0",
        text: "#dcdcdc",
        text2: "#e0e0e0",
        text3: "#fff",
        sub: "#8b8b8b",

        popText: "#b0b0b0",

        toolbarBorder: "#2a2a2a",
        toolbarBg: "#161618",
        modalBg: "#1a1a1c",
        modalButtonBg: "#1c1c1e",
        modalButtonBorder: "#303030",

        inputDisabledBg: "#202024",
        inputDisabledText: "#777",

        choiceBg: "#1a1a1a",
        choiceText: "#999",
        choiceActiveBg: "#252525",
        choiceActiveText: "#efefef",
        choiceBorder: "#3a3a3a",

        selectorText: "#cdcdcd",
        selectorActive: "#5bb8ff",

        blue1: "#4fb4ff",
        blue2: "#3a5167",
        blue3: "#2b3242",
        blue4: "#69c7ff",
        blue5: "#4aaae4",
        orange1: "#ff8a33",
        orange1Darker: "#cc6b1f",
        purple1: "#8b73ff",
        green1: "#46d43a",
        green1Darker: "#3ab12f",
        pink1: "#ff5ca5",
        red1: "#ff3d1a",
        yellow1: "#caa562",
        yellow2: "#a77d2c",
        yellow3: "#4a3f28",
        pinky1: "#7d5a54",
        pinky2: "#8c4a39",
        pinky3: "#6b504b",

        grey1: "#9a9a9a",
        focusColor: "#e2c34a",
        scrollbarsThumb: "#575757",
        scrollbarsBg: "transparent",
        tableStripedBg: "#18181a",

        toolButtonText: "#b4b9c8",
    },
});

type ThemeCSS = StitchesCSS<typeof config>;

type OverwriteProps<
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-use-before-define
    T extends StyledComponent<Type, OldProps, Media, TheCSS>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Props, Type = any, OldProps = any, Media = any, TheCSS = any,
> = StyledComponent<Type, Props, Media, TheCSS>;

export type {
    ThemeCSS,
    OverwriteProps,
};

export {
    styled, css, globalCss, keyframes, getCssText, theme, darkTheme, createTheme, config,
    pxToRem,
    dimensionsPxToRem,
    borderPxToRem,
    fontPxToRem,
};
