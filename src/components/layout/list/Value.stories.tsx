import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Item } from "./Item";
import { List } from "./List";
import { Value } from "./Value";

const meta: Meta = {
    title: "Components/Layout/List/Value",
    component: Value,
    tags: ["autodocs", "layout"],
};

type Story = StoryObj<typeof Value>;

const Primary: Story = {
    args: {
        children: "23,4*C",
    },
    render: (args) => {
        return (
            <List>
                <Item>
                    <div>Some label</div>
                    <Value {...args} />
                </Item>
            </List>
        );
    },
};

export {
    Primary,
};

export default meta;
