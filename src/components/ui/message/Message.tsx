import React from "react";

import classnames from "classnames";

import styles from "./Message.module.scss";

interface Props {
    type: "warning" | "error" | "info" | "tip";
    variant?: "box";
    className?: string;
    children: React.ReactNode;
}

const Message: React.FC<Props> = (props) => {
    const cls = classnames(styles.container, {
        [styles.box]: props.variant === "box",
        [styles.warning]: props.type === "warning",
        [styles.error]: props.type === "error",
        [styles.info]: props.type === "info",
    }, props.className);
    return <div className={cls}>{props.children}</div>;
};

export { Message };
