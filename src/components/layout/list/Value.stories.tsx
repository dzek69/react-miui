import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Value } from "./Value.js";
import { List } from "./List.js";
import { Item } from "./Item.js";

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
