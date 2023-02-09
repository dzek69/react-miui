import React from "react";
import type { ReactNode } from "react";

import classnames from "classnames";

import styles from "./Label.module.scss";

interface Props {
    sub?: ReactNode;
    className?: string;
    children: React.ReactNode;
}

const Label: React.FC<Props> = (props) => {
    const sub = props.sub ? <div className={styles.sub}>{props.sub}</div> : null;

    return (
        <div className={classnames(styles.root, props.className)}>
            <div>{props.children}</div>
            {sub}
        </div>
    );
};

export { Label };
