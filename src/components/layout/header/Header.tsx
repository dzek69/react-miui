import React from "react";
import type { ReactNode } from "react";

import classnames from "classnames";

import { Action } from "../../ui/action/Action.js";
import { EqualActions } from "../../ui/action/EqualActions.js";

import styles from "./Header.module.scss";

interface Props {
    center?: boolean;
    variant?: "toolbar" | "colored";
    /**
     * This indicates just how the borders are drawn and how content is aligned, not the actual position on the screen.
     * To set up position on the screen you need to properly style parent element.
     */
    position?: "top" | "left" | "right" | "bottom"; // @TODO disallow left/right if not inside StickyHeader?
    className?: string;
    before?: ReactNode;
    after?: ReactNode;
}

// eslint-disable-next-line max-statements
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
        [styles["header--colored"]]: variant === "colored",
    }, styles[`header--${position}`], props.className);

    let contents = children;
    if (justActions) {
        contents = <EqualActions className={styles.actions}>{contents}</EqualActions>;
    }

    let before: ReactNode;
    if (props.before != null) {
        before = <div className={styles.before}>{props.before}</div>;
    }

    let after: ReactNode;
    if (props.after != null) {
        after = <div className={styles.after}>{props.after}</div>;
    }

    return (
        <div className={cls}>
            {before}
            <div className={styles.contents}>
                {contents}
            </div>
            {after}
        </div>
    );
};

export { Header };
