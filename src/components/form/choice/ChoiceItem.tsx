import React, { useCallback } from "react";
import type { ObjectValue } from "../../../types/form";

interface Props {
    name: string;
    value: ObjectValue;
    onChange: (value: string) => void;
    active: boolean;
}

const ChoiceItem: React.FC<Props> = (props) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value);
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
