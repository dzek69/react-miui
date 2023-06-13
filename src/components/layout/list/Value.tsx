import { fontPxToRem, styled } from "../../../theme.js";

/**
 * Use this to render a value within `Item`. It's most useful when used with `Item.Label`.
 */
const Value = styled("div", {
    color: "$icon",
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    fontSize: fontPxToRem(26),
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
});

export { Value };
