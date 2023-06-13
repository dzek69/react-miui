import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Header } from "./Header.js";
import { List } from "./List.js";

const meta: Meta = {
    title: "Components/Layout/List/Header",
    component: Header,
    tags: ["autodocs", "layout"],
};

type Story = StoryObj<typeof Header>;

const Primary: Story = {
    args: {
        children: "Section name",
    },
    render: (args) => {
        return (
            <List>
                <Header {...args} />
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
                <List.Item>Item 3</List.Item>
                <Header {...args} />
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
                <List.Item>Item 3</List.Item>
            </List>
        );
    },
};

export {
    Primary,
};

export default meta;
