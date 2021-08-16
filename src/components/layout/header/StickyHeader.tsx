import React from "react";

import { Header } from "./Header.js";
import styles from "./StickyHeader.module.scss";

const err = new TypeError("StickyHeader needs two children - Header and StickyHeader.Content");

interface Content {
    Content: React.FC;
}

const StickyHeader: React.FC & Content = (props) => {
    const children = React.Children.toArray(props.children);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (children.length !== 2) {
        throw err;
    }

    const header = children.find(c => typeof c === "object" && "type" in c && c.type === Header);
    const content = children.find(c => typeof c === "object" && "type" in c && c.type === StickyHeader.Content);

    if (!header || !content) {
        throw err;
    }

    return (
        <div className={styles.stickyHeader}>
            {header}
            <div className={styles.stickyHeader__content}>
                {content}
            </div>
        </div>
    );
};
StickyHeader.Content = ({ children }) => {
    return <>{children}</>;
};

export { StickyHeader };
