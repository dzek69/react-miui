import React from "react";

import styles from "./Spacer.module.scss";

interface Props {}

const Spacer: React.FC<Props> = (props) => {
    return <div className={styles.spacer} />;
};

export { Spacer };
