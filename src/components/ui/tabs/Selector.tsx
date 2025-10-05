import React, { forwardRef, useCallback, useState } from "react";

import type { Value } from "../../../types/form";

import { toObjectValue } from "../../../utils";

import { Item } from "./Item";
import { Root } from "./Selector.styled";

type SelectorProps = {
    values: Value<string>[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
};

const Selector = forwardRef<HTMLDivElement, SelectorProps>((props, ref) => {
    const [current, setCurrent] = useState(props.value);

    const handleCurrent = useCallback((value: string) => {
        setCurrent(value);
        props.onChange?.(value);
    }, [props.onChange]);

    const crr = props.value ?? current;

    const vals = props.values.map(v => {
        const ov = toObjectValue(v);
        return <Item key={ov.value} value={ov} onClick={handleCurrent} active={crr === ov.value} />;
    });
    return <Root ref={ref} className={props.className}>{vals}</Root>;
});

Selector.displayName = "Selector";
Selector.toString = () => Root.toString();

const SelectorItemSelector = Item.toString();

export type { SelectorProps };
export { Selector, SelectorItemSelector };
