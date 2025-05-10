import React from "react";

import { omit } from "@ezez/utils";

import type { StoryObj, Meta } from "@storybook/react";

import { NextLink } from "../../../demo/NextLink";

import { Item } from "./Item";
import { List } from "./List";
import { Label } from "./Label";
import { Value } from "./Value";

const demoControl = {
    table: {
        category: "Demo controls",
    },
};

const meta: Meta = {
    title: "Components/Layout/List/Item",
    component: Item,
    tags: ["autodocs", "layout"],
    argTypes: {
        inset: {
            type: "boolean",
        },
        selected: {
            type: "boolean",
        },
        Link: {
            controls: "none",
        },
        renderList: {
            ...demoControl,
            type: "boolean",
            name: "Render <List> around",
        },
    },
};

type Story = StoryObj<typeof Item>;

const Primary: Story = {
    args: {
        children: "I am a list item",
        Link: NextLink,
    },
    render: (rawProps) => {
        const renderList = (rawProps as { renderList: boolean | undefined }).renderList;
        // @ts-expect-error Storybook is crazy
        const args = omit(rawProps, ["renderList"]);

        const items = [
            <Item key={1} {...args} />,
            <Item key={2}>Other item</Item>,
            <Item key={3}>Other item</Item>,
        ];

        if (renderList) {
            return (
                <List>{items}</List>
            );
        }

        return (
            <div>{items}</div>
        );
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
        return (
            <List>
                <Item {...args} />
                <Item>Other item</Item>
                <Item>Other item</Item>
            </List>
        );
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
        return (
            <List>
                <Item {...args} />
                <Item>Other item</Item>
                <Item>Other item</Item>
            </List>
        );
    },
};

const Complex: Story = {
    args: {
        children: [
            <Label key={"l"}>Hi</Label>,
            <Value key={"v"}>Value</Value>,
        ],
        selected: true,
    },
    render: (args) => {
        return (
            <List>
                <Item {...args} />
                <Item>Other item</Item>
                <Item>Other item</Item>
            </List>
        );
    },
};

export {
    Primary,
    Alignment,
    OnClick,
    Complex,
};

export default meta;
