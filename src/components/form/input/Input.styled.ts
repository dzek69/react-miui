import { dimensionsPxToRem, styled } from "../../../theme";

import { input, wrapper } from "./Input.css";

const StyledInput = styled("input", input);

const StyledWrapper = styled("div", wrapper);

const StyledPrefix = styled("div", {
    marginRight: dimensionsPxToRem(36),
    display: "flex",
});

const StyledSuffix = styled("div", {
    marginLeft: dimensionsPxToRem(36),
    display: "flex",
});

export {
    StyledInput,
    StyledWrapper,
    StyledPrefix,
    StyledSuffix,
};
