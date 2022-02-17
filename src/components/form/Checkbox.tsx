import React from "react";
import classnames from "classnames";

import styles from "./Checkbox.module.scss";
import { Checkmark } from "../icons/Checkmark.js";

interface Props {
    color?: string;
    name: string;
    onChange: () => void;
    checked: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
    const style: React.CSSProperties = {};
    props.color && (style.color = props.color);

    const cls = classnames(styles.checkbox, {
        [styles.disabled]: props.disabled,
        [styles.readOnly]: props.readOnly,
    });

    const checkmarkCls = classnames(styles.checkmark, {
        [styles.checkmarkDisabled]: props.disabled,
        [styles.checkmarkChecked]: props.checked,
        [styles.checkmarkReadOnly]: props.readOnly,
    });

    return (
        <label className={cls}>
            <input
                type={"checkbox"}
                name={props.name}
                onChange={props.onChange}
                checked={props.checked}
                disabled={props.disabled}
                readOnly={props.readOnly}
            />
            <span style={style} className={checkmarkCls}><Checkmark /></span>
            <span className={styles.label}>{props.children}</span>
        </label>
    );
};

export { Checkbox };
