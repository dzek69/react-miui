import { styled } from "../../../theme";

/**
 * A visual separator
 */
const Line = styled("hr", {
    "--miui-line-size": "100px",
    "width": "var(--miui-line-size)",
    "maxWidth": "100%",
    "height": 1,
    "backgroundColor": "$border",
    "border": "none",
    "margin": "auto",

    "variants": {
        vertical: {
            true: {
                width: 1,
                height: "var(--miui-line-size)",
                maxHeight: "100%",
            },
        },
    },
});

export {
    Line,
};
