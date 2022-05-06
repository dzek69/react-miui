import React from "react";
import classnames from "classnames";

import type { ObjectValue, Value } from "../../../types/form";
import { makeVariants, toObjectValue } from "../../../utils";
import { ChoiceItem } from "./ChoiceItem";
import styles from "./Choice.module.scss";

type Variant = "wide" | "left";

interface Props<T extends string> {
    values: Value<T>[];
    value: string;
    name: string;
    onChange: (value: Exclude<Value<T>, ObjectValue>) => void;
    className?: string;
    variant?: Variant | Variant[];
}

// @TODO auto width mode by default?

const Choice = <T extends string>(props: Props<T>): ReturnType<React.FC<Props<T>>> => {
    const opts = props.values.map(option => {
        const opt = toObjectValue(option);
        return (
            <ChoiceItem
                key={opt.value}
                name={props.name}
                value={opt}
                onChange={props.onChange}
                active={props.value === opt.value}
            />
        );
    });

    const v = makeVariants(props.variant);

    const cls = classnames(
        styles.choice, props.className,
        { [styles.wide]: v.includes("wide") },
        { [styles.left]: v.includes("left") },
    );

    return <div className={cls}>{opts}</div>;
};

export { Choice };
