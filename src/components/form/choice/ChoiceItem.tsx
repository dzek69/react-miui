import React, { useCallback } from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { StyledChoiceLabel } from "./ChoiceItem.styled";

interface Props<T extends string> {
    name: string;
    value: ObjectValue;
    onChange: (value: Exclude<Value<T>, ObjectValue>) => void;
    active: boolean;
    className?: string;
}

const ChoiceItem = <T extends string>(props: Props<T>): ReturnType<React.FC<Props<T>>> => {
    const { onChange } = props;

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value as Exclude<Value<T>, ObjectValue>);
    }, [onChange]);

    return (
        <StyledChoiceLabel key={props.value.value} tabIndex={0} className={props.className}>
            <input
                type={"radio"}
                name={props.name}
                value={props.value.value}
                checked={props.active}
                onChange={handleChange}
            />
            <span>{props.value.label}</span>
        </StyledChoiceLabel>
    );
};

ChoiceItem.toString = () => StyledChoiceLabel.toString();

export { ChoiceItem };
