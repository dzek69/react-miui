import React, { useState, useCallback } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { styled } from "../../../theme";
import { Section } from "../../layout/section/Section";
import { Button } from "../button/Button";

import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
    title: "UI/Drawer",
    component: Drawer,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

type Story = StoryObj<typeof Drawer>;

/**
 * Basic implementation of the Drawer component with a toggle button.
 */
const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <Drawer isOpen={open} onClose={handleClose}>
                    <div style={{ padding: "20px" }}>
                        <h2>Drawer Content</h2>
                        <p>This is the content inside the drawer.</p>
                        <p>Press ESC to close.</p>
                    </div>
                </Drawer>
                <Button onClick={handleToggleOpen}>
                    {open ? "Close Drawer" : "Open Drawer"}
                </Button>
            </div>
        );
    },
};

/**
 * Drawer with custom close behavior where ESC key doesn't close the drawer.
 */
const NoEscClose: Story = {
    render: () => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [open, setOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <Drawer isOpen={open} onClose={handleClose} closeOnEsc={false}>
                    <div style={{ padding: "20px" }}>
                        <h2>Drawer Without ESC Close</h2>
                        <p>This drawer will not close when you press ESC.</p>
                        <p>Use the button below to close it.</p>
                        <Button onClick={handleClose}>Close Drawer</Button>
                    </div>
                </Drawer>
                <Button onClick={handleToggleOpen}>
                    {open ? "Close Drawer" : "Open Drawer (No ESC Close)"}
                </Button>
            </div>
        );
    },
};

/**
 * Drawer with content that demonstrates scrolling behavior.
 */
const WithLongContent: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <Drawer isOpen={open} onClose={handleClose}>
                    <div style={{ padding: "20px" }}>
                        <h2>Drawer with Long Content</h2>
                        <p>This drawer has enough content to demonstrate scrolling behavior.</p>
                        {Array(20).fill(0).map((_, i) => (
                            <Section key={i} vertical={true} horizontal={true}>
                                <h3>Section {i + 1}</h3>
                                <p>This is content section {i + 1} in the scrollable drawer.</p>
                            </Section>
                        ))}
                    </div>
                </Drawer>
                <Button onClick={handleToggleOpen}>
                    {open ? "Close Drawer" : "Open Drawer with Long Content"}
                </Button>
            </div>
        );
    },
};

/**
 * Custom styled Drawer with a different background color and border radius.
 */
const CustomStyledDrawer = styled(Drawer, {
    "&&": {
        background: "linear-gradient(to bottom, #c5f7fa, #63cfe2)",
    },
});

/**
 * A custom styled version of the Drawer component with a gradient background and rounded top corners.
 */
const CustomStyled: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleToggleOpen = useCallback(() => {
            setOpen(prev => !prev);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        return (
            <div style={{ padding: "20px" }}>
                <CustomStyledDrawer isOpen={open} onClose={handleClose}>
                    <div style={{ padding: "20px" }}>
                        <h2>Custom Styled Drawer</h2>
                        <p>This drawer has custom styling with a gradient background</p>
                        <Button onClick={handleClose}>Close Drawer</Button>
                    </div>
                </CustomStyledDrawer>
                <Button onClick={handleToggleOpen}>
                    {open ? "Close Custom Drawer" : "Open Custom Drawer"}
                </Button>
            </div>
        );
    },
};

export { Default, NoEscClose, WithLongContent, CustomStyled };
export default meta;
