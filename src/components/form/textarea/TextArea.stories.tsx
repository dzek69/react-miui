import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gap } from "../../utils/Gap";
import { TextArea } from "./TextArea";

const meta: Meta = {
    title: "Components/Form/TextArea",
    component: TextArea,
    tags: ["autodocs", "form"],
    argTypes: {
        error: { type: "boolean" },
        disabled: { type: "boolean" },
        readOnly: { type: "boolean" },
    },
};

type Story = StoryObj<typeof TextArea>;

const Primary: Story = {
    args: {
        placeholder: "Type something here",
    },
};

const WithLabel: Story = {
    args: {
        label: "Description",
        placeholder: "Type something here",
    },
};

const FloatingLabel: Story = {
    render: () => (
        <Gap>
            <TextArea label={"Pinned label (default)"} placeholder={"Placeholder visible"} />
            <TextArea label={"Floating label"} pinnedLabel={false} placeholder={"Visible on focus"} />
            <TextArea label={"Only label, no placeholder"} pinnedLabel={false} />
            <TextArea label={"Prefilled"} pinnedLabel={false} defaultValue={"Some value"} />
            <TextArea label={"Error state"} pinnedLabel={false} error={true} />
            <TextArea label={"Disabled"} pinnedLabel={false} disabled={true} />
            <TextArea label={"Read only"} pinnedLabel={false} readOnly={true} defaultValue={"Read-only value"} />
        </Gap>
    ),
};

export {
    Primary, WithLabel, FloatingLabel,
};

export default meta;
