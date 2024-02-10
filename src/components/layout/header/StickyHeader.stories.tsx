import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { StickyHeader } from "./StickyHeader";
import { Header } from "./Header";

const meta: Meta = {
    title: "Components/Layout/Header/StickyHeader",
    component: StickyHeader,
    tags: ["autodocs", "layout"],
};

type Story = StoryObj<typeof StickyHeader>;

const Primary: Story = {
    render: (args) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
        const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);

        return (
            <StickyHeader {...args}>
                <Header>x<br />x<br />x</Header>
                <StickyHeader.Content>{longContent}</StickyHeader.Content>
            </StickyHeader>
        );
    },
};

export {
    Primary,
};

export default meta;
