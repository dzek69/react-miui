import React from "react";

import { pxToRem, styled } from "../../../theme.js";

import { Header } from "./Header.js";
import { Item } from "./Item.js";

interface SubComponents {
    Header: typeof Header;
    Item: typeof Item;
}

const StyledList = styled("ul", {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    margin: `0 ${pxToRem(23)}`,
    padding: 0,

    variants: {
        inset: {
            true: {
                margin: 0,
            },
        },
    },
});

type StyledListProps = React.ComponentProps<typeof StyledList>;

/**
 * Component for rendering menu lists.
 *
 * It has two subcomponents:
 * - `Item`: for rendering list items
 * - `Header`: for rendering list headers
 *
 * List has one variant: `inset`, which removes the margin from the list. If used it will be automatically applied to
 * all children.
 *
 * See `Item` and `Header` for more information about their usage.
 */
const List: React.FC<StyledListProps> & SubComponents = (props) => {
    const chld = React.Children.map(props.children, (child) => {
        if (child && typeof child === "object" && "type" in child && (child.type === Item || child.type === Header)) {
            return React.cloneElement(child, {
                inset: props.inset,
            });
        }
        return child;
    });

    return (
        <StyledList {...props}>{chld}</StyledList>
    );
};
List.Header = Header;
List.Item = Item;

export { List };
