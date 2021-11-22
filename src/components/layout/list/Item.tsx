import React from "react";
import classnames from "classnames";

import styles from "./Item.module.scss";
import { Value } from "./Value";

interface LinkProps {
    href: string;
}

interface Props {
    href?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    ratio?: string; // @TODO number/number/number/.. type?
}

// eslint-disable-next-line max-statements
const Item: React.FC<Props> = (props) => {
    const { className, children, href, to, onClick, Link, ratio, ...restProps } = props;
    const cls = classnames(styles.item, className);

    const liProps = {
        className: cls,
    };

    const r = ratio ? ratio.split("/") : [];

    const ren = React.Children.map(props.children, (child, index) => {
        let flex = undefined;
        if (!r.length && child && typeof child === "object" && "type" in child && child.type === Value) {
            return child;
        }
        if (index in r) {
            flex = r[index];
        }
        return <div style={{ flex }}>{child}</div>;
    });

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return <li {...liProps}><Link href={to} {...restProps}><a className={styles.content}>{ren}</a></Link></li>;
    }
    if (href) {
        const aProps: typeof restProps & { onClick?: Props["onClick"]} = { ...restProps };
        if (onClick) {
            aProps.onClick = onClick;
        }
        return <li {...liProps}><a href={href} {...aProps} className={styles.content}>{ren}</a></li>;
    }
    if (onClick) {
        return (
            <li {...liProps}>
                <button className={classnames(styles.button, styles.content)} onClick={props.onClick}{...restProps}>
                    {ren}
                </button>
            </li>
        );
    }
    return <li {...liProps}><div {...restProps} className={styles.content}>{ren}</div></li>;
};

export { Item };
