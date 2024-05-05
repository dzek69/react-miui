import React from "react";

import { omit } from "@ezez/utils";

import type { Meta, StoryObj } from "@storybook/react";

import { Line } from "./Line";

const meta: Meta = {
    title: "Components/UI/Line",
    component: Line,
    tags: ["autodocs", "ui"],
    argTypes: {
        "--miui-line-size": {
            description: "CSS property that defines length of the line",
        },
    },
    args: {
        "vertical": false,
        "--miui-line-size": "100px",
    },
};

type Story = StoryObj<typeof Line>;

const Primary: Story = {
    render: (args) => {
        type LineSizeObject = { "--miui-line-size": string };
        type ExtraArgs = LineSizeObject & typeof args;

        const lineSize = (args as ExtraArgs)["--miui-line-size"];
        const props = omit(args as ExtraArgs, ["--miui-line-size"]);
        return <Line {...props} css={{ "--miui-line-size": lineSize }} />;
    },
};

export default meta;
export {
    Primary,
};
