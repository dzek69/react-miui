import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { styled } from "../../../theme";
import { Header, HeaderContentsSelector } from "../../layout/header/Header";
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

const manyValues = [
    "First element",
    "Apple",
    "Pie",
    "Dogs and cats",
    "Flying vehicles",
    "Random text that is very long",
    "Computer",
    "Leaflet",
    "Jar of nuts",
    "POE Network Switch",
];

const MultiLine: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(args.value ?? "");

        return (
            <Header>
                <Selector
                    {...args}
                    multiLine={true}
                    value={current}
                    values={manyValues}
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

const Lengthy: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(args.value ?? "");

        return (
            <Header css={{ [`& ${HeaderContentsSelector}`]: { overflow: "hidden" } }}>
                <Selector
                    {...args}
                    values={manyValues}
                    multiLine={false}
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

export {
    Primary,
    WithinHeader,
    CustomStyled,
    Lengthy,
    MultiLine,
};

export default meta;
