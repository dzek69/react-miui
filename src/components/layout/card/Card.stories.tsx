import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { styled } from "../../../theme";
import { Section } from "../section/Section";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    title: "Layout/Card",
    component: Card,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof Card>;

/**
 * Default Card component with basic styling.
 */
const Default: Story = {
    render: () => (
        <Card>
            <Section vertical={true} horizontal={true}>
                Content inside a basic Card
            </Section>
        </Card>
    ),
};

/**
 * Multiple Cards demonstrating default spacing between cards.
 */
const MultipleCards: Story = {
    render: () => (
        <Section.Container>
            <Card>
                <Section vertical={true} horizontal={true}>
                    First Card
                </Section>
            </Card>
            <Card>
                <Section vertical={true} horizontal={true}>
                    Second Card
                </Section>
            </Card>
            <Card variant={"margin"}>
                <Section vertical={true} horizontal={true}>
                    Third Card with margin variant
                </Section>
            </Card>
        </Section.Container>
    ),
};

/**
 * Card with the "margin" variant that adds left and right margins.
 */
const WithMargin: Story = {
    render: () => (
        <Card variant={"margin"}>
            <Section vertical={true} horizontal={true}>
                Card with left and right margins
            </Section>
        </Card>
    ),
};

/**
 * Custom styled Card with a different background color, shadow, and border radius.
 */
const CustomStyledCard = styled(Card, {
    background: "#f0f8ff", // Light blue background
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #d0e3ff",
});

/**
 * A custom styled version of the Card component with enhanced visual styling.
 */
const CustomStyled: Story = {
    render: () => (
        <CustomStyledCard>
            <Section vertical={true} horizontal={true}>
                This card has custom styling
            </Section>
        </CustomStyledCard>
    ),
};

export { Default, MultipleCards, WithMargin, CustomStyled };
export default meta;
