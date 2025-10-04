import { styled } from "../../theme";

const Gap = styled("div", {
    display: "flex",
    gap: "10px",
    flexDirection: "column",

    variants: {
        row: {
            true: {
                flexDirection: "row",
            },
        },
    },
});

export {
    Gap,
};
