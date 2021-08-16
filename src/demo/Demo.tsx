import React from "react";

import styles from "./Demo.module.scss";
import { Menu } from "./Menu";
import { Main } from "./Main";

const Demo: React.FC = (props) => {
    return (
        <div className={styles.container}>
            <Menu />
            <Main />
        </div>
    );
};

export { Demo };
