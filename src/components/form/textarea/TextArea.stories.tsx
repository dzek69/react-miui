import type { StoryObj, Meta } from "@storybook/react";

import { TextArea } from "./TextArea";

const meta: Meta = {
    title: "Components/Form/TextArea",
    component: TextArea,
    tags: ["autodocs", "form"],
};

type Story = StoryObj<typeof TextArea>;

const Primary: Story = {
    args: {},
};

export {
    Primary,
};

export default meta;
