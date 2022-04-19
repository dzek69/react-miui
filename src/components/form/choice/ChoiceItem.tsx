import React, { useCallback } from "react";
import type { ObjectValue, Value } from "../../../types/form";

interface Props<T extends string> {
    name: string;
    value: ObjectValue;
    onChange: (value: Exclude<Value<T>, ObjectValue>) => void;
    active: boolean;
}

const ChoiceItem = <T extends string>(props: Props<T>): ReturnType<React.FC<Props<T>>> => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value as Exclude<Value<T>, ObjectValue>);
    }, [props.onChange]);

    return (
        <label key={props.value.value} tabIndex={0}>
            <input
                type={"radio"}
                name={props.name}
                value={props.value.value}
                checked={props.active}
                onChange={handleChange}
            />
            <span>{props.value.label}</span>
        </label>
    );
};

export { ChoiceItem };
