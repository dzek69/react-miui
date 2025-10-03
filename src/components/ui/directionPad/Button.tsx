import React, { forwardRef } from "react";

import { StyledButton, StyledDot } from "./Button.styled";

type PadButtonProps = {
    onClick?: (() => void) | undefined;
};

const PadButton = forwardRef<HTMLButtonElement, PadButtonProps>((props, ref) => {
    return (
        <StyledButton {...props} ref={ref}>
            <StyledDot />
        </StyledButton>
    );
});

PadButton.displayName = "PadButton";
PadButton.toString = () => StyledButton.toString();

const PadButtonDotSelector = StyledDot.toString();

export { PadButton, PadButtonDotSelector };
export type { PadButtonProps };
