import React, { useState } from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { styled } from "../../../theme";
import { Section } from "../../layout/section/Section";

import { Choice } from "./Choice";

const meta: Meta = {
    title: "Components/Form/Choice",
    component: Choice,
    tags: ["autodocs", "form"],
};

type Story = StoryObj<typeof Choice>;

const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem",
});

const Basic: Story = {
    render: () => {
        const values = ["Single", "Multiple words"];
        const [current, setCurrent] = useState(values[0]!);

        return (
            <Section vertical={true} horizontal={true}>
                <Choice
                    values={values}
                    value={current}
                    name={"basic-choice"}
                    onChange={setCurrent}
                />
            </Section>
        );
    },
};

const WithObjectValues: Story = {
    render: () => {
        const values = [
            {
                label: "Option 1",
                value: "one",
            },
            {
                label: "Option 2",
                value: "two",
            },
            {
                label: "Option 3",
                value: "three",
            },
        ];
        const [current, setCurrent] = useState(values[0]!.value);

        return (
            <Section vertical={true} horizontal={true}>
                <Choice
                    values={values}
                    value={current}
                    name={"object-choice"}
                    onChange={setCurrent}
                />
                <p>Current value: {current}</p>
            </Section>
        );
    },
};

const Blue = styled(Choice, {
    "--choice-text": "#59a5c2",
    "--choice-border": "#10a4dc",
    "--choice-bg": "#f9fdff",
    "--choice-active-text": "#145b79",
    "--choice-active-bg": "#ddf5ff",
});

const Variants: Story = {
    render: () => {
        const values = [
            { label: "Option 1", value: "one" },
            { label: "Option 2", value: "two" },
            { label: "Option 3", value: "three" },
        ];
        const [current, setCurrent] = useState(values[0]!.value);

        return (
            <Container>
                <Section vertical={true} horizontal={true}>
                    <h3>Default (centered)</h3>
                    <Choice
                        values={values}
                        value={current}
                        name={"default-choice"}
                        onChange={setCurrent}
                    />
                </Section>

                <Section vertical={true} horizontal={true}>
                    <h3>Wide variant</h3>
                    <Choice
                        values={values}
                        value={current}
                        name={"wide-choice"}
                        onChange={setCurrent}
                        wide={true}
                    />
                </Section>

                <Section vertical={true} horizontal={true}>
                    <h3>Left aligned variant</h3>
                    <Choice
                        values={values}
                        value={current}
                        name={"left-choice"}
                        onChange={setCurrent}
                        unaligned={true}
                    />
                </Section>

                <Section vertical={true} horizontal={true}>
                    <h3>Custom colors</h3>
                    <Blue
                        values={values}
                        value={current}
                        name={"combined-choice"}
                        onChange={setCurrent}
                    />
                </Section>
            </Container>
        );
    },
};

export default meta;

export {
    Basic,
    WithObjectValues,
    Variants,
};
