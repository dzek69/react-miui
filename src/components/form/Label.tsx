import React, { forwardRef } from "react";

import { StyledLabel, StyledText } from "./Label.styled";

type StyledLabelProps = React.ComponentProps<typeof StyledLabel>;

type LabelProps = Partial<Pick<StyledLabelProps, "css" | "className">> & {
    label?: React.ReactNode;
    variant?: "big";
    children: React.ReactNode;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
    const { label, variant, children, ...rest } = props;

    const labelElement = label
        ? (
            <StyledText {...(variant ? { variant } : undefined)}>
                {label}
            </StyledText>
        )
        : null;

    return (
        <StyledLabel {...rest} ref={ref}>
            {labelElement}
            {children}
        </StyledLabel>
    );
});

Label.displayName = "Label";
Label.toString = () => StyledLabel.toString();

const LabelTextSelector = StyledText.toString();

export { Label, LabelTextSelector };
export type { LabelProps };
