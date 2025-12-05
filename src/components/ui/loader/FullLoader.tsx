import React from "react";

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
const FullLoader: React.FC<LoaderProps> = (props) => {
    return <Container><Loader {...props} /></Container>;
};

export { FullLoader };
