import React, { useCallback } from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { styled } from "../../../theme";

import { Button } from "./Button.js";

// TODO better docs

const meta: Meta = {
    title: "Components/UI/Button",
    component: Button,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof Button>;

const Primary: Story = {
    args: {
        children: "Click me",
        onClick: () => { alert("Clicked"); },
    },
};

const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
});

const MultipleAtOnce: Story = {
    render: () => {
        const handleClick = useCallback(() => {
            alert("Clicked");
        }, []);

        return (
            <Container>
                <Button onClick={handleClick}>Basic button</Button>
                <Button disabled={true} onClick={handleClick}>Disabled button</Button>
                <Button inline={true} onClick={handleClick}>Inline button</Button>
                <Button outline={true} onClick={handleClick}>Outline button</Button>
            </Container>
        );
    },
};

export {
    Primary,
    MultipleAtOnce,
};

export default meta;
