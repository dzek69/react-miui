import React from "react";

import styles from "./SectionContainer.module.scss";

const SectionContainer: React.FC = (props) => {
    return (
        <div className={styles.container}>{props.children}</div>
    );
};

export { SectionContainer };
