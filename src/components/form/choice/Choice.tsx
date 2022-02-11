import React from "react";

import type { Value } from "../../../types/form";
import { toObjectValue } from "../../../utils";
import { ChoiceItem } from "./ChoiceItem";
import styles from "./Choice.module.scss";

interface Props {
    values: Value[];
    value: string;
    name: string;
    onChange: (value: string) => void;
}

const Choice: React.FC<Props> = (props) => {
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

    return <div className={styles.choice}>{opts}</div>;
};

export { Choice };
