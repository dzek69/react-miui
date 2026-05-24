import React, { forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { useRipple } from "../../../utils/useRipple";
import { StyledButton, StyledDot } from "./Button.styled";

type PadButtonProps = {
    onClick?: (() => void) | undefined;
};

const PadButton = forwardRef<HTMLButtonElement, PadButtonProps>((props, ref) => {
    const innerRef = useForwardedRef(ref);
    const ripple = useRipple({ ref: innerRef, fromCenter: true });

    return (
        <StyledButton
            {...props}
            ref={innerRef}
            onPointerDown={ripple.onPointerDown}
            onKeyDown={ripple.onKeyDown}
        >
            <StyledDot />
            {ripple.ripples}
        </StyledButton>
    );
});

PadButton.displayName = "PadButton";
PadButton.toString = () => StyledButton.toString();

const PadButtonDotSelector = StyledDot.toString();

export { PadButton, PadButtonDotSelector };
export type { PadButtonProps };
