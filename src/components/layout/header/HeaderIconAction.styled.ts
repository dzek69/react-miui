import type { ThemeCSS } from "../../../theme";

import { pxToRem, styled } from "../../../theme";
import { Icon } from "../../icons/Icon";

const sharedStyles: ThemeCSS = {
    "width": pxToRem(30),
    "height": pxToRem(30),
    "background": "none",
    "borderRadius": "666px",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "border": "calc(2px / var(--ratio-border)) solid transparent",
    "color": "currentColor",

    "&:hover": {
        background: "#00000022",
    },
    "&:active": {
        background: "#00000011",
        color: "currentColor",
    },
};

const Btn = styled("button", sharedStyles);
const A = styled("a", sharedStyles);

const StyledIcon = styled(Icon, {
    width: "16px",
    height: "16px",
    display: "block",
    fill: "currentColor",
});

export {
    Btn,
    A,
    StyledIcon,
};
