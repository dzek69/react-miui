import React from "react";

import { Header } from "./Header.js";
import styles from "./StickyHeader.module.scss";
import classnames from "classnames";

const err = new TypeError("StickyHeader needs two children - Header and StickyHeader.Content");

interface Content {
    Content: React.FC;
}

interface Props {
    position?: "top" | "left" | "right" | "bottom";
}

const StickyHeader: React.FC<Props> & Content = (props) => {
    const position = props.position || "top";

    const children = React.Children.toArray(props.children);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (children.length !== 2) {
        throw err;
    }

    let header = children.find(c => typeof c === "object" && "type" in c && c.type === Header),
        content = children.find(c => typeof c === "object" && "type" in c && c.type === StickyHeader.Content);

    if (!header || !content) {
        throw err;
    }

    header = header as never; // @TODO find a better way to silence TS on cloneElement
    content = content as never;

    const cls = classnames(styles.stickyHeader, styles[`stickyHeader--${position}`]);
    const contentCls = classnames(styles.stickyHeader__content, styles[`stickyHeader__content--${position}`]);

    return (
        <div className={cls}>
            {React.cloneElement(header, { position })}
            <div className={contentCls}>
                {content}
            </div>
        </div>
    );
};
StickyHeader.Content = ({ children }) => {
    return <>{children}</>;
};

export { StickyHeader };
