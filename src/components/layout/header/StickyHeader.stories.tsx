import React, { useEffect } from "react";

import { useForceUpdate } from "@ezez/hooks";

import type { StoryObj, Meta } from "@storybook/react";

import { StickyHeader } from "./StickyHeader";
import { Header } from "./Header";

const meta: Meta = {
    title: "Components/Layout/Header/StickyHeader",
    component: StickyHeader,
    tags: ["autodocs", "layout"],
    argTypes: {
        children: {
            control: {
                disable: true,
            },
            description: "Usual children",
        },
        position: {
            control: {
                type: "select",
            },
            description: "Position of the header",
            options: ["top", "left", "right", "bottom"],
        },
    },
};

type Story = StoryObj<typeof StickyHeader>;

const Primary: Story = {
    render: (args) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
        const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);

        return (
            <>
                <style>
                    {`#story--components-layout-header-stickyheader--primary--primary-inner {
                        height: 400px;
                    }`}
                </style>
                <StickyHeader {...args}>
                    <Header>x</Header>
                    <StickyHeader.Content>{longContent}</StickyHeader.Content>
                </StickyHeader>
            </>
        );
    },
};

const RefsDemo: Story = {
    render: (args) => {
        const ref = React.useRef<HTMLDivElement>(null);
        const refContent = React.useRef<HTMLDivElement>(null);
        const handleForceUpdate = useForceUpdate();

        useEffect(() => {
            handleForceUpdate();
        }, []);

        console.info("RefsDemo", {
            ref: ref.current, refContent: refContent.current,
        });

        return (
            <>
                <StickyHeader {...args} ref={ref}>
                    <Header>x</Header>
                    <StickyHeader.Content ref={refContent}>
                        {`Ref: ${ref.current ? `set ${ref.current.nodeName}` : "not set"}`}<br />
                        {`RefContent: ${refContent.current ? `set ${refContent.current.nodeName}` : "not set"}`}<br />
                    </StickyHeader.Content>
                </StickyHeader>
            </>
        );
    },
};

export {
    Primary,
    RefsDemo,
};

export default meta;
