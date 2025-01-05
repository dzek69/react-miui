import { dimensionsPxToRem, styled } from "../../../theme";

import { input, wrapper } from "./Input.css";

const StyledInput = styled("input", input);

const StyledWrapper = styled("div", wrapper);

const StyledPrefix = styled("div", {
    marginRight: dimensionsPxToRem(36),
    display: "flex",
    color: "$text",
});

const StyledSuffix = styled("div", {
    marginLeft: dimensionsPxToRem(36),
    display: "flex",
    color: "$text",
});

export {
    StyledInput,
    StyledWrapper,
    StyledPrefix,
    StyledSuffix,
};
