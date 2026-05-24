import React, { forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { useRipple } from "../../../utils/useRipple";
import { StyledToolButton } from "./ToolButton.styled";

type Props = React.ComponentProps<typeof StyledToolButton>;

const ToolButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const { children, onPointerDown, onKeyDown, ...rest } = props;
    const innerRef = useForwardedRef(ref);
    const ripple = useRipple({ ref: innerRef, onPointerDown, onKeyDown });

    return (
        <StyledToolButton
            ref={innerRef}
            onPointerDown={ripple.onPointerDown}
            onKeyDown={ripple.onKeyDown}
            {...rest}
        >
            {children}
            {ripple.ripples}
        </StyledToolButton>
    );
});

ToolButton.displayName = "ToolButton";
ToolButton.toString = () => StyledToolButton.toString();

export {
    ToolButton,
};
