import React from "react";
import type { ReactNode } from "react";

import classnames from "classnames";

import type { ICON } from "../../icons/Icon";

import { Icon } from "../../icons/Icon";

import styles from "./HeaderIconAction.module.scss";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
    children: React.ReactNode;
}

interface Props {
    icon?: ICON | Exclude<ReactNode, string>;
    onClick?: () => void;
    href?: string;
    to?: string;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    label?: ReactNode;
    className?: string;
}

const HeaderIconAction: React.FC<Props> = (props) => {
    const { icon, label, href, to, Link, className, ...restProps } = props;

    let content: ReactNode = icon;
    if (typeof icon === "string") {
        content = <Icon className={styles.icon as string} name={icon as ICON} />;
    }

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        const aCls = classnames(props.className, styles.a);
        return <Link href={to} {...restProps}><a className={aCls}>{content}</a></Link>;
    }

    if (href) {
        const aCls = classnames(props.className, styles.a);
        return <a href={href} className={aCls} {...restProps}>{content}</a>;
    }

    const btnCls = classnames(props.className, styles.btn);
    return (
        <button className={btnCls} onClick={props.onClick}>
            {content}
        </button>
    );
};

export { HeaderIconAction };
