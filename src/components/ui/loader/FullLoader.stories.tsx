import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { FullLoader } from "./FullLoader.js";

const meta: Meta = {
    title: "Components/UI/Loader/FullLoader",
    component: FullLoader,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof FullLoader>;

const Primary: Story = {
    args: {},
    render: () => {
        return (
            <>
                Container:
                <div style={{ border: "1px solid black", width: 300, height: 300 }}>
                    <FullLoader />
                </div>
            </>
        );
    },
};

export {
    Primary,
};

export default meta;

