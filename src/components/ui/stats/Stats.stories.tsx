import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { styled } from "../../../theme";
import { Div } from "../../native";
import {
    Stats,
    StatsItemSelector,
    StatsLabelSelector,
    StatsSeparatorSelector,
    StatsValueSelector,
} from "./Stats";

const meta: Meta<typeof Stats> = {
    title: "UI/Stats",
    component: Stats,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};

type Story = StoryObj<typeof Stats>;

const sampleStats = [
    {
        label: "Temperature",
        value: "32°C",
    },
    {
        label: "Used",
        value: "320.3 mAh",
    },
    {
        label: "Used for",
        value: "14h 32m",
    },
];

/**
 * Default usage of the Stats component with light styling on a colored background.
 */
const Default: Story = {
    render: () => (
        <Div
            css={{
                background: "$green1Darker",
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            <Stats stats={sampleStats} />
        </Div>
    ),
};

/**
 * Dark variant of the Stats component, designed to be used on light backgrounds.
 */
const DarkVariant: Story = {
    render: () => (
        <Div
            css={{
                background: "$activeBg",
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            <Stats stats={sampleStats} variant={"dark"} />
        </Div>
    ),
};

/**
 * Stats component with more items to demonstrate how spacing and separators adapt.
 */
const WithMoreItems: Story = {
    render: () => {
        const moreStats = [
            ...sampleStats,
            {
                label: "Voltage",
                value: "4.2V",
            },
            {
                label: "Capacity",
                value: "5000 mAh",
            },
        ];

        return (
            <Div
                css={{
                    background: "$green1Darker",
                    height: "200px",
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <Stats stats={moreStats} />
            </Div>
        );
    },
};

/**
 * Custom styled variant of the Stats component with a different color scheme.
 */
const CustomStyledStats = styled(Stats, {
    "--stats-border": "1px solid rgba(0, 0, 100, 0.2)",
    "--stats-bg": "linear-gradient(to bottom, rgba(100, 149, 237, 0.1), rgba(100, 149, 237, 0.2))",
    "--stats-value-color": "#1a237e",
    "--stats-label-color": "#3949ab",

    "borderRadius": "8px 8px 0 0",
    "boxShadow": "0 -2px 10px rgba(0, 0, 0, 0.05)",

    // Target specific subcomponents
    [`& ${StatsValueSelector}`]: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },

    [`& ${StatsLabelSelector}`]: {
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontSize: "0.8rem",
    },

    [`& ${StatsSeparatorSelector}`]: {
        borderLeft: "2px dotted rgba(0, 0, 100, 0.2)",
    },

    [`& ${StatsItemSelector}`]: {
        "transition": "transform 0.2s ease",

        "&:hover": {
            transform: "translateY(-5px)",
        },
    },
});

/**
 * A custom styled version of the Stats component with blue color scheme
 * and interactive hover effects.
 */
const CustomStyled: Story = {
    render: () => (
        <div
            style={{
                background: "#e8eaf6",
                height: "200px",
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            <CustomStyledStats stats={sampleStats} />
        </div>
    ),
};

export { Default, DarkVariant, WithMoreItems, CustomStyled };
export default meta;
