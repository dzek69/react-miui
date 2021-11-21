import React from "react";
import { Icon, ICON, Item, List } from "../../../../index.js";

import styles from "./Icons.module.scss";

const IconsDemo: React.FC = () => {
    const icons = Object.values(ICON).map((value) => {
        return (
            <Item key={value}>
                <div className={styles.row}>
                    {value}
                    <Icon name={value} />
                </div>
            </Item>
        );
    });

    return (
        <List>
            {icons}
        </List>
    );
};

export { IconsDemo };
