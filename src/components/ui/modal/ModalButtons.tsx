import React, { forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { fnWithProps } from "../../../types/fnWithProps";
import { useRipple } from "../../../utils/useRipple";
import { Container, StyledButton } from "./ModalButtons.styled";

type ButtonProps = React.ComponentProps<typeof StyledButton>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, onPointerDown, onKeyDown, ...rest } = props;
    const innerRef = useForwardedRef(ref);
    const ripple = useRipple({ ref: innerRef, onPointerDown, onKeyDown });

    return (
        <StyledButton
            ref={innerRef}
            onPointerDown={ripple.onPointerDown}
            onKeyDown={ripple.onKeyDown}
            {...rest}
        >
            {children}
            {ripple.ripples}
        </StyledButton>
    );
});

Button.displayName = "ModalButtons.Button";
Button.toString = () => StyledButton.toString();

const ModalButtons = fnWithProps(Container, {
    Button,
});

export {
    ModalButtons,
};
