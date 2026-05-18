import { styled } from "../../../theme";

const StyledDrawer = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "$background",
    zIndex: 1,
    transition: "transform 300ms",
    overflow: "auto",
});

const Tint = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "$text",
    opacity: 0,
    transition: "opacity 300ms",
    zIndex: 0,
});

const Content = styled("div", {
    height: "100%",
});

export {
    StyledDrawer,
    Tint,
    Content,
};
