import React from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { toObjectValue } from "../../../utils/index";

import { ChoiceItem } from "./ChoiceItem";
import { StyledChoice } from "./Choice.styled";

type Variant = "wide" | "left";

type StyledProps = React.ComponentProps<typeof StyledChoice>;

type Props = Omit<StyledProps, "onChange"> & {
    values: Value<string>[];
    value: string;
    name: string;
    onChange: (value: Exclude<Value<string>, ObjectValue>) => void;
    variant?: Variant | Variant[];
};

// @TODO handle disabled / readonly!

const Choice: React.FC<Props> = ({
    // eslint-disable-next-line @typescript-eslint/no-shadow
    value, values, name, onChange, ...props
}) => {
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
