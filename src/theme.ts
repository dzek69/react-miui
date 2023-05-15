import { createStitches } from "@stitches/react";

import type { CSS as StitchesCSS } from "@stitches/react";

const RATIOS = {
    dimensions: 3,
    border: 2.666666,
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

            icon: "#636363",
            border: "#d5d5d5",
            buttonBorder: "#bababa",

            blue1: "#038bf4",
            blue2: "#b7d6f5",
            blue3: "#dbe6ff",
            yellow1: "#ffde9d",
            yellow2: "#e4a429",
            yellow3: "#fff5db",
            pinky1: "#f5c0b7",
            pinky2: "#e07b67",
            pinky3: "#ffe1db",
        },
    },
    utils: {
        mx: (value: string) => ({ marginLeft: value, marginRight: value }),
        my: (value: string) => ({ marginTop: value, marginBottom: value }),
        size: (value: string) => ({ width: value, height: value }),
    },
});

export type ThemeCSS = StitchesCSS<typeof config>;

export {
    styled, css, globalCss, keyframes, getCssText, theme, createTheme, config,

    pxToRem,
    dimensionsPxToRem,
    borderPxToRem,
    fontPxToRem,
};
