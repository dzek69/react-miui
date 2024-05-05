import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Div } from "../../native";

import { ToolButton } from "./ToolButton";

const meta: Meta = {
    title: "Components/UI/ToolButton",
    component: ToolButton,
    tags: ["autodocs", "ui"],
    argTypes: {
        variant: {
            control: {
                type: "select",
            },
            options: ["default", "secondary", "secondaryOnLight"],
        },
    },
};

type Story = StoryObj<typeof ToolButton>;

const Primary: Story = {
    args: {
        children: "Click me",
        onClick: () => { alert("Clicked"); },
    },
    render: args => {
        return (
            <Div css={{ background: args.variant === "secondaryOnLight" ? "white" : "$blue5", padding: 50 }}>
                <ToolButton {...args} />
            </Div>
        );
    },
};
export default meta;
export {
    Primary,
};
