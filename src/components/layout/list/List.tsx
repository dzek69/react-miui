import React from "react";

import styles from "./List.module.scss";

const List: React.FC = (props) => {
    return (
        <ul className={styles.list}>{props.children}</ul>
    );
};

export { List };
