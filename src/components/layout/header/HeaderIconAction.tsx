import React from "react";
import type { ReactNode } from "react";

import type { ICON } from "../../icons/Icon";
import { Icon } from "../../icons/Icon";
import styles from "./HeaderIconAction.module.scss";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
}

interface Props {
    icon?: ICON | Exclude<ReactNode, string>;
    onClick?: () => void;
    href?: string;
    to?: string;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    label?: ReactNode;
    // if className ever goes here make sure that `a` gets classnames merged
}

const HeaderIconAction: React.FC<Props> = (props) => {
    const { icon, label, href, to, Link, ...restProps } = props;

    let content: ReactNode = icon;
    if (typeof icon === "string") {
        content = <Icon className={styles.icon} name={icon as ICON} />;
    }

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
        <button className={styles.btn} onClick={props.onClick}>
            {content}
        </button>
    );
};

export { HeaderIconAction };
