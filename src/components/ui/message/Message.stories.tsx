import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { styled } from "../../../theme";

import { Message } from "./Message.js";

const meta: Meta<typeof Message> = {
    title: "Components/UI/Message",
    component: Message,
    tags: ["autodocs", "ui"],
    argTypes: {
        children: {
            control: { type: "text" },
            type: "string",
            defaultValue: "This is an example message.",
        },
        type: {
            options: ["tip", "warning", "error", "info"],
        },
        variant: {
            options: ["stretch", "box"],
        },
    },
};

type Story = StoryObj<typeof Message>;

const Primary: Story = {
    args: {
        children: "This is an example message.",
    },
};

const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 10,
});

const MultipleAtOnce: Story = {
    render: () => (
        <Container>
            <Message type={"warning"}>Files will be deleted after 30 days.</Message>
            <Message type={"error"}>Files cannot be deleted.</Message>
            <Message type={"info"}>These files got deleted.</Message>

            <Message type={"warning"} variant={"box"}>Files will be deleted after 30 days.</Message>
            <Message type={"error"} variant={"box"}>Files cannot be deleted.</Message>
            <Message type={"info"} variant={"box"}>These files got deleted.</Message>
        </Container>
    ),
};

export {
    Primary,
    MultipleAtOnce,
};

export default meta;
