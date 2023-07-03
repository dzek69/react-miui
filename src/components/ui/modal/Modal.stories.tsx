import React, { useCallback, useState } from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Button } from "../button/Button.js";
import { Label } from "../../form/Label.js";
import { Input } from "../../form/input/Input.js";
import { Checkbox } from "../../form/Checkbox.js";
import { List } from "../../layout/list/List.js";

import { Modal } from "./Modal.js";
import { ModalButtons } from "./ModalButtons.js";
import { RemovePadding } from "./Modal.styled";

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
        // eslint-disable-next-line @typescript-eslint/no-shadow
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
        // eslint-disable-next-line @typescript-eslint/no-shadow
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
                    <RemovePadding>
                        <Label>
                            <Input placeholder={"New station"} />
                        </Label>
                    </RemovePadding>
                    <Label>
                        <Input placeholder={"New station"} />
                    </Label>
                    <RemovePadding>
                        <Label>
                            <Input placeholder={"New station"} />
                        </Label>
                    </RemovePadding>
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
        // eslint-disable-next-line @typescript-eslint/no-shadow
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
                    <RemovePadding>
                        <List inset={true}>
                            <List.Item selected={false} onClick={handleClose}>First item</List.Item>
                            <List.Item selected={true} onClick={handleClose}>Second item</List.Item>
                            <List.Item selected={false} onClick={handleClose}>Third item</List.Item>
                            <List.Item selected={false} onClick={handleClose}>Last option</List.Item>
                        </List>
                    </RemovePadding>
                </Modal>
            </div>
        );
    },
};

export {
    Primary,
    WithRemovedPaddingSections,
    WithList,
};

export default meta;
