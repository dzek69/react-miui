import React from "react";

import styles from "./Menu.module.scss";
import { componentsMap } from "./componentsMap";

const Menu: React.FC = () => {
    const cmp = Object.keys(componentsMap).map(name => {
        return <a key={name} href={"#" + name}>{name}</a>;
    });

    return (
        <div className={styles.menu}>
            <a href={"#"}>Main</a>
            {cmp}
        </div>
    );
};

export { Menu };
