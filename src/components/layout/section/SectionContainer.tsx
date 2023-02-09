import React from "react";

import styles from "./SectionContainer.module.scss";

interface Props {
    children: React.ReactNode;
}

const SectionContainer: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>{props.children}</div>
    );
};

export { SectionContainer };
