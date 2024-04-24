import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { styled } from "../../../theme";

import { Progress, ValueClassName } from "./Progress";

const meta: Meta = {
    title: "Components/UI/Progress",
    component: Progress,
    tags: ["autodocs", "layout"],
    args: {
        value: 25,
        valueFrom: 15,
        scaleFrom: 10,
        scaleTo: 30,
    },
};

type Story = StoryObj<typeof Progress>;

const Primary: Story = {};

const CustomProgress = styled(Progress, {
    "--value-background-color":
        "linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)",

    [`& ${ValueClassName}`]: {
        borderWidth: 0,
    },
});

const CustomizedColors: Story = {
    render: (args) => {
        return (
            <CustomProgress {...args} />
        );
    },
};

export default meta;
export {
    Primary,
    CustomizedColors,
};
