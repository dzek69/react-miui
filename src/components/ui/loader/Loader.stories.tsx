import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    title: "Components/UI/Loader/Basic",
    component: Loader,
    tags: ["autodocs", "ui"],
    argTypes: {
        show: {
            type: "boolean",
        },
        size: {
            type: "string",
        },
    },
};

type Story = StoryObj<typeof Loader>;

const Primary: Story = {
    args: {
        size: 32,
        show: true,
    },
};

export {
    Primary,
};

export default meta;
