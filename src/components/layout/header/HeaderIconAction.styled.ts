import { borderPxToRem, css, pxToRem, styled } from "../../../theme";
import { rippleHostStyles } from "../../../utils/useRipple.styled";
import { Icon } from "../../icons/Icon";

const sharedStyles = css(rippleHostStyles, {
    width: pxToRem(30),
    height: pxToRem(30),
    background: "none",
    borderRadius: "666px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: borderPxToRem(2),
    color: "currentColor",
});

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
    sharedStyles,
};
