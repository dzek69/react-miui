import type { StoryObj, Meta } from "@storybook/react";

import { CoveringLoader } from "./CoveringLoader.js";

const meta: Meta = {
    title: "Components/UI/Loader/CoveringLoader",
    component: CoveringLoader,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof CoveringLoader>;

const Primary: Story = {
    args: {},
    render: () => {
        return (
            <CoveringLoader show={true}>
                <div style={{ background: "#f0f0f0" }}>
                    some contents<br />
                    some contents Lorem ipsum etc
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
                    some contents<br />
                    some contents<br />
                    some contents<br />
                </div>
            </CoveringLoader>
        );
    },
};

export {
    Primary,
};

export default meta;
