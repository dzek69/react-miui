import React from "react";
import type { ReactNode } from "react";

import styles from "./Label.module.scss";

interface Props {
    sub?: ReactNode;
}

const Label: React.FC<Props> = (props) => {
    const sub = props.sub ? <div className={styles.sub}>{props.sub}</div> : null;

    return (
        <div className={styles.root}>
            <div>{props.children}</div>
            {sub}
        </div>
    );
};

export { Label };
