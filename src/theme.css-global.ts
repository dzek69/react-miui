import { globalCss } from "./theme";

const injectGlobalStyles = globalCss({
    "*:focus": {
        outline: "none !important",
    },
    "*:focus-visible:focus-visible": {
        outline: "none !important",
        borderColor: "$focusColor",
    },
    "body": {
        color: "$text",
    },
});

export {
    injectGlobalStyles,
};
