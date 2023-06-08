import React from "react";

import { styled } from "../../../theme.js";

import { Loader } from "./Loader.js";

type Props = React.ComponentProps<typeof Loader>;

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
const FullLoader: React.FC<Props> = (props) => {
    return <Container><Loader {...props} /></Container>;
};

export { FullLoader };
