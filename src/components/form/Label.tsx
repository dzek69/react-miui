import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../utils/index.js";

import styles from "./Label.module.scss";

interface Props {
    label?: React.ReactNode;
    variant?: "big";
}

const Label: React.FC<Props> = (props) => {
    const v = makeVariants(props.variant);

    const labelCls = classnames(styles.text, {
        [styles.textBig]: v.includes("big"),
    });

    const label = props.label ? <div className={labelCls}>{props.label}</div> : null;

    return (
        <label className={styles.label}>
            {label}
            {props.children}
        </label>
    );
};

export { Label };
