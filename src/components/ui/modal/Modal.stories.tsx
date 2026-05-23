import React, { useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../../form/Checkbox";
import { Input } from "../../form/input/Input";
import { Label } from "../../form/Label";
import { List } from "../../layout/list/List";
import { Button } from "../button/Button";
import { Modal } from "./Modal";
import { ModalButtons } from "./ModalButtons";

const meta: Meta = {
    title: "Components/UI/Modal",
    component: Modal,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof Modal>;

const handleNoop = () => undefined;

const Primary: Story = {
    args: {},
    render: () => {
        const [open, setIsOpen] = useState(false);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        const handleOpen = useCallback(() => {
            setIsOpen(true);
        }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal onClose={handleClose} isOpen={open} title={"95.5 MHz"} position={"bottom"} full={true}>
                    <Label>
                        <Input placeholder={"New station"} />
                    </Label>
                    <Label>
                        <Checkbox name={""} onChange={handleNoop} checked={true}>
                            Remember me
                        </Checkbox>
                    </Label>
                    <ModalButtons>
                        <ModalButtons.Button onClick={handleClose}>
                            Cancel
                        </ModalButtons.Button>
                        <ModalButtons.Button variant={"main"} onClick={handleClose}>
                            Ok
                        </ModalButtons.Button>
                    </ModalButtons>
                </Modal>
            </div>
        );
    },
};

const WithRemovedPaddingSections: Story = {
    args: {},
    render: () => {
        const [open, setIsOpen] = useState(false);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        const handleOpen = useCallback(() => {
            setIsOpen(true);
        }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal onClose={handleClose} isOpen={open} position={"bottom"} full={true}>
                    <Modal.RemovePadding>
                        <Label>
                            <Input placeholder={"New station"} />
                        </Label>
                    </Modal.RemovePadding>
                    <Label>
                        <Input placeholder={"New station"} />
                    </Label>
                    <Modal.RemovePadding>
                        <Label>
                            <Input placeholder={"New station"} />
                        </Label>
                    </Modal.RemovePadding>
                </Modal>
            </div>
        );
    },
};

/**
 * Just a demo how to render a pick-mode list in a modal.
 */
const WithList: Story = {
    args: {},
    render: () => {
        const [open, setIsOpen] = useState(false);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        const handleOpen = useCallback(() => {
            setIsOpen(true);
        }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal onClose={handleClose} isOpen={open} position={"bottom"} full={true}>
                    <Modal.RemovePadding>
                        <List inset={true}>
                            <List.Item selected={false} onClick={handleClose}>First item</List.Item>
                            <List.Item selected={true} onClick={handleClose}>Second item</List.Item>
                            <List.Item selected={false} onClick={handleClose}>Third item</List.Item>
                            <List.Item selected={false} onClick={handleClose}>Last option</List.Item>
                        </List>
                    </Modal.RemovePadding>
                </Modal>
            </div>
        );
    },
};

/**
 * Demonstrates a known issue: when the modal content is taller than the viewport,
 * it gets clipped at the top and bottom because `ContainerStyled` has
 * `maxHeight: 100%` but no `overflow: auto`. There is no scrolling inside the modal.
 */
const WithLongContent: Story = {
    args: {},
    render: () => {
        const [open, setIsOpen] = useState(false);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        const handleOpen = useCallback(() => {
            setIsOpen(true);
        }, []);

        const lines = Array.from({ length: 60 }, (_, i) => i + 1);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal onClose={handleClose} isOpen={open} title={"Long content"}>
                    {lines.map((n) => (
                        <p key={n}>
                            Line {n} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </Modal>
            </div>
        );
    },
};

export {
    Primary,
    WithRemovedPaddingSections,
    WithList,
    WithLongContent,
};

export default meta;
