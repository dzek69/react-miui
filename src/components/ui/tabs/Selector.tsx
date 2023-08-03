import React, { useCallback, useState } from "react";

import classnames from "classnames";

import type { Value } from "../../../types/form";

import { toObjectValue } from "../../../utils/index.js";

import { Item } from "./Item.js";

import styles from "./Selector.module.scss";

interface Props<T extends string> {
    values: Value<T>[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
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
    return <div className={classnames(props.className, styles.selector)}>{vals}</div>;
};

export { Selector };
