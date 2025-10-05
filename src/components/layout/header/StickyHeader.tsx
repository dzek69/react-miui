import React, { forwardRef } from "react";

import { fnWithProps } from "../../../types/fnWithProps";

import { Header } from "./Header";
import { Content, StyledStickyHeader } from "./StickyHeader.styled";

const err = new TypeError("StickyHeader needs two children - Header and StickyHeader.Content");

interface Props {
    /**
     * Position of the header
     */
    position?: "top" | "left" | "right" | "bottom";
    /**
     * Additional class name
     */
    className?: string;
    /**
     * If you need to pass custom children for some reason and you are sure that you are doing it right - use this prop
     * to disable children type check.
     */
    __dangerouslyDisableChildrenGuard?: boolean;
    children: React.ReactNode;
}

const StickyHeader = fnWithProps(forwardRef<HTMLDivElement, Props>((props, ref) => { // eslint-disable-line react/display-name
    const { children: _children, position = "top", __dangerouslyDisableChildrenGuard, ...rest } = props;

    if (__dangerouslyDisableChildrenGuard) {
        return (
            <StyledStickyHeader ref={ref} {...rest} position={position}>
                {_children}
            </StyledStickyHeader>
        );
    }

    const children = React.Children.toArray(_children);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (children.length !== 2) {
        throw err;
    }

    let header = children.find(c => typeof c === "object" && "type" in c && c.type === Header),
        content = children.find(c => typeof c === "object" && "type" in c && c.type === Content);

    if (!header || !content) {
        throw err;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    header = header as never; // @TODO find a better way to silence TS on cloneElement
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    content = content as never;

    return (
        <StyledStickyHeader ref={ref} {...rest} position={position}>
            {React.cloneElement(header, { position })}
            {React.cloneElement(content, { position })}
        </StyledStickyHeader>
    );
}), {
    displayName: "StickyHeader",
    Content: Content, // @TODO remove "position" from this component props
    /**
     * @deprecated use StickyHeader.toString() instead
     */
    selectors: {
        /**
         * @deprecated use StickyHeader.toString() instead
         */
        root: StyledStickyHeader.toString(),
    },
    toString: () => StyledStickyHeader.toString(),
});

export {
    StickyHeader,
};

export type { Props as StickyHeaderProps };
