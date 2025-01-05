import type { StoryObj, Meta } from "@storybook/react";

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

export {
    Primary,
};

export default meta;
