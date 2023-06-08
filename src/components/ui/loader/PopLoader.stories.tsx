import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { styled } from "../../../theme.js";

import { PopLoader } from "./PopLoader.js";

const meta: Meta = {
    title: "Components/UI/Loader/PopLoader",
    component: PopLoader,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof PopLoader>;

const Container = styled("div", {
    border: "1px solid black", background: "#ddd", width: 300, height: 300, position: "relative",
});

const Primary: Story = {
    args: {},
    render: () => {
        return (
            <Container>
                <PopLoader />
                content, content,<br />
                content, content
            </Container>
        );
    },
};

export {
    Primary,
};

export default meta;
