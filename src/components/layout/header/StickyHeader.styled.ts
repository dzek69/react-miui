import { styled } from "../../../theme";

const StyledStickyHeader = styled("div", {
    height: "100%",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "1fr",

    variants: {
        position: {
            top: {},
            left: {
                gridTemplateRows: "1fr",
                gridTemplateColumns: "auto 1fr",
            },
            bottom: {},
            right: {
                gridTemplateRows: "1fr",
                gridTemplateColumns: "1fr auto",
            },
        },
    },
});

const Content = styled("div", {
    overflow: "auto",
});

export {
    Content,
    StyledStickyHeader,
};
