import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";

interface Props {
    center?: boolean;
}

const Header: React.FC<Props> = ({ center, children }) => {
    const cls = classnames(styles.header, {
        [styles["header--center"]]: center,
    });

    return (
        <div className={cls}>
            {children}
        </div>
    );
};

export { Header };
