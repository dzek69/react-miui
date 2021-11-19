import React from "react";
import { Action } from "./Action";

import styles from "./EqualActions.module.scss";

const EqualActions: React.FC = (props) => {
    React.Children.forEach(props.children, (child) => {
        if (!child || typeof child !== "object" || !("type" in child) || child.type !== Action) {
            throw new TypeError("Every child of Actions must be an Action component");
        }
    });

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const style = {
        "--actions-count": React.Children.count(props.children),
    } as React.CSSProperties;

    return (
        <div className={styles.actions} style={style}>
            {props.children}
        </div>
    );
};

export { EqualActions };
