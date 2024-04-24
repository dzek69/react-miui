import { dimensionsPxToRem, keyframes, styled } from "../../../theme";

const show = keyframes({
    from: {
        transform: `translateY(calc(100% + ${dimensionsPxToRem(190)}))`,
    },
});

const StyledToast = styled("div", {
    "position": "fixed",
    "bottom": 0,
    "display": "flex",
    "justifyContent": "center",
    "zIndex": 6,
    "left": "50%",
    "transform": "translateX(-50%)",

    "& span": {
        background: "rgba(56, 50, 46, 0.85)",
        color: "#F9F6F2",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.37)",
        borderRadius: "12px", // around 22 @TODO use calc here
        display: "inline-block",
        padding: "1em 1em",
        animation: `${show.toString()} 500ms 1`,
        animationFillMode: "forwards",
        marginBottom: dimensionsPxToRem(190),
    },

    "variants": {
        hide: {
            true: {
                transition: "opacity 300ms",
                opacity: 0,
            },
        },
    },
});

export {
    StyledToast,
};
