import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { styled } from "../../../theme.js";

import { Loading } from "./Loading.js";

const meta: Meta = {
    title: "Components/UI/Loader/Loading",
    component: Loading,
    tags: ["autodocs", "ui"],
    argTypes: {
        data: {
            type: "boolean",
        },
        isLoading: {
            type: "boolean",
        },
    },
};

type Story = StoryObj<typeof Loading>;

const Container = styled("div", {
    border: "1px solid black", background: "#ddd", width: 300, height: 300, position: "relative",
});

const Primary: Story = {
    args: {
        isLoading: false,
        data: true,
    },
    render: (args) => {
        return (
            <Container>
                <Loading isLoading={Boolean(args.isLoading)} data={args.data}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
                </Loading>
            </Container>
        );
    },
};

export {
    Primary,
};

export default meta;
