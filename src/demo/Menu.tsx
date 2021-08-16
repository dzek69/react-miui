import React from "react";

import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <a href={"#"}>Main</a>
            <a href={"#checkbox"}>Checkbox</a>
        </div>
    );
};

export { Menu };
