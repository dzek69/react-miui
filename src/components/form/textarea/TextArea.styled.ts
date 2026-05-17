import { miuiScrollbars } from "../../../scrollbars.css";
import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";
import { input, label as inputLabel, wrapper } from "../input/Input.css";

const StyledTextAreaWrapper = styled("div", {
    ...wrapper,
    display: "block",
    padding: 0,
});

const StyledTextArea = styled("textarea", {
    ...miuiScrollbars,
    ...input,

    backgroundColor: "transparent",
    padding: `1.2em ${dimensionsPxToRem(36)}`,
    height: "unset",
    resize: "vertical",
    minHeight: dimensionsPxToRem(103),
});

const StyledLabel = styled("label", inputLabel, {
    top: `calc(${fontPxToRem(25)} * 1.7)`,
    left: dimensionsPxToRem(36),
    transform: "translateY(-50%)",
});

export {
    StyledTextAreaWrapper,
    StyledTextArea,
    StyledLabel,
};
