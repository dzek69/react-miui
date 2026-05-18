import * as RadixTooltip from "@radix-ui/react-tooltip";

import { dimensionsPxToRem, fontPxToRem, keyframes, pxToRem, styled } from "../../../theme";

const fadeIn = keyframes({
    from: { opacity: 0, transform: "scale(0.96)" },
    to: { opacity: 1, transform: "scale(1)" },
});

const StyledContent = styled(RadixTooltip.Content, {
    "zIndex": 10,
    "background": "$text2",
    "color": "$background",
    "padding": `${dimensionsPxToRem(18)} ${dimensionsPxToRem(36)}`,
    "borderRadius": dimensionsPxToRem(12),
    "fontSize": fontPxToRem(24),
    "lineHeight": 1.3,
    "maxWidth": pxToRem(280),
    "boxShadow": `0 ${pxToRem(2)} ${pxToRem(8)} rgba(0, 0, 0, 0.18)`,
    "userSelect": "none",
    "transformOrigin": "var(--radix-tooltip-content-transform-origin)",
    "animation": `${fadeIn.toString()} 120ms ease-out`,

    "&[data-state=\"closed\"]": {
        animationDirection: "reverse",
    },
});

const StyledArrow = styled(RadixTooltip.Arrow, {
    fill: "$text2",
});

export {
    StyledContent,
    StyledArrow,
};
