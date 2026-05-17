import { dimensionsPxToRem, styled } from "../../../theme";
import { input, inputContainer, label, wrapper } from "./Input.css";

const StyledInput = styled("input", input);

const StyledWrapper = styled("div", wrapper);

const StyledInputContainer = styled("div", inputContainer);

const StyledLabel = styled("label", label);

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
    StyledInputContainer,
    StyledLabel,
    StyledPrefix,
    StyledSuffix,
};
