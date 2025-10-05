import { globalCss } from "./theme";

const injectGlobalStyles = globalCss({
    "*:focus": {
        outline: "none !important",
    },
    "*:focus-visible:focus-visible": {
        outline: "none !important",
        borderColor: "$focusColor",
        backgroundColor: "var(--focus-bg-set)",
    },
    "body": {
        color: "$text",
    },
});

export {
    injectGlobalStyles,
};
