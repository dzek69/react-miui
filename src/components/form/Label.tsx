import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../utils/index";

import styles from "./Label.module.scss";

interface Props {
    label?: React.ReactNode;
    variant?: "big";
    className?: string;
    children: React.ReactNode;
}

const Label: React.FC<Props> = (props) => {
    const v = makeVariants(props.variant);

    const labelCls = classnames(styles.text, {
        [styles.textBig as string]: v.includes("big"),
    });

    const label = props.label ? <div className={labelCls}>{props.label}</div> : null;

    const rootCls = classnames(props.className, styles.label);

    return (
        <label className={rootCls}>
            {label}
            {props.children}
        </label>
    );
};

export { Label };
