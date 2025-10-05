import { dimensionsPxToRem, styled } from "../../../theme";

const StyledEqualActions = styled("div", {
    "--actions-count": "1",
    "display": "inline-grid",
    "gridTemplateColumns": "repeat(var(--actions-count), 1fr)",
    "gap": dimensionsPxToRem(56),

    "variants": {
        vertical: {
            true: {
                gridTemplateColumns: "auto",
                gridTemplateRows: "repeat(var(--actions-count), 1fr)",
            },
        },
    },
});

export {
    StyledEqualActions,
};
