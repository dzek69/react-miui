import React from "react";

import classnames from "classnames";

import { Header } from "./Header.js";

import styles from "./StickyHeader.module.scss";

const err = new TypeError("StickyHeader needs two children - Header and StickyHeader.Content");

interface Content {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Content: React.FC<ContentProps>;
}

interface ContentProps {
    className?: string;
    children: React.ReactNode;
}

interface Props {
    position?: "top" | "left" | "right" | "bottom";
    className?: string;
    children: React.ReactNode;
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

    const cls = classnames(styles.stickyHeader, styles[`stickyHeader--${position}`], props.className);

    const contentCls = classnames(
        styles.stickyHeader__content,
        styles[`stickyHeader__content--${position}`],
        (content as { props: ContentProps }).props.className,
    );

    return (
        <div className={cls}>
            {React.cloneElement(header, { position })}
            <div className={contentCls}>
                {content}
            </div>
        </div>
    );
};
// eslint-disable-next-line react/no-multi-comp
StickyHeader.Content = ({ children }) => {
    return <>{children}</>;
};

export { StickyHeader };
