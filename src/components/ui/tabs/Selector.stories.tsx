import React, { useState } from "react";

import type { StoryObj, Meta } from "@storybook/react-vite";

import { Header } from "../../layout/header/Header";
import { styled } from "../../../theme";

import { Selector, SelectorItemSelector } from "./Selector";

const meta: Meta = {
    title: "Components/UI/Selector",
    component: Selector,
    tags: ["autodocs", "ui"],
    args: {
        values: ["Recent", "Categories", "Whole Disk"],
        value: "Recent",
    },
    argTypes: {
        onChange: {
            action: "onChange",
        },
    },
};

type Story = StoryObj<typeof Selector>;

const Primary: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(args.value ?? "");

        return (
            <Selector
                {...args}
                value={current}
                onChange={(value: string) => {
                    setCurrent(value);
                    if (args.onChange) {
                        args.onChange(value);
                    }
                }}
            />
        );
    },
};

const WithinHeader: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(args.value ?? "");

        return (
            <Header>
                <Selector
                    {...args}
                    value={current}
                    onChange={(value: string) => {
                        setCurrent(value);
                        if (args.onChange) {
                            args.onChange(value);
                        }
                    }}
                />
            </Header>
        );
    },
};

const CustomStyledSelector = styled(Selector, {
    "backgroundColor": "$blue2",
    "borderRadius": "8px",
    "&&": {
        "--selector-active": "$colors$green1",
    },

    [`& ${SelectorItemSelector}`]: {
        fontFamily: "serif",
        fontWeight: "bold",
    },
}) as typeof Selector;

const CustomStyled: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(args.value ?? "");

        return (
            <CustomStyledSelector
                {...args}
                value={current}
                onChange={(value: string) => {
                    setCurrent(value);
                    if (args.onChange) {
                        args.onChange(value);
                    }
                }}
            />
        );
    },
    args: {
        values: ["Music", "Video", "Photos", "Documents"],
    },
};

export {
    Primary,
    WithinHeader,
    CustomStyled,
};

export default meta;
