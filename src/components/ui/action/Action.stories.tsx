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
        href: { type: "string" },
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

const Button: Story = {
    args: {
        label: "I am a button",
        icon: "checkmark",
        onClick: () => { alert("Clicked"); },
    },
};

const Link: Story = {
    args: {
        label: "I am a link",
        icon: "checkmark",
        href: "https://example.com",
    },
};

const WithCustomLink: Story = {
    args: {
        label: "I am a custom link",
        icon: "checkmark",
        to: "/subpage",
        Link: (props) => {
            return (
                <a
                    href={props.href}
                    onClick={(e) => { e.preventDefault(); alert("I'd take you to " + props.href); }}
                >
                    {props.children}
                </a>
            );
        },
    },
};

export {
    Primary,
    Button,
    Link,
    WithCustomLink,
};

export default meta;
