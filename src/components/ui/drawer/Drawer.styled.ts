import { styled } from "../../../theme";

const StyledDrawer = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    zIndex: 1,
    transition: "transform 300ms",
    overflow: "auto",
});

const Content = styled("div", {
    height: "100%",
});

export {
    StyledDrawer,
    Content,
};
