import React from "react";

import type { Loader } from "./Loader";

import { styled } from "../../../theme.js";

import { FullLoader } from "./FullLoader.js";

interface Props extends React.ComponentProps<typeof Loader> {
    /**
     * Contents to render underneath the loader
     */
    children: React.ReactNode;
}

const Container = styled("div", {
    position: "relative",
});

const TailSpin = styled("div", {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
});

const Content = styled("div", {
    opacity: 0.3,
});

/**
 * A loader that renders in the middle of available space, but also covers the contents.
 * Contents opacity is lowered.
 */
const CoveringLoader: React.FC<Props> = ({ show, children, ...props }) => {
    if (!show) {
        return <>{children}</>;
    }

    return (
        <Container>
            <TailSpin>
                <FullLoader {...props} />
            </TailSpin>
            <Content>
                {children}
            </Content>
        </Container>
    );
};

export { CoveringLoader };
