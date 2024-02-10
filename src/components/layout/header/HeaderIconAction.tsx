import React from "react";
import type { ReactNode } from "react";

import type { ICON } from "../../icons/Icon";

import { A, Btn, StyledIcon } from "./HeaderIconAction.styled";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
    children: React.ReactNode;
}

interface Props {
    /**
     * Icon to display. Can be a string (for build in icons) or a ReactNode (any icon component).
     */
    icon?: ICON | Exclude<ReactNode, string>;
    /**
     * Function to call when the icon is clicked.
     */
    onClick?: () => void;
    /**
     * If given it will make the icon a native link.
     */
    href?: string;
    /**
     * If given it will make the icon a custom link. `to` will be passed to given `Link` component as `href`.
     */
    to?: string;
    /**
     * Custom link component to use. Use with `to` prop.
     */
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    /**
     * Additional class name to apply.
     */
    className?: string | undefined;
}

/**
 * Use this component if you need a clickable icon that stylistically fits the header.
 * It can be a simple link, a button or a custom link component.
 */
const HeaderIconAction: React.FC<Props> = (props) => {
    const { icon, href, to, Link, className, ...restProps } = props;

    let content: ReactNode = icon;
    if (typeof icon === "string") {
        content = <StyledIcon name={icon as ICON} />;
    }

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return <Link href={to} {...restProps}><A className={props.className}>{content}</A></Link>;
    }

    if (href) {
        return <A href={href} className={props.className} {...restProps}>{content}</A>;
    }

    return (
        <Btn className={props.className} onClick={props.onClick}>
            {content}
        </Btn>
    );
};

export { HeaderIconAction };
