import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
    title: "Components/Form/Toggle",
    component: Toggle,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: {
                type: "select",
                options: [true, false, null],
            },
        },
    },
};

type Story = StoryObj<typeof meta>;

const Default: Story = {
    args: {
        value: false,
        onChange: () => {},
    },
};

const On: Story = {
    args: {
        value: true,
        onChange: () => {},
    },
};

const Undetermined: Story = {
    args: {
        value: null,
        onChange: () => {},
    },
};

const Disabled: Story = {
    args: {
        value: true,
        disabled: true,
        onChange: () => {},
    },
};

const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState<boolean | null>(false);

        return (
            <Toggle
                value={value}
                onChange={setValue}
                onContextMenu={(e) => {
                    e.preventDefault();
                    alert("Right-clicked/long pressed!");
                }}
            />
        );
    },
};

const WithUndeterminedClick: Story = {
    render: () => {
        const [value, setValue] = useState<boolean | null>(null);

        return (
            <Toggle
                value={value}
                onChange={setValue}
                undeterminedClickValue={true}
            />
        );
    },
};

const AllStates: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Toggle value={false} onChange={() => {}} />
                <span>Off</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Toggle value={true} onChange={() => {}} />
                <span>On</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Toggle value={null} onChange={() => {}} />
                <span>Undetermined</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Toggle value={true} disabled={true} onChange={() => {}} />
                <span>Disabled</span>
            </div>
        </div>
    ),
};

export {
    Default,
    On,
    Undetermined,
    Disabled,
    Interactive,
    WithUndeterminedClick,
    AllStates,
};

export default meta;
