import React from "react";
import type { Value } from "../../types/form";

interface Props<T extends string> {
    id: string;
    suggestions?: Value<T>[];
}

const Suggestions = <T extends string>(props: Props<T>): ReturnType<React.FC<Props<T>>> => {
    if (!props.suggestions) {
        return null;
    }

    const options = props.suggestions.map(s => {
        if (typeof s === "string") {
            return <option value={s} key={s} />;
        }
        return <option value={s.value} key={s.value}>{s.label}</option>;
    });

    return (
        <datalist id={props.id}>
            {options}
        </datalist>
    );
};

export { Suggestions };
