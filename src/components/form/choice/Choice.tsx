import React, { forwardRef } from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { toObjectValue } from "../../../utils/index";
import { StyledChoice } from "./Choice.styled";
import { ChoiceItem } from "./ChoiceItem";

type Variant = "wide" | "left";

type StyledProps = React.ComponentProps<typeof StyledChoice>;

type ChoiceProps = Omit<StyledProps, "onChange"> & {
    values: Array<Value<string>>;
    value: string;
    name: string;
    onChange: (value: Exclude<Value<string>, ObjectValue>) => void;
    variant?: Variant | Variant[];
};

// @TODO handle disabled / readonly!

const Choice = forwardRef<HTMLDivElement, ChoiceProps>(({

    value, values, name, onChange, ...props
}, ref) => {
    const opts = values.map(option => {
        const opt = toObjectValue(option);
        return (
            <ChoiceItem
                key={opt.value}
                name={name}
                value={opt}
                onChange={onChange}
                active={value === opt.value}
            />
        );
    });

    return (
        <StyledChoice {...props} ref={ref}>
            {opts}
        </StyledChoice>
    );
});

Choice.displayName = "Choice";
Choice.toString = () => StyledChoice.toString();

const ChoiceItemSelector = ChoiceItem.toString();

export { Choice, ChoiceItemSelector };

export type {
    ChoiceProps,
};
