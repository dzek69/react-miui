import React from "react";

import styles from "./SearchContainer.module.scss";

const SearchContainer: React.FC = (props) => {
    return (
        <section className={styles.section}>{props.children}</section>
    );
};

export { SearchContainer };
