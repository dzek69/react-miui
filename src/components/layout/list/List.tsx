import React from "react";

import { Header } from "./Header.js";
import styles from "./List.module.scss";

interface SubComponents {
    Header: typeof Header;
}

const List: React.FC & SubComponents = (props) => {
    return (
        <ul className={styles.list}>{props.children}</ul>
    );
};

List.Header = Header;

export { List };
