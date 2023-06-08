import React from "react";

import { styled } from "../../../theme.js";

import { Loader } from "./Loader.js";

type Props = React.ComponentProps<typeof Loader>;

const Container = styled("div", {
    position: "absolute",
    right: 20,
    top: 20,
    background: "white",
    border: "1px solid var(--toolbar-border)",
    borderRadius: 666,
    padding: 10,
});

const BlockLoader = styled(Loader, {
    display: "block",
});

/**
 * Loader that renders in the top right corner.
 * Suggested use: indicate data revalidation.
 *
 * Requires a parent with `position: relative`.
 */
const PopLoader: React.FC<Props> = ({ className, ...props }) => {
    return <Container><BlockLoader size={"1rem"} {...props} /></Container>;
};

export { PopLoader };
