import { keyframes } from "../theme";

const rippleKeyframes = keyframes({
    "0%": { transform: "scale(0)", opacity: 0.35 },
    "100%": { transform: "scale(1)", opacity: 0 },
});

/**
 * Use with Stitches `styled(...)` definition to make the element a ripple host.
 * Pair with `useRipple()` which provides handlers and rendered ripple spans.
 *
 * Sets `position: relative` and `overflow: hidden` on the host.
 *
 * To disable the effect for an element or whole subtree, set the CSS variable
 * `--miui-ripple: 0` on the element or any ancestor. The hover/active overlay
 * opacity is multiplied by this var and the JS hook skips ripple creation when
 * it reads `0`.
 */
const rippleHostStyles = {
    "position": "relative",
    "overflow": "hidden",
    "WebkitTapHighlightColor": "transparent",
    "transition": "box-shadow 150ms ease-out",

    // Subtle hover/active overlay so interactive elements look clickable.
    // Scoped to `a`/`button` so non-interactive hosts (e.g. List.Item rendered
    // as <div>) don't get false affordances. `:active` also serves as the
    // minimal feedback for users with `prefers-reduced-motion: reduce`,
    // who don't see the ripple.
    "&:where(a, button):hover:not(:disabled):not([aria-disabled='true'])": {
        boxShadow: "inset 0 0 0 9999px color-mix(in srgb, currentColor calc(6% * var(--miui-ripple, 1)), transparent)",
    },
    "&:where(a, button):active:not(:disabled):not([aria-disabled='true'])": {
        boxShadow: "inset 0 0 0 9999px color-mix(in srgb, currentColor calc(12% * var(--miui-ripple, 1)), transparent)",
    },

    "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
    },

    "& > span[data-miui-ripple]": {
        position: "absolute",
        pointerEvents: "none",
        borderRadius: "50%",
        backgroundColor: "currentColor",
        transform: "scale(0)",
        opacity: 0,
        animationName: String(rippleKeyframes),
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
    },
};

export {
    rippleHostStyles,
};
