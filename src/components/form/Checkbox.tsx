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
    className?: string;
    children: React.ReactNode;
}

const Checkbox: React.FC<Props> = (props) => {
    const style: React.CSSProperties = {};
    props.color && (style.color = props.color);

    const cls = classnames(props.className, styles.checkbox, {
        [styles.disabled as string]: props.disabled,
        [styles.readOnly as string]: props.readOnly,
    });

    const checkmarkCls = classnames(styles.checkmark, {
        [styles.checkmarkDisabled as string]: props.disabled,
        [styles.checkmarkChecked as string]: props.checked,
        [styles.checkmarkReadOnly as string]: props.readOnly,
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
