import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Icon, ICON } from "../../icons/Icon.js";

import { List } from "./List.js";

const meta: Meta = {
    title: "Components/Layout/List/List",
    component: List,
    tags: ["autodocs", "layout"],
    argTypes: {
        inset: {
            type: "boolean",
        },
    },
};

type Story = StoryObj<typeof List>;

const Primary: Story = {
    args: {
        inset: false,
    },
    render: (args) => {
        return (
            <List {...args}>
                <List.Item>I am a list item</List.Item>
                <List.Item>I am a list item</List.Item>
            </List>
        );
    },
};

const FullFeaturedExample: Story = {
    render: (args) => {
        return (
            <List>
                <List.Header>GPS settings</List.Header>
                <List.Item>
                    <List.Item.Label sub={"Higher precision means higher battery usage"}>
                        GPS precision
                    </List.Item.Label>
                    <List.Item.Value>
                        Low
                    </List.Item.Value>
                    <Icon name={ICON.forward} />
                </List.Item>
                <List.Item>
                    <List.Item>
                        Something
                    </List.Item>
                </List.Item>
                <List.Header>
                    Last trips
                </List.Header>
                <List.Item>
                    Portugal
                </List.Item>
                <List.Item>
                    <List.Item.Label sub={"Visited 2 times in last year"}>
                        Poland
                    </List.Item.Label>
                </List.Item>
                <List.Item>
                    Sweden
                </List.Item>
                <List.Header>
                    Choose one option
                </List.Header>
                <List.Item selected={true}>yes</List.Item>
                <List.Item selected={false}>no</List.Item>
            </List>
        );
    },
};

export {
    Primary,
    FullFeaturedExample,
};

export default meta;
