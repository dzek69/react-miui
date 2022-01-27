import React from "react";
import classnames from "classnames";

import styles from "./Item.module.scss";
import { Value } from "./Value.js";
import { Label } from "./Label.js";
import { makeVariants } from "../../../utils/makeVariants";
import { ICON, Icon } from "../../icons/Icon";

interface LinkProps {
    href: string;
}

type Variant = "inset";

interface Props {
    href?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    ratio?: string; // @TODO number/number/number/.. type?
    variant?: Variant | Variant[];
    selected?: boolean | undefined;
}

interface SubComponents {
    Label: typeof Label;
    Value: typeof Value;
}

const icon = <Icon className={styles.icon} name={ICON.forward} />;
const noIcon = <span className={styles.icon} />;

// eslint-disable-next-line max-statements,max-lines-per-function
const Item: React.FC<Props> & SubComponents = (props) => {
    const { className, children, href, to, onClick, Link, ratio, variant, selected, ...restProps } = props;
    const v = makeVariants(variant);
    const cls = classnames(styles.item, className);

    const innerCls = classnames(styles.content, {
        [styles.inset]: v.includes("inset"),
        [styles.selected]: selected,
    });

    const pre = typeof selected === "boolean"
        ? (
            selected ? icon : noIcon
        )
        : null;

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
        return <div style={{ flex }}>{pre}{child}</div>;
    });

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return <li {...liProps}><Link href={to} {...restProps}><a className={innerCls}>{ren}</a></Link></li>;
    }
    if (href) {
        const aProps: typeof restProps & { onClick?: Props["onClick"]} = { ...restProps };
        if (onClick) {
            aProps.onClick = onClick;
        }
        return <li {...liProps}><a href={href} {...aProps} className={innerCls}>{ren}</a></li>;
    }
    if (onClick) {
        return (
            <li {...liProps}>
                <button className={classnames(styles.button, innerCls)} onClick={props.onClick} {...restProps}>
                    {ren}
                </button>
            </li>
        );
    }
    return <li {...liProps}><div {...restProps} className={innerCls}>{ren}</div></li>;
};

Item.Label = Label;
Item.Value = Value;

export { Item };
