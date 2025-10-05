import React from "react";

import { omit } from "@ezez/utils";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { styled } from "../../../theme";
import { Icon, ICON } from "../../icons/Icon";

import { KeyValue, KeyValueKeySelector, KeyValueValueSelector, KeyValueIconSelector } from "./KeyValue";

const meta: Meta<typeof KeyValue> = {
    title: "UI/KeyValue",
    component: KeyValue,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

type Story = StoryObj<typeof KeyValue>;

// Create custom styled variants of the KeyValue component
const StyledKeyValue = styled(KeyValue, {
    "--kv-background-color": "#f5f5f5",
    "--kv-border-color": "#ddd",
    "--kv-hover-background-color": "#e8e8e8",
    "borderRadius": "8px",
    "boxShadow": "0 2px 4px rgba(0,0,0,0.05)",

    // Target the Key subcomponent using the exported selector
    [`& ${KeyValueKeySelector}`]: {
        fontFamily: "serif",
        fontStyle: "italic",
        color: "$blue1",
    },

    // Target the Value subcomponent using the exported selector
    [`& ${KeyValueValueSelector}`]: {
        fontWeight: "bold",
        color: "$green1",
    },

    // Target the Icon subcomponent using the exported selector
    [`& ${KeyValueIconSelector}`]: {
        color: "$orange1",
    },
});

// Sample items array that shows different ways to use KeyValue items
const items = [
    {
        key: "Turbo",
        value: "100x",
    },
    {
        key: "Turbo",
        value: "100x",
        icon: <Icon name={ICON.heart} />,
        onClick: () => { alert("Clicked item with heart icon"); },
    },
    {
        value: "99%",
        icon: <Icon name={ICON.battery} />,
    },
    {
        key: "4,25 V",
        value: "99%",
        icon: <Icon name={ICON.battery} />,
    },
    {
        key: "Just key",
    },
    {
        value: "Just value",
    },
    {
        key: <>Multi line<br />key</>,
    },
    {
        value: <>Multi line<br />value</>,
    },
];

/**
 * Default configuration of the KeyValue component with values displayed first
 * in a 3-column layout. This example showcases different item configurations including:
 * - Simple key-value pairs
 * - Items with icons and click handlers
 * - Value-only or key-only items
 * - Multi-line content
 */
const Default: Story = {
    args: {
        items: items,
        valueFirst: true,
        cols: 3,
    },
};

/**
 * Two-column layout with keys displayed first (standard key-value order)
 */
const TwoColumn: Story = {
    args: {
        items: items,
        valueFirst: false,
        cols: 2,
    },
};

/**
 * Single column layout that displays each key-value pair in a vertical list
 */
const SingleColumn: Story = {
    args: {
        items: items,
        valueFirst: false,
        cols: 1,
    },
};

/**
 * Custom styled variant using the styled() function to create a component with:
 * - Custom background and border colors
 * - Serif font for keys with italic styling and blue color
 * - Bold values with green color
 * - Orange-colored icons
 * - Rounded corners and subtle shadow
 */
const CustomStyled: Story = {
    render: (args) => (
        <StyledKeyValue
            items={items}
            valueFirst={true}
            cols={2}
            {...omit(args, ["ref", "items"])}
        />
    ),
};

export { Default, TwoColumn, SingleColumn, CustomStyled };
export default meta;
