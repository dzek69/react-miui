import React from "react";

import styles from "./Value.module.scss";

const Value: React.FC = (props) => {
    return (
        <div className={styles.value}>{props.children}</div>
    );
};

export { Value };
