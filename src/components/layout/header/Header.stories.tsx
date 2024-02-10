import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { ICON } from "../../icons/Icon";

import { Header } from "./Header";
import { HeaderIconAction } from "./HeaderIconAction";

const meta: Meta = {
    title: "Components/Layout/Header/Header",
    component: Header,
    tags: ["autodocs", "layout"],

    argTypes: {
        before: {
            control: {
                type: "text",
            },
        },
        after: {
            control: {
                type: "text",
            },
        },
    },
    args: {
        before: "Left side",
        children: "Title",
        after: "[Icons]",
    },
};

type Story = StoryObj<typeof Header>;

const Primary: Story = {};
const LongContent: Story = {
    render: (args) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
        const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);

        return (
            <>
                <Header {...args} />
                {longContent}

            </>
        );
    },
};

const handleClick = () => { alert(1); };

const WithButtons: Story = {
    args: {
        before: (
            <>
                <HeaderIconAction icon={ICON.back} onClick={handleClick} />
                <HeaderIconAction icon={ICON.checkmark} onClick={handleClick} />
            </>
        ),
    },
};

const Vertical: Story = {
    args: {
        before: (
            <>
                <HeaderIconAction icon={ICON.back} onClick={handleClick} />
                <HeaderIconAction icon={ICON.checkmark} onClick={handleClick} />
            </>
        ),
        after: null,
        position: "left",
        children: "M",
    },
};

export {
    Primary,
    LongContent,
    WithButtons,
    Vertical,
};

export default meta;
