import React from "react";
import classnames from "classnames";

import styles from "./Item.module.scss";

interface LinkProps {
    href: string;
}

interface Props {
    href?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
}

const Item: React.FC<Props> = (props) => {
    const { className, children, href, to, onClick, Link, ...restProps } = props;
    const cls = classnames(styles.item, className);

    const liProps = {
        className: cls,
    };

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return <li {...liProps}><Link href={to} {...restProps}>{children}</Link></li>;
    }
    if (href) {
        const aProps: typeof restProps & { onClick?: Props["onClick"]} = { ...restProps };
        if (onClick) {
            aProps.onClick = onClick;
        }
        return <li {...liProps}><a href={href} {...aProps}>{children}</a></li>;
    }
    if (onClick) {
        return (
            <li {...liProps}><button className={styles.button} onClick={onClick} {...restProps}>{children}</button></li>
        );
    }
    return <li {...liProps}><div {...restProps}>{children}</div></li>;
};

export { Item };
