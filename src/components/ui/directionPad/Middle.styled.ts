import { styled } from "../../../theme";
import { rippleHostStyles } from "../../../utils/useRipple.styled";

const StyledMiddle = styled("button", rippleHostStyles, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    height: "50px",
    width: "50px",
    border: "1px solid #999",
    boxSizing: "border-box",
    borderRadius: "666px",
    background: "none",
    textAlign: "center",
});

export {
    StyledMiddle,
};
