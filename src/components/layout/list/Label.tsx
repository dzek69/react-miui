import React from "react";
import type { ReactNode } from "react";

import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme.js";

const SubLabel = styled("div", {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    fontSize: fontPxToRem(27),
    color: "$sub",
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    marginTop: fontPxToRem(27 / 3),
});

const StyledLabel = styled("div", {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    padding: `${dimensionsPxToRem(54)} 0`,
});

type StyledLabelProps = React.ComponentProps<typeof StyledLabel>;

/**
 * Use this to render a label within `Item`, optionally you can render a sublabel as well (with a tip message for
 * example).
 */
const Label: React.FC<StyledLabelProps & { sub?: ReactNode }> = ({ sub, ...props }) => {
    return (
        <StyledLabel {...props}>
            <div>{props.children}</div>
            {sub && <SubLabel>{sub}</SubLabel>}
        </StyledLabel>
    );
};

export { Label };
