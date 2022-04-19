import React, { useCallback, useState } from "react";

import type { Value } from "../../../types/form";
import { toObjectValue } from "../../../utils";
import { Item } from "./Item";
import styles from "./Selector.module.scss";

interface Props<T extends string> {
    values: Value<T>[];
    value?: string;
    onChange?: (value: string) => void;
}

const Selector = <T extends string>(props: Props<T>): ReturnType<React.FC<Props<T>>> => {
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
    return <div className={styles.selector}>{vals}</div>;
};

export { Selector };
