import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { NextLink } from "../../../demo/NextLink";

import { Item } from "./Item";
import { List } from "./List";

const meta: Meta = {
    title: "Components/Layout/List/Item",
    component: Item,
    tags: ["autodocs", "layout"],
    argTypes: {
        inset: {
            type: "boolean",
        },
        Link: {
            controls: "none",
        },
    },
};

type Story = StoryObj<typeof Item>;

const Primary: Story = {
    args: {
        children: "I am a list item",
        inset: false,
        Link: NextLink,
    },
    render: (args) => {
        return <List><Item {...args} /></List>;
    },
};

const Alignment: Story = {
    args: {
        children: [
            <div key={"1st"}>first</div>,
            <div key={"2nd"}>2nd</div>,
            <div key={"3rd"}>last</div>,
        ],
        ratio: "1/2/1",
    },
    render: (args) => {
        return <List><Item {...args} /></List>;
    },
};

const OnClick: Story = {
    args: {
        children: "I am a list item, but I will render a button, click me",
        onClick: () => {
            alert("Clicked!");
        },
    },
    render: (args) => {
        return <List><Item {...args} /></List>;
    },
};

export {
    Primary,
    Alignment,
    OnClick,
};

export default meta;
