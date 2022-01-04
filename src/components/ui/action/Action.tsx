import React from "react";
import type { ReactNode } from "react";

import type { ICON } from "../../icons/Icon";
import { Icon } from "../../icons/Icon.js";
import styles from "./Action.module.scss";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
}

interface Props {
    href?: string;
    to?: string;
    onClick?: () => void;
    icon?: ICON | Exclude<ReactNode, string>;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    label?: ReactNode;
    // if className ever goes here make sure that `a` gets classnames merged
}

const Action: React.FC<Props> = (props) => {
    const { icon, label, href, to, Link, ...restProps } = props;

    let iconElem: ReactNode = icon;
    if (typeof icon === "string") {
        iconElem = <Icon name={icon as ICON} />;
    }

    const labelElem = label ? <div className={styles.label}>{label}</div> : null;

    const content = (
        <>
            <div className={styles.action}>{iconElem}</div>
            {labelElem}
        </>
    );

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return <Link href={to} {...restProps}><a className={styles.a}>{content}</a></Link>;
    }

    if (href) {
        return <a href={href} className={styles.a} {...restProps}>{content}</a>;
    }

    return (
        <button onClick={props.onClick} className={styles.button}>
            {content}
        </button>
    );
};

export { Action };
