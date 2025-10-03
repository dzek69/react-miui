import React, { forwardRef } from "react";

import { PadButton as Button, PadButtonDotSelector } from "./Button";
import { PadMiddle as Middle } from "./Middle";
import { StyledPad, StyledLine } from "./Pad.styled";

type DirectionPadProps = {
    onUpPress?: () => void;
    onDownPress?: () => void;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    onMiddlePress?: () => void;
    middleLabel?: string;
    className?: string;
};

const Pad = forwardRef<HTMLDivElement, DirectionPadProps>((props, ref) => {
    return (
        <StyledPad className={props.className} ref={ref}>
            <StyledLine>
                <Button onClick={props.onUpPress} />
            </StyledLine>
            <StyledLine>
                <Button onClick={props.onLeftPress} />
                <Middle onClick={props.onMiddlePress} label={props.middleLabel} />
                <Button onClick={props.onRightPress} />
            </StyledLine>
            <StyledLine>
                <Button onClick={props.onDownPress} />
            </StyledLine>
        </StyledPad>
    );
});

Pad.displayName = "DirectionPad";
Pad.toString = () => StyledPad.toString();

const DirectionPadLineSelector = StyledLine.toString();
const DirectionPadButtonSelector = Button.toString();
const DirectionPadMiddleSelector = Middle.toString();

export {
    Pad as DirectionPad,
    DirectionPadLineSelector,
    DirectionPadButtonSelector,
    DirectionPadMiddleSelector,
    PadButtonDotSelector as DirectionPadButtonDotSelector,
};
export type { DirectionPadProps };
