import React, { forwardRef } from "react";

import type { LoaderProps } from "./Loader";

import { styled } from "../../../theme";
import { Loader } from "./Loader";

const Container = styled("div", {
    position: "absolute",
    right: 20,
    top: 20,
    background: "$background",
    border: "1px solid $toolbarBorder",
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
const PopLoader = forwardRef<HTMLDivElement, LoaderProps>(({ className, ...props }, ref) => {
    return <Container ref={ref} className={className}><BlockLoader size={"1rem"} {...props} /></Container>;
});

PopLoader.displayName = "PopLoader";
PopLoader.toString = () => Container.toString();

export { PopLoader };
