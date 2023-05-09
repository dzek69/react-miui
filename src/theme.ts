import { createStitches } from "@stitches/react";

export const {
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
        colors: {},
    },
    utils: {
        mx: (value: string) => ({ marginLeft: value, marginRight: value }),
        my: (value: string) => ({ marginTop: value, marginBottom: value }),
        size: (value: string) => ({ width: value, height: value }),
    },
});
