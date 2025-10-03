import { styled } from "../../../theme";

const StyledPad = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    borderRadius: "666px",
    width: "150px",
    border: "1px solid #aaa",
    background: "white",
});

const StyledLine = styled("div", {
    display: "flex",
});

export {
    StyledPad,
    StyledLine,
};
