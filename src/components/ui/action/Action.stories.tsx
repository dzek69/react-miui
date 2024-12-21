import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Action } from "./Action";

const meta: Meta = {
    title: "Components/UI/Action",
    component: Action,
    tags: ["autodocs", "ui"],
    args: {
        badge: "",
    },
    argTypes: {
        badge: {
            control: {
                type: "text",
            },
        },
    },
};

type Story = StoryObj<typeof Action>;

const Primary: Story = {
    args: {
        label: "Section name",
        icon: "checkmark",
    },
    render: (args) => {
        const props = { ...args };
        if (!args.label) {
            delete props.label;
        }
        return (
            <Action {...props} />
        );
    },
};

export {
    Primary,
};

export default meta;
