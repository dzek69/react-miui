import React, { forwardRef } from "react";

import type { LoaderProps } from "./Loader";

import { styled } from "../../../theme";
import { Loader } from "./Loader";

const Container = styled("div", {
    height: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

/**
 * A loader that renders in the middle of available space
 */
const FullLoader = forwardRef<HTMLDivElement, LoaderProps>(({ className, ...props }, ref) => {
    return <Container ref={ref} className={className}><Loader {...props} /></Container>;
});

FullLoader.displayName = "FullLoader";
FullLoader.toString = () => Container.toString();

export { FullLoader };
