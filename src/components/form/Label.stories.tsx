import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ICON, Icon } from "../icons/Icon";

import { Input } from "./input/Input";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
    title: "Components/Form/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

const content = <Input placeholder={"ie: 500"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />;

const Default: Story = {
    args: {
        label: "Username",
        children: content,
    },
};

const BigVariant: Story = {
    args: {
        label: "Big Label",
        variant: "big",
        children: content,
    },
};

const WithoutLabel: Story = {
    args: {
        children: content,
    },
};

const MultipleLabels: Story = {
    render: () => (
        <div>
            <Label label={"First name"}>
                <Input placeholder={"John"} />
            </Label>
            <Label label={"Last name"}>
                <Input placeholder={"Doe"} />
            </Label>
            <Label label={"Email"} variant={"big"}>
                <Input placeholder={"john@example.com"} />
            </Label>
        </div>
    ),
};

export {
    Default,
    BigVariant,
    WithoutLabel,
    MultipleLabels,
};
export default meta;
