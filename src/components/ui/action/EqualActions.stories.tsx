import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ICON } from "../../icons/Icon";
import { Action } from "./Action";
import { EqualActions } from "./EqualActions";

const meta: Meta<typeof EqualActions> = {
    title: "Components/UI/EqualActions",
    component: EqualActions,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof EqualActions>;

/**
 * Basic usage of EqualActions component to make every action take the same amount of horizontal space.
 * Some components (like Header) will do this automatically for you. If you need to use
 * Actions outside of such components - manually wrap them with EqualActions.
 */
const Default: Story = {
    render: () => (
        <EqualActions>
            <Action icon={ICON.checkmark} label={"Add"} />
            <Action icon={ICON.checkmark} label={"Delete"} />
            <Action icon={ICON.checkmark} label={"Share on Web"} />
        </EqualActions>
    ),
};

/**
 * EqualActions can be used in vertical mode as well.
 */
const VerticalMode: Story = {
    render: () => (
        <EqualActions mode={"vertical"}>
            <Action icon={ICON.checkmark} label={"Add"} />
            <Action icon={ICON.checkmark} label={"Delete"} />
            <Action icon={ICON.checkmark} label={"Share on Web"} />
        </EqualActions>
    ),
};

/**
 * Custom styled variant of EqualActions
 */
const CustomStyled: Story = {
    render: () => {
        // Create a custom wrapper to apply styling
        const customStyle = {
            padding: "10px",
            background: "#f5f5f5",
            borderRadius: "8px",
        };

        return (
            <div style={customStyle}>
                <EqualActions className={"custom-equal-actions"}>
                    <Action icon={ICON.checkmark} label={"Add"} />
                    <Action icon={ICON.checkmark} label={"Delete"} />
                    <Action icon={ICON.checkmark} label={"Share on Web"} />
                </EqualActions>
            </div>
        );
    },
};

export { Default, VerticalMode, CustomStyled };
export default meta;

