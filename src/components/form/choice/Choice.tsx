import React from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { makeVariants, toObjectValue } from "../../../utils/index";

import { ChoiceItem } from "./ChoiceItem";
import { StyledChoice } from "./Choice.styled";

type Variant = "wide" | "left";

type StyledProps = React.ComponentProps<typeof StyledChoice>;

type Props<T extends string> = Omit<StyledProps, "onChange"> & {
    values: Value<T>[];
    value: string;
    name: string;
    onChange: (value: Exclude<Value<T>, ObjectValue>) => void;
    variant?: Variant | Variant[];
};

// @TODO handle disabled / readonly!

const Choice = <T extends string>({
    // eslint-disable-next-line @typescript-eslint/no-shadow
    value, values, name, onChange, ...props
}: Props<T>): ReturnType<React.FC<Props<T>>> => {
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
        <StyledChoice {...props}>
            {opts}
        </StyledChoice>
    );
};

export { Choice };

export type {
    Props as ChoiceProps,
};
