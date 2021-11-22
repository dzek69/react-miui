import React from "react";
import classnames from "classnames";

import styles from "./Item.module.scss";
import headerStyles from "./Header.module.scss";

const Header: React.FC = (props) => {
    // @TODO way to use h1, h2, h3 instead of div
    return (
        <li className={classnames(styles.item, headerStyles.header)}>
            <div>{props.children}</div>
        </li>
    );
};

export { Header };
