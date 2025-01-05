import React from "react";
import type { ReactNode } from "react";

import { omit } from "@ezez/utils";

import type { ICON } from "../../icons/Icon";
import type { ThemeCSS } from "../../../theme";

import { Icon } from "../../icons/Icon";

import { Anchor, Badge, Button, StyledAction } from "./Action.styled";

interface LinkProps { // @TODO extract? - same on list item
    href: string;
    children: React.ReactNode;
}

type NativeLinkProps = {
    /**
     * If action should be a native link provide target URL as `href`
     */
    href: string;
    type?: never;
};

type RouterLinkProps = {
    /**
     * If action should be a routed link provide target URL as `to` and `Link` component
     */
    to: string;
    /**
     * If action should be a routed link provide target URL as `to` and `Link` component
     */
    Link: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    type?: never;
};

type ButtonProps = {
    /**
     * If action should be a button provide `onClick` handler
     */
    type?: React.ComponentProps<typeof Button>["type"];
};

type CommonProps = {
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
    badge?: ReactNode;
};

type Props = (NativeLinkProps | RouterLinkProps | ButtonProps) & CommonProps;

/**
 * Action is a round-shaped button or a link, usually used at headers/toolbars.
 *
 * Its label is displayed below the circular shape.
 */
const Action: React.FC<Props> = (props) => {
    const { icon, label, css, ..._restProps } = props;
    const restProps = omit(
        _restProps as unknown as Record<string, string>, ["to", "Link", "href", "type"],
    ) as Omit<Props, "to" | "Link" | "href" | "type" | "icon" | "label" | "css">;
    const maybeCss = css ? { css } : {};

    let iconElem: ReactNode = icon;
    if (typeof icon === "string") {
        iconElem = <Icon name={icon as ICON} />;
    }

    const labelElem = label ? <div>{label}</div> : null;

    const content = (
        <>
            <StyledAction>{props.badge ? <Badge>{props.badge}</Badge> : null}{iconElem}</StyledAction>
            {labelElem}
        </>
    );

    if ("to" in props) {
        if (!("Link" in props)) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return (
            <props.Link href={props.to} {...restProps}>
                <Anchor className={props.className} {...maybeCss}>{content}</Anchor>
            </props.Link>
        );
    }

    if ("href" in props) {
        return <Anchor href={props.href} className={props.className} {...restProps} {...maybeCss}>{content}</Anchor>;
    }

    return (
        <Button onClick={props.onClick} className={props.className} {...maybeCss} type={props.type ?? "button"}>
            {content}
        </Button>
    );
};

export { Action };

export type { Props as ActionProps };
