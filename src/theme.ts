import { createStitches } from "@stitches/react";

import type { StyledComponent } from "@stitches/react/types/styled-component";
import type { CSS as StitchesCSS } from "@stitches/react";

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
    styled, css, globalCss, keyframes, getCssText, theme, createTheme, config,

    pxToRem,
    dimensionsPxToRem,
    borderPxToRem,
    fontPxToRem,
};
