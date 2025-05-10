import React from "react";

import { ICON } from "../../icons/Icon";
import { styled } from "../../../theme";

import { Value } from "./Value";
import { Label } from "./Label";
import { StyledIcon, StyledInnerContainer, StyledItem, StyledNoIcon } from "./Item.styled";

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

type Ratio = `${number}` | ``;

type SlashSeparatedNumbers =
    | Ratio
    | `${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`
    | `${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}/${Ratio}`;

interface Props {
    href?: string;
    to?: string;
    onClick?: () => void;
    Link?: React.ComponentClass<LinkProps> | React.FC<LinkProps>;
    ratio?: SlashSeparatedNumbers;
}

interface SubComponents {
    Label: typeof Label;
    Value: typeof Value;
}

const icon = <StyledIcon name={ICON.forward} />;
const noIcon = <StyledNoIcon />;

const ItemInnerContainerClassName = StyledInnerContainer.toString();
type StyledItemProps = React.ComponentProps<typeof StyledItem>;

const ArrowHolder = styled("div", {
    display: "flex",
    alignItems: "center",
});

/**
 * Represents a single item in a list.
 *
 * It has two subcomponents:
 * - `Label`: for rendering the label with sublabel (usually on the left)
 * - `Value`: for rendering the value (usually on the right)
 *
 * It can be however used with any children, its children are rendered in a flexbox container, `ratio` prop can be used
 * to set the flex ratio of each child.
 *
 * It has two variants:
 * - `inset`: which adds padding to the left and right side of the item - it should be used when the list is inset (it's
 * applied automatically if used within `List` component)
 * - `selected`: which renders an arrow on the left side, useful when creating a radio-like list (please note that not
 * sending `selected` is different from sending `false`)
 *
 * It accepts few more props:
 * - `href`: if given it will render an anchor tag with the given href
 * - `to`: if given it will render an anchor tag wrapped in a link using the given `Link` component
 * - `onClick`: if given it will render a button tag with the given onClick handler (it can be passed with `href` too)
 */
const Item: React.FC<StyledItemProps & Props> & SubComponents = ({ href, to, onClick, Link, ratio, ...props }) => {
    const r = ratio ? ratio.split("/") : [];

    const pre = typeof props.selected === "boolean"
        ? (props.selected ? icon : noIcon)
        : null;

    const ren = React.Children.map(props.children, (child, index) => {
        let flex = undefined;
        if (!r.length && child && typeof child === "object" && "type" in child && child.type === Value) {
            return child;
        }
        if (index in r) {
            flex = r[index];
        }
        return <ArrowHolder css={flex ? { flex } : { }}>{pre}{child}</ArrowHolder>;
    });

    if (to) {
        if (!Link) {
            throw new TypeError("`to` prop given without `Link` component");
        }

        return (
            <StyledItem {...props}>
                <Link href={to}><StyledInnerContainer as={"a"} href={to}>{ren}</StyledInnerContainer></Link>
            </StyledItem>
        );
    }

    if (href) {
        return (
            <StyledItem {...props}>
                <StyledInnerContainer as={"a"} href={href} onClick={onClick}>{ren}</StyledInnerContainer>
            </StyledItem>
        );
    }

    if (onClick) {
        return (
            <StyledItem {...props}>
                <StyledInnerContainer as={"button"} onClick={onClick}>{ren}</StyledInnerContainer>
            </StyledItem>
        );
    }

    return <StyledItem {...props}><StyledInnerContainer>{ren}</StyledInnerContainer></StyledItem>;
};

Item.Label = Label;
Item.Value = Value;

export { Item, ItemInnerContainerClassName };

export type {
    Props as ItemProps,
    SubComponents as ItemSubComponents,
};
