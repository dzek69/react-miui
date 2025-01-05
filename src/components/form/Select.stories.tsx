import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta = {
    title: "Components/Form/Select",
    component: Select,
    tags: ["autodocs", "form"],
    argTypes: {
        error: { type: "boolean" },
        disabled: { type: "boolean" },
    },
};

type Story = StoryObj<typeof Select>;

const Primary: Story = {
    args: {
        children: [
            <option key={"1"} value={"1"}>First</option>,
            <option key={"2"} value={"2"}>Second</option>,
            <option key={"3"} value={"3"}>Third</option>,
        ],
        disabled: false,
    },
};

export {
    Primary,
};

export default meta;
