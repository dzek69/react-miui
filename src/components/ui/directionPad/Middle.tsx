import React, { forwardRef } from "react";

import { StyledMiddle } from "./Middle.styled";

type PadMiddleProps = {
    label?: string | undefined;
    onClick?: (() => void) | undefined;
};

const PadMiddle = forwardRef<HTMLButtonElement, PadMiddleProps>((props, ref) => {
    return (
        <StyledMiddle onClick={props.onClick} ref={ref}>
            {props.label}
        </StyledMiddle>
    );
});

PadMiddle.displayName = "PadMiddle";
PadMiddle.toString = () => StyledMiddle.toString();

export { PadMiddle };
export type { PadMiddleProps };
