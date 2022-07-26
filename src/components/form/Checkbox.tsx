import React from "react";

import classnames from "classnames";

import { Checkmark } from "../icons/Checkmark.js";

import styles from "./Checkbox.module.scss";

interface Props {
    color?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
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
