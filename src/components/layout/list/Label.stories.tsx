import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Item } from "./Item";
import { Label } from "./Label";
import { List } from "./List";

const meta: Meta = {
    title: "Components/Layout/List/Label",
    component: Label,
    tags: ["autodocs", "layout"],
    argTypes: {
        sub: {
            type: "string",
        },
    },
};

type Story = StoryObj<typeof Label>;

const Primary: Story = {
    args: {
        children: "I am a label",
        sub: "Sub text",
    },
    render: (args) => {
        return (
            <List>
                <Item>
                    <Label {...args} />
                </Item>
                <Item>
                    I am classic list item
                </Item>
            </List>
        );
    },
};

export {
    Primary,
};

export default meta;
