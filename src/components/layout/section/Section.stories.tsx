import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { List } from "../list/List.js";
import { Item } from "../list/Item.js";

import { Section } from "./Section.js";

const meta: Meta = {
    title: "Components/Layout/Section",
    component: Section,
    tags: ["autodocs", "layout"],
    argTypes: {
        vertical: {
            type: "boolean",
        },
        horizontal: {
            type: "boolean",
        },
    },
};

type Story = StoryObj<typeof Section>;

const Primary: Story = {
    args: {},
    render: (args) => (
        <div style={{ border: "1px solid #ddd" }}>
            <Section.Container>
                <Section {...args}>
                    This is an example section, arguments in the arguments table are applied only to this
                    section. By default sections do not have any padding, so you can place elements that should touch
                    the edges. Use `vertical` and `horizontal` arguments to add padding.
                </Section>
                <Section vertical={true} horizontal={true}>
                    Some section
                </Section>
                <Section>
                    <List>
                        <Item>Some item</Item>
                        <Item>Some item</Item>
                    </List>
                </Section>
            </Section.Container>
        </div>
    ),
};

export {
    Primary,
};

export default meta;
