import React from "react";
import type { ReactNode } from "react";

import type { Div } from "../../native";

import { Action } from "../../ui/action/Action";
import { EqualActions } from "../../ui/action/EqualActions";

import { After, Before, Contents, StyledHeader } from "./Header.styled";

interface Props {
    /**
     * Should the main content (children) be centered?
     */
    center?: boolean;
    /**
     * Styling variant.
     */
    variant?: "toolbar" | "colored";
    /**
     * This indicates just how the borders are drawn and how content is aligned, not the actual position on the screen.
     * To set up position on the screen, you need to properly style the parent element.
     */
    position?: "top" | "left" | "right" | "bottom"; // @TODO disallow left/right if not inside StickyHeader?
    /**
     * Content to be displayed before the main content.
     */
    before?: ReactNode;
    /**
     * Content to be displayed after the main content.
     */
    after?: ReactNode;
}

const Header: React.FC<React.ComponentProps<typeof Div> & Props> = (props) => {
    const {
        position = "top",
        before: _before, after: _after,
        children,
        ...rest
    } = props;

    const chld = React.Children.toArray(props.children);
    const justActions = chld.every(c => {
        return c && typeof c === "object" && "type" in c && c.type === Action;
    });

    let contents = children;
    if (justActions) {
        const mode = position === "top" || position === "bottom" ? "horizontal" : "vertical";
        contents = <EqualActions mode={mode}>{contents}</EqualActions>;
    }

    let before: ReactNode;
    if (props.before != null) {
        before = <Before>{props.before}</Before>;
    }

    let after: ReactNode;
    if (props.after != null) {
        after = <After>{props.after}</After>;
    }

    return (
        <StyledHeader {...rest} position={position} data-header-position={position}>
            {before}
            <Contents>
                {contents}
            </Contents>
            {after}
        </StyledHeader>
    );
};

export { Header };
