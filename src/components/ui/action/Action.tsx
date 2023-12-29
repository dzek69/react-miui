import React from "react";
import type { ReactNode } from "react";

import type { ICON } from "../../icons/Icon";
import type { ThemeCSS } from "../../../theme";

import { Icon } from "../../icons/Icon";

import { Anchor, Button, StyledAction } from "./Action.styled";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
    children: React.ReactNode;
}

interface Props {
    /**
     * If action should be a native link provide target URL as `href`
     */
    href?: string;
    /**
     * If action should be a routed link provide target URL as `to` and `Link` component
     */
    to?: string;
    /**
     * If action should be a routed link provide target URL as `to` and `Link` component
     */
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    /**
     * Standard onClick handler (with no event)
     */
    onClick?: () => void;
    /**
     * Icon to be displayed
     */
    icon?: ICON | Exclude<ReactNode, string>;
    /**
     * Label to be displayed below the icon
     */
    label?: ReactNode;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom CSS
     */
    css?: ThemeCSS;
}

/**
 * Action is a round-shaped button or a link, usually used at headers/toolbars.
 *
 * Its label is displayed below the circular shape.
 */
const Action: React.FC<Props> = (props) => {
    const { icon, label, href, to, Link, css, ...restProps } = props;
    const maybeCss = css ? { css } : {};

    let iconElem: ReactNode = icon;
    if (typeof icon === "string") {
        iconElem = <Icon name={icon as ICON} />;
    }

    const labelElem = label ? <div>{label}</div> : null;

    const content = (
        <>
            <StyledAction>{iconElem}</StyledAction>
            {labelElem}
        </>
    );

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return (
            <Link href={to} {...restProps}>
                <Anchor className={props.className} {...maybeCss}>{content}</Anchor>
            </Link>
        );
    }

    if (href) {
        return <Anchor href={href} className={props.className} {...restProps} {...maybeCss}>{content}</Anchor>;
    }

    return (
        <Button onClick={props.onClick} className={props.className} {...maybeCss}>
            {content}
        </Button>
    );
};

export { Action };

export type { Props as ActionProps };
