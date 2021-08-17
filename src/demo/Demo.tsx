import React from "react";

import styles from "./Demo.module.scss";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { componentsMap } from "./componentsMap";

const Demo: React.FC = (props) => {
    return (
        <div className={styles.container}>
            <Menu list={componentsMap} />
            <Main />
        </div>
    );
};

export { Demo };
