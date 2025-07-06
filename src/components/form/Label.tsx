import React from "react";

import { StyledLabel, StyledText } from "./Label.styled";

type LabelProps = React.ComponentProps<typeof StyledLabel>;

interface Props extends Partial<Pick<LabelProps, "css" | "className">> {
    label?: React.ReactNode;
    variant?: "big";
    children: React.ReactNode;
}

const Label: React.FC<Props> = (props) => {
    const { label, variant, children, ...rest } = props;

    const labelElement = label
        ? (
            <StyledText {...(variant ? { variant } : undefined)}>
                {label}
            </StyledText>
        )
        : null;

    return (
        <StyledLabel {...rest}>
            {labelElement}
            {children}
        </StyledLabel>
    );
};

export { Label };

export type {
    Props as LabelProps,
};
