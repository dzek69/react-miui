import { styled } from "../../../theme";

const StyledStickyHeader = styled("div", {
    height: "100%",
    display: "flex",
    flexDirection: "column",

    variants: {
        position: {
            top: {},
            left: {
                flexDirection: "row",
            },
            bottom: {},
            right: {
                flexDirection: "row",
            },
        },
    },
});

const Content = styled("div", {
    flex: 1,
    overflow: "auto",

    variants: {
        position: {
            top: {},
            bottom: {
                order: 1,
            },
            left: {},
            right: {
                order: 1,
            },
        },
    },
});

export {
    Content,
    StyledStickyHeader,
};
