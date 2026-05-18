import React, { useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DrawerProps } from "./Drawer";

import { styled } from "../../../theme";
import { Section } from "../../layout/section/Section";
import { Button } from "../button/Button";
import { Drawer } from "./Drawer";

type PlaygroundArgs = Omit<DrawerProps, "isOpen" | "onClose">;

const Playground = (args: PlaygroundArgs) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Page content</h2>
            <p>Open the drawer and tweak its props in the Controls panel.</p>
            {Array(8).fill(0).map((_: number, i) => (
                <Section key={i} vertical={true} horizontal={true}> {/* eslint-disable-line react/no-array-index-key */}
                    <p>Filler row {i + 1}</p>
                </Section>
            ))}
            <Button onClick={handleToggleOpen}>
                {isOpen ? "Close Drawer" : "Open Drawer"}
            </Button>
            <Drawer {...args} isOpen={isOpen} onClose={handleClose}>
                <div style={{ padding: "20px" }}>
                    <h2>Drawer</h2>
                    <p>Adjust controls to customize behavior.</p>
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </Drawer>
        </div>
    );
};

const meta: Meta<typeof Drawer> = {
    title: "UI/Drawer",
    component: Drawer,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        from: {
            control: "inline-radio",
            options: ["top", "right", "bottom", "left"],
        },
        size: {
            control: "text",
            description: "CSS length, e.g. \"200px\", \"50%\", \"calc(100% - 80px)\". Leave empty for full viewport.",
        },
        scaleContent: {
            control: "boolean",
        },
        scaleSelectors: {
            control: "object",
        },
        scaleSelectorsMode: {
            control: "inline-radio",
            options: ["first", "all"],
        },
        onOverlayClick: {
            control: "select",
            options: ["close", null],
        },
        closeOnEsc: {
            control: "boolean",
        },
        isOpen: { table: { disable: true } },
        onClose: { table: { disable: true } },
        children: { table: { disable: true } },
        portal: { table: { disable: true } },
        className: { table: { disable: true } },
    },
    args: {
        from: "bottom",
        closeOnEsc: true,
        onOverlayClick: "close",
        scaleContent: false,
        scaleSelectorsMode: "first",
    },
    render: (args) => <Playground {...args as PlaygroundArgs} />,
};

type Story = StoryObj<typeof Drawer>;

/**
 * Default full-viewport drawer sliding up from the bottom.
 */
const Default: Story = {};

/**
 * ESC key is disabled, drawer can only be closed via its own UI.
 */
const NoEscClose: Story = {
    args: { closeOnEsc: false },
};

/**
 * Slides in from the top, partial height.
 */
const FromTop: Story = {
    args: { from: "top", size: "240px" },
};

/**
 * Slides in from the right side.
 */
const FromRight: Story = {
    args: { from: "right", size: "320px" },
};

/**
 * Slides in from the left side.
 */
const FromLeft: Story = {
    args: { from: "left", size: "260px" },
};

/**
 * Partial-size drawer with the new rounded corner treatment on the visible edge.
 */
const PartialSize: Story = {
    args: { from: "bottom", size: "200px" },
};

/**
 * Drawer that leaves 80px of the page visible at the top while scaling the page
 * content down — the classic stacked "3D" sheet look.
 */
const ScaleContent: Story = {
    args: {
        from: "bottom",
        size: "calc(100% - 80px)",
        scaleContent: true,
    },
};

/**
 * Overlay clicks are passed through to the underlying page (`onOverlayClick={null}`),
 * so users can keep interacting with content next to the drawer.
 */
const PassThroughOverlay: Story = {
    args: {
        from: "bottom",
        size: "200px",
        onOverlayClick: null,
    },
};

/**
 * Drawer with content that demonstrates scrolling behavior.
 */
const WithLongContent: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setIsOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <Drawer {...args as PlaygroundArgs} isOpen={isOpen} onClose={handleClose}>
                    <div style={{ padding: "20px" }}>
                        <h2>Drawer with Long Content</h2>
                        <p>This drawer has enough content to demonstrate scrolling behavior.</p>
                        {Array(20).fill(0).map((_: number, i) => (
                            <Section key={i} vertical={true} horizontal={true}> {/* eslint-disable-line react/no-array-index-key */}
                                <h3>Section {i + 1}</h3>
                                <p>This is content section {i + 1} in the scrollable drawer.</p>
                            </Section>
                        ))}
                    </div>
                </Drawer>
                <Button onClick={handleToggleOpen}>
                    {isOpen ? "Close Drawer" : "Open Drawer with Long Content"}
                </Button>
            </div>
        );
    },
};

const CustomStyledDrawer = styled(Drawer, {
    "&&": {
        background: "linear-gradient(to bottom, #c5f7fa, #63cfe2)",
    },
});

/**
 * A custom styled version of the Drawer component with a gradient background.
 */
const CustomStyled: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setIsOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <CustomStyledDrawer {...args as PlaygroundArgs} isOpen={isOpen} onClose={handleClose}>
                    <div style={{ padding: "20px" }}>
                        <h2>Custom Styled Drawer</h2>
                        <p>This drawer has custom styling with a gradient background</p>
                        <Button onClick={handleClose}>Close Drawer</Button>
                    </div>
                </CustomStyledDrawer>
                <Button onClick={handleToggleOpen}>
                    {isOpen ? "Close Custom Drawer" : "Open Custom Drawer"}
                </Button>
            </div>
        );
    },
};

export {
    Default,
    NoEscClose,
    FromTop,
    FromRight,
    FromLeft,
    PartialSize,
    ScaleContent,
    PassThroughOverlay,
    WithLongContent,
    CustomStyled,
};
export default meta;
