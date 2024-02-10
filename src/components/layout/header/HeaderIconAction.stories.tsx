import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Header } from "./Header";
import { HeaderIconAction } from "./HeaderIconAction";

const meta: Meta = {
    title: "Components/Layout/Header/HeaderIconAction",
    component: HeaderIconAction,
    tags: ["autodocs", "layout"],
    render: (args) => {
        return (
            <Header before={<HeaderIconAction {...args} icon={<>i</>} />}>
                On the left you can see the icon
            </Header>
        );
    },
};

type Story = StoryObj<typeof Header>;

const Primary: Story = {};

const MultipleIcons: Story = {
    render: ({ onClick: _onClick, ...args }) => {
        const after = (
            <>
                <div>some text</div>
                <HeaderIconAction {...args} icon={<>i</>} />
                <HeaderIconAction {...args} icon={<>i</>} />
            </>
        );
        return (
            <Header after={after}>
                On the left you can see the icon
            </Header>
        );
    },
};

export {
    Primary,
    MultipleIcons,
};

export default meta;
