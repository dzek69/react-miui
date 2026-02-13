import React, { forwardRef } from "react";

import type { VariantProps } from "@stitches/react";

import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";
import { Item, ListItemInnerContainerClassNameSelector } from "./Item";

const StyledContent = styled("div", {
    flex: 1,
});

const StyledHeader = styled(Item, {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    paddingTop: dimensionsPxToRem(80),
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    paddingBottom: dimensionsPxToRem(40),
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    fontSize: fontPxToRem(26),
    color: "$sub",
    textTransform: "uppercase",

    [`& ${ListItemInnerContainerClassNameSelector}`]: {
        minHeight: 0,
    },

    variants: {
        inset: {
            true: {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
});

type StyledHeaderProps = React.ComponentProps<typeof StyledHeader>;
type Variants = VariantProps<typeof StyledHeader>;

/**
 * Use this to render a header within a `List`.
 * Use `as` prop to define which tag to use.
 */
const Header = forwardRef<HTMLLIElement, StyledHeaderProps & Variants & { as?: string }>(({ as, ...props }, ref) => {
    return (
        <StyledHeader {...props} ref={ref}>
            <StyledContent {...(as ? { as } : undefined)}>{props.children}</StyledContent>
        </StyledHeader>
    );
});

Header.displayName = "List.Header";
Header.toString = () => StyledHeader.toString();

const ListHeaderContentSelector = StyledContent.toString();

export { Header, ListHeaderContentSelector };
