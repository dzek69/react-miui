import React from "react";

import type { StoryObj, Meta } from "@storybook/react-vite";

import { CoveringLoader } from "./CoveringLoader";

const meta: Meta = {
    title: "Components/UI/Loader/CoveringLoader",
    component: CoveringLoader,
    tags: ["autodocs", "ui"],
    args: {
        show: false,
        mode: "before",
    },
    argTypes: {
        show: {
            control: "boolean",
        },
        size: {
            control: {
                type: "text",
            },
        },
        mode: {
            options: ["before", "after", "over"],
            control: { type: "select" },
        },
        inertMode: {
            options: ["block-interaction", "cover-element", "pass-through"],
            control: { type: "select" },
        },
    },
};

type Story = StoryObj<typeof CoveringLoader>;

const Primary: Story = {
    args: {},
    render: (args) => {
        const ref = (value: unknown) => { console.info("ref of CoveringLoader:", value); };
        const innerRef = (value: unknown) => { console.info("children div of CoveringLoader:", value); };

        return (
            <div className={"parent"} style={{ background: "red" }}>
                <CoveringLoader {...args} ref={ref}>
                    <div style={{ background: "#f0f0f0" }} ref={innerRef}>
                        some contents<br />
                        some contents Lorem ipsum etc
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
                        some contents<br />
                        some contents<br />
                        some contents<br />
                    </div>
                </CoveringLoader>
            </div>
        );
    },
};

export {
    Primary,
};

export default meta;
