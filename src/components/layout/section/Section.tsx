import { pxToRem, styled } from "../../../theme.js";

import { SectionContainer } from "./SectionContainer.js";

interface SubComponents {
    Container: typeof SectionContainer;
}

const SectionCmp = styled("div", {
    background: "$background",

    variants: {
        vertical: {
            true: {
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                py: pxToRem(23),
            },
        },
        horizontal: {
            true: {
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                px: pxToRem(23),
            },
        },
    },
});

/**
 * A section is a container that can be used to group related content.
 *
 * You should use it along with the `Section.Container` component. Container stretches to fill the available space and
 * has darker background color, sections are lighter and have a gap between them.
 */
const Section = SectionCmp as typeof SectionCmp & SubComponents;

Section.Container = SectionContainer;

export { Section };
