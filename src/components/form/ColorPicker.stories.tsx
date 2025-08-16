import React, { useState } from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { styled } from "../../theme";
import { Section } from "../layout/section/Section";

import { ColorPicker } from "./ColorPicker";

const meta: Meta = {
    title: "Components/Form/ColorPicker",
    component: ColorPicker,
    tags: ["autodocs", "form"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [undefined, "pill"],
        },
        value: {
            control: { type: "color" },
        },
    },
};

type Story = StoryObj<typeof ColorPicker>;

const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "1rem",
});

const Row = styled("div", {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
});

const Basic: Story = {
    render: () => {
        const [color, setColor] = useState("#3ec234");

        return (
            <Section vertical={true} horizontal={true}>
                <Row>
                    <ColorPicker
                        value={color}
                        name={"basic-color"}
                        onChange={(e) => { setColor(e.target.value); }}
                    />
                    <span>Selected: {color}</span>
                </Row>
            </Section>
        );
    },
};

const PillVariant: Story = {
    render: () => {
        const [color, setColor] = useState("#008ad2");

        return (
            <Section vertical={true} horizontal={true}>
                <div style={{ width: "200px" }}>
                    <ColorPicker
                        value={color}
                        name={"pill-color"}
                        onChange={(e) => { setColor(e.target.value); }}
                        variant={"pill"}
                        label={"Choose Color"}
                    />
                </div>
                <p>Selected: {color}</p>
            </Section>
        );
    },
};

const States: Story = {
    render: () => {
        const [color, setColor] = useState("#d2f39f");

        return (
            <Container>
                <Section vertical={true} horizontal={true}>
                    <h3>Different States</h3>
                    <Row>
                        <ColorPicker
                            value={color}
                            name={"normal"}
                            onChange={(e) => { setColor(e.target.value); }}
                        />

                        <ColorPicker
                            value={color}
                            name={"disabled"}
                            onChange={(e) => { setColor(e.target.value); }}
                            disabled={true}
                        />

                        <ColorPicker
                            value={color}
                            name={"readonly"}
                            onChange={(e) => { setColor(e.target.value); }}
                            readOnly={true}
                        />

                        <ColorPicker
                            value={color}
                            name={"error"}
                            onChange={(e) => { setColor(e.target.value); }}
                            error={true}
                        />
                    </Row>
                </Section>

                <Section vertical={true} horizontal={true}>
                    <h3>Pill States</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "200px" }}>
                        <ColorPicker
                            value={color}
                            name={"pill-normal"}
                            onChange={(e) => { setColor(e.target.value); }}
                            variant={"pill"}
                            label={"Normal"}
                        />

                        <ColorPicker
                            value={color}
                            name={"pill-disabled"}
                            onChange={(e) => { setColor(e.target.value); }}
                            variant={"pill"}
                            label={"Disabled"}
                            disabled={true}
                        />

                        <ColorPicker
                            value={color}
                            name={"pill-readOnly"}
                            onChange={(e) => { setColor(e.target.value); }}
                            variant={"pill"}
                            label={"Read only"}
                            readOnly={true}
                        />

                        <ColorPicker
                            value={color}
                            name={"pill-error"}
                            onChange={(e) => { setColor(e.target.value); }}
                            variant={"pill"}
                            label={"With Error"}
                            error={true}
                        />
                    </div>
                </Section>
            </Container>
        );
    },
};

export default meta;

export {
    Basic,
    PillVariant,
    States,
};
