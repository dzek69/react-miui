import React from "react";

import classnames from "classnames";

import styles from "./Value.module.scss";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Value: React.FC<Props> = (props) => {
    return (
        <div className={classnames(styles.value, props.className)}>{props.children}</div>
    );
};

export { Value };
