import { dimensionsPxToRem, fontPxToRem, keyframes, pxToRem, styled } from "../../../theme";

const PADDING = pxToRem(20);
const NEGATIVE_PADDING = pxToRem(-20);

const overlay = keyframes({
    from: {
        background: "#00000000",
    },
    to: {
        background: "#0000004c",
    },
});

const OverlayStyled = styled("div", {
    position: "fixed",
    zIndex: 4,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: `${overlay.toString()} 300ms`,
    animationFillMode: "forwards",

    variants: {
        position: {
            bottom: {
                alignItems: "flex-end",
                paddingBottom: dimensionsPxToRem(24),
            },
        },
        isClosing: {
            true: {
                animationDirection: "reverse",
            },
        },
    },
});

const container = keyframes({
    from: {
        transform: "translateY(30px)",
        opacity: 0,
    },
    to: {
        transform: "translateY(0)",
        opacity: 1,
    },
});

const RemovePadding = styled("div", {
    mx: NEGATIVE_PADDING,
});

const ContainerStyled = styled("div", {
    background: "$modalBg",
    borderRadius: dimensionsPxToRem(12),
    maxWidth: pxToRem(333),
    maxHeight: "100%",
    width: "calc(100% - 30px)",
    padding: PADDING,
    position: "relative",
    boxSizing: "border-box",
    animation: `${container.toString()} 300ms`,
    animationFillMode: "forwards",

    variants: {
        // TODO this is very not rwd, it should be a media query
        full: {
            true: {
                width: "calc(100vw - 30px)",
                maxWidth: dimensionsPxToRem(1000),
            },
        },
        isClosing: {
            true: {
                animationDirection: "reverse",
            },
        },
    },
});

const TitleStyled = styled("div", { // TODO header by default? expose this as `titleAs`?
    fontSize: fontPxToRem(40),
    textAlign: "center",
    color: "black",
    margin: `${dimensionsPxToRem(90)} 0`,
});

export {
    OverlayStyled,
    RemovePadding,
    ContainerStyled,
    TitleStyled,

    NEGATIVE_PADDING,
};
