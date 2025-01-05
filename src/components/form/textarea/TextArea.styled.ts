import { dimensionsPxToRem, styled } from "../../../theme";

import { input, wrapper } from "../input/Input.css";
import { miuiScrollbars } from "../../../scrollbars.css";

const StyledTextArea = styled("textarea", {
    ...miuiScrollbars,
    ...input,
    ...wrapper,

    padding: `1.2em ${dimensionsPxToRem(36)}`,
    height: "unset",
    resize: "vertical",
    minHeight: dimensionsPxToRem(103),
});

export {
    StyledTextArea,
};
