import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { List } from "../layout/list/List";
import { ICON, Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "Icons/Icon",
    component: Icon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        name: {
            options: Object.values(ICON),
            control: { type: "select" },
        },
    },
};

type Story = StoryObj<typeof Icon>;

/**
 * Basic usage of a single Icon component.
 */
const SingleIcon: Story = {
    args: {
        name: ICON.heart,
    },
};

/**
 * A gallery of all available icons in the system displayed in a grid layout.
 */
const AllIcons: Story = {
    render: () => {
        const icons = Object.values(ICON).map((value) => {
            return (
                <List.Item key={value} ratio={"1/"}>
                    {value}
                    <Icon name={value} />
                </List.Item>
            );
        });

        return (
            <List>
                {icons}
            </List>
        );
    },
};

/**
 * Custom styled icons with different colors using the styled() API.
 */
const CustomStyledIcons: Story = {
    render: () => {
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ textAlign: "center", color: "red" }}>
                    <Icon name={ICON.heart} />
                    <div style={{ marginTop: "8px", fontSize: "12px" }}>Red</div>
                </div>
                <div style={{ textAlign: "center", color: "blue" }}>
                    <Icon name={ICON.heart} />
                    <div style={{ marginTop: "8px", fontSize: "12px" }}>Blue</div>
                </div>
                <div style={{ textAlign: "center", color: "green" }}>
                    <Icon name={ICON.heart} />
                    <div style={{ marginTop: "8px", fontSize: "12px" }}>Green</div>
                </div>
            </div>
        );
    },
};

export { SingleIcon, AllIcons, CustomStyledIcons };
export default meta;
