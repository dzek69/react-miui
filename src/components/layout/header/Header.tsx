import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";

interface Props {
    center?: boolean;
    variant?: "toolbar";
    position?: "top" | "left" | "right" | "bottom";
}

const Header: React.FC<Props> = (props) => {
    const { center, children, variant, position = "top" } = props;

    const cls = classnames(styles.header, {
        [styles["header--center"]]: center,
        [styles["header--toolbar"]]: variant === "toolbar",
    }, styles[`header--${position}`]);

    return (
        <div className={cls}>
            {children}
        </div>
    );
};

export { Header };
