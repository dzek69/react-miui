import { styled } from "../../../theme";

const StyledButton = styled("button", {
    height: "50px",
    width: "50px",
    margin: "0",
    borderRadius: "666px",
    border: "none",
    display: "block",
    background: "none",
});

const StyledDot = styled("span", {
    display: "block",
    width: "4px",
    height: "4px",
    borderRadius: "666px",
    background: "$text3",
    margin: "auto",
});

export {
    StyledButton,
    StyledDot,
};
