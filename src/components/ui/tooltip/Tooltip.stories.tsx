/* eslint-disable max-lines */
import React, { useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gap } from "../../utils/Gap";
import { Button } from "../button/Button";
import { Drawer } from "../drawer/Drawer";
import { Modal } from "../modal/Modal";
import { ModalButtons } from "../modal/ModalButtons";
import { Tooltip, TooltipProvider } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Components/UI/Tooltip",
    component: Tooltip,
    tags: ["autodocs", "ui"],
    argTypes: {
        side: {
            control: "inline-radio",
            options: ["top", "right", "bottom", "left"],
        },
        align: {
            control: "inline-radio",
            options: ["start", "center", "end"],
        },
        sideOffset: { control: { type: "number", min: 0, max: 40 } },
        alignOffset: { control: { type: "number", min: -40, max: 40 } },
        delayDuration: { control: { type: "number", min: 0, max: 2000, step: 100 } },
        avoidCollisions: { type: "boolean" },
        arrow: { type: "boolean" },
        content: { control: "text" },
        children: { table: { disable: true } },
        open: { table: { disable: true } },
        defaultOpen: { table: { disable: true } },
        onOpenChange: { table: { disable: true } },
    },
};

type Story = StoryObj<typeof Tooltip>;

/**
 * Playground. Tweak `side`, `align`, `sideOffset`, `delayDuration`, `arrow`,
 * and `avoidCollisions` from the controls panel.
 */
const Primary: Story = {
    args: {
        content: "Save your changes",
        side: "top",
        align: "center",
        sideOffset: 6,
        alignOffset: 0,
        delayDuration: 500,
        avoidCollisions: true,
        arrow: true,
    },
    render: (args) => (
        <div style={{ padding: 80, display: "flex", justifyContent: "center" }}>
            <Tooltip {...args}>
                <Button>Hover me</Button>
            </Tooltip>
        </div>
    ),
};

/**
 * All four sides shown at once.
 */
const AllSides: Story = {
    render: () => (
        <div
            style={{
                padding: 120,
                display: "grid",
                gridTemplateColumns: "repeat(2, max-content)",
                gap: 40,
                justifyContent: "center",
            }}
        >
            <Tooltip content={"Top"} side={"top"} arrow={true}>
                <Button>Top</Button>
            </Tooltip>
            <Tooltip content={"Right"} side={"right"} arrow={true}>
                <Button>Right</Button>
            </Tooltip>
            <Tooltip content={"Bottom"} side={"bottom"} arrow={true}>
                <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content={"Left"} side={"left"} arrow={true}>
                <Button>Left</Button>
            </Tooltip>
        </div>
    ),
};

/**
 * `TooltipProvider` enables group-delay behavior: once any tooltip is open, the next ones
 * appear without waiting for `delayDuration` (until `skipDelayDuration` elapses with all
 * tooltips closed). Hover one button slowly, then sweep across the rest — they pop instantly.
 */
const GroupDelay: Story = {
    render: () => (
        <TooltipProvider delayDuration={500} skipDelayDuration={400}>
            <div style={{ padding: 80, display: "flex", gap: 12, justifyContent: "center" }}>
                <Tooltip content={"First"}>
                    <Button>One</Button>
                </Tooltip>
                <Tooltip content={"Second"}>
                    <Button>Two</Button>
                </Tooltip>
                <Tooltip content={"Third"}>
                    <Button>Three</Button>
                </Tooltip>
                <Tooltip content={"Fourth"}>
                    <Button>Four</Button>
                </Tooltip>
            </div>
        </TooltipProvider>
    ),
};

/**
 * Triggers placed near viewport edges. With `avoidCollisions` (default) the tooltip
 * flips to fit; toggle the arg in the playground story to see the difference.
 */
const NearViewportEdge: Story = {
    render: () => (
        <div style={{ height: "90vh", position: "relative" }}>
            <div style={{ position: "absolute", top: 4, left: 4 }}>
                <Tooltip content={"I would overflow up-left, so I flip"} side={"top"} arrow={true}>
                    <Button>Top-left corner</Button>
                </Tooltip>
            </div>
            <div style={{ position: "absolute", top: 4, right: 4 }}>
                <Tooltip content={"I would overflow up-right, so I flip"} side={"top"} arrow={true}>
                    <Button>Top-right corner</Button>
                </Tooltip>
            </div>
            <div style={{ position: "absolute", bottom: 4, left: 4 }}>
                <Tooltip content={"I would overflow down-left"} side={"bottom"} arrow={true}>
                    <Button>Bottom-left corner</Button>
                </Tooltip>
            </div>
            <div style={{ position: "absolute", bottom: 4, right: 4 }}>
                <Tooltip content={"I would overflow down-right"} side={"bottom"} arrow={true}>
                    <Button>Bottom-right corner</Button>
                </Tooltip>
            </div>
        </div>
    ),
};

/**
 * Long content wraps to the configured `maxWidth`.
 */
const LongContent: Story = {
    render: () => (
        <div style={{ padding: 80, display: "flex", justifyContent: "center" }}>
            <Tooltip
                content={"This tooltip has a longer description that wraps onto multiple lines once it "
                    + "exceeds the maximum content width set in the styles."}
                side={"bottom"}
            >
                <Button>Long description</Button>
            </Tooltip>
        </div>
    ),
};

/**
 * Edge case: tooltip rendered from inside a `Modal`. Because the content is portalled to
 * `document.body`, it escapes the modal's stacking context and renders above it.
 */
const InModal: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleOpen = useCallback(() => { setOpen(true); }, []);
        const handleClose = useCallback(() => { setOpen(false); }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal isOpen={open} onClose={handleClose} title={"Tooltip in a modal"}>
                    <Gap>
                        <div>Hover the buttons below — the tooltip should appear above the modal.</div>
                        <div style={{ display: "flex", gap: 12 }}>
                            <Tooltip content={"Above modal, side=top"} side={"top"} arrow={true}>
                                <Button>Top</Button>
                            </Tooltip>
                            <Tooltip content={"Above modal, side=right"} side={"right"} arrow={true}>
                                <Button>Right</Button>
                            </Tooltip>
                            <Tooltip content={"Above modal, side=bottom"} side={"bottom"} arrow={true}>
                                <Button>Bottom</Button>
                            </Tooltip>
                        </div>
                    </Gap>
                    <ModalButtons>
                        <ModalButtons.Button variant={"main"} onClick={handleClose}>Close</ModalButtons.Button>
                    </ModalButtons>
                </Modal>
            </div>
        );
    },
};

/**
 * Edge case: tooltip rendered from inside a `Drawer`. Same portal behavior — content
 * floats above the drawer regardless of the drawer's stacking context.
 */
const InDrawer: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleOpen = useCallback(() => { setOpen(true); }, []);
        const handleClose = useCallback(() => { setOpen(false); }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open drawer</Button>
                <Drawer isOpen={open} onClose={handleClose}>
                    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                        <div>Tooltips work from inside a drawer.</div>
                        <Tooltip content={"Hello from inside the drawer"} side={"bottom"} arrow={true}>
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Button onClick={handleClose}>Close drawer</Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};

/**
 * Controlled tooltip — open state is driven by parent. Useful for tutorials,
 * onboarding tours, or pinning a tooltip open while a user interacts elsewhere.
 */
const Controlled: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleToggle = useCallback(() => { setOpen(p => !p); }, []);

        return (
            <div style={{ padding: 80, display: "flex", gap: 16, justifyContent: "center" }}>
                <Button onClick={handleToggle}>{open ? "Hide" : "Show"} tooltip</Button>
                <Tooltip content={"I'm controlled"} open={open} side={"right"}>
                    <Button>Target</Button>
                </Tooltip>
            </div>
        );
    },
};

/**
 * Tooltip wrapping a non-button trigger. Any element that can receive a ref works
 * — here, an inline word with a dotted underline.
 */
const InlineTrigger: Story = {
    render: () => (
        <div style={{ padding: 80, fontSize: 18, lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
            This sentence contains a{" "}
            <Tooltip content={"A short, contextual explanation."}>
                <span style={{ borderBottom: "1px dotted currentColor", cursor: "help" }}>
                    glossed term
                </span>
            </Tooltip>
            {" "}that reveals more on hover or focus.
        </div>
    ),
};

export default meta;
export {
    Primary,
    AllSides,
    GroupDelay,
    NearViewportEdge,
    LongContent,
    InModal,
    InDrawer,
    Controlled,
    InlineTrigger,
};
