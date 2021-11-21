import React from "react";
import { Action } from "./Action";

import styles from "./EqualActions.module.scss";
import classnames from "classnames";

interface Props {
    className?: string;
}

const EqualActions: React.FC<Props> = (props) => {
    React.Children.forEach(props.children, (child) => {
        if (!child || typeof child !== "object" || !("type" in child) || child.type !== Action) {
            throw new TypeError("Every child of EqualActions must be an Action component");
        }
    });

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const style = {
        "--actions-count": React.Children.count(props.children),
    } as React.CSSProperties;

    return (
        <div className={classnames(styles.actions, props.className)} style={style}>
            {props.children}
        </div>
    );
};

export { EqualActions };
