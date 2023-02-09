import React from "react";

import classnames from "classnames";

import { Action } from "./Action.js";
import styles from "./EqualActions.module.scss";

interface Props {
    className?: string;
    mode?: "horizontal" | "vertical";
    children: React.ReactNode;
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

    const cls = classnames(styles.actions, props.className, { [styles.vertical]: props.mode === "vertical" });

    return (
        <div className={cls} style={style}>
            {props.children}
        </div>
    );
};

export { EqualActions };
