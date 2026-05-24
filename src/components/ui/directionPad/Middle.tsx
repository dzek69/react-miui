import React, { forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { useRipple } from "../../../utils/useRipple";
import { StyledMiddle } from "./Middle.styled";

type PadMiddleProps = {
    label?: string | undefined;
    onClick?: (() => void) | undefined;
};

const PadMiddle = forwardRef<HTMLButtonElement, PadMiddleProps>((props, ref) => {
    const innerRef = useForwardedRef(ref);
    const ripple = useRipple({ ref: innerRef, fromCenter: true });

    return (
        <StyledMiddle
            onClick={props.onClick}
            ref={innerRef}
            onPointerDown={ripple.onPointerDown}
            onKeyDown={ripple.onKeyDown}
        >
            {props.label}
            {ripple.ripples}
        </StyledMiddle>
    );
});

PadMiddle.displayName = "PadMiddle";
PadMiddle.toString = () => StyledMiddle.toString();

export { PadMiddle };
export type { PadMiddleProps };
