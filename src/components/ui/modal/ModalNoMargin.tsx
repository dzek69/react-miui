import React from "react";

import { List } from "../../layout/list/List.js";

import styles from "./Modal.module.scss";

interface Props {}

const ModalNegateMargin: React.FC<Props> = (props) => {
    const chld = React.Children.map(props.children, (child, index) => {
        if (child && typeof child === "object" && "type" in child && child.type === List) {
            return React.cloneElement(child, {
                // @TODO this will overwrite className
                className: styles.removeMargin,
            });
        }

        return child;
    });
    return <div className={styles.negateMargin}>{chld}</div>;
};

export { ModalNegateMargin };
