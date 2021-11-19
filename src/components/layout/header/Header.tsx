import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";
import { Action } from "../../ui/action/Action";
import { EqualActions } from "../../ui/action/EqualActions";

interface Props {
    center?: boolean;
    variant?: "toolbar";
    position?: "top" | "left" | "right" | "bottom";
    className?: string;
}

const Header: React.FC<Props> = (props) => {
    const { center, children, variant, position = "top" } = props;

    let justActions = false;
    if (position === "top" || position === "bottom") {
        const chld = React.Children.toArray(props.children);
        justActions = chld.every(c => {
            return c && typeof c === "object" && "type" in c && c.type === Action;
        });
    }

    const cls = classnames(styles.header, {
        [styles["header--center"]]: center,
        [styles["header--toolbar"]]: variant === "toolbar",
    }, styles[`header--${position}`], props.className);

    let contents = children;
    if (justActions) {
        contents = <EqualActions>{contents}</EqualActions>;
    }

    return (
        <div className={cls}>
            {contents}
        </div>
    );
};

export { Header };
