import React, { useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../components/ui/button/Button";
import { Modal } from "../components/ui/modal/Modal";
import { ModalButtons } from "../components/ui/modal/ModalButtons";
import { toast } from "../components/ui/toaster/Toaster";

const docs = [
    "Real-world setup: the storybook preview wraps every story in a stacking context",
    "(`transform: translateZ(0)` above `ToasterProvider`), which mirrors what real apps",
    "tend to do unintentionally.",
    "",
    "**Without the fix:** sonner's huge z-index is trapped inside that stacking context.",
    "The modal portals to `document.body` and renders on top — the toast is hidden.",
    "",
    "**With the fix:** `ToasterProvider` portals `<SonnerToaster>` to `document.body`,",
    "escaping the stacking context. The toast renders above the modal.",
].join("\n");

const meta: Meta = {
    title: "Bugfixes/Toasts from a Modal",
    tags: ["bugfixes"],
    parameters: { docs: { description: { component: docs } } },
};

type Story = StoryObj;

const ToastFromModal: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleOpen = useCallback(() => { setOpen(true); }, []);
        const handleClose = useCallback(() => { setOpen(false); }, []);
        const handleToast = useCallback(() => {
            toast.success("I should appear above the modal");
        }, []);

        return (
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal onClose={handleClose} isOpen={open} title={"Repro"} position={"bottom"} full={true}>
                    <p>Click the button — the toast must appear above this modal.</p>
                    <ModalButtons>
                        <ModalButtons.Button onClick={handleClose}>Cancel</ModalButtons.Button>
                        <ModalButtons.Button variant={"main"} onClick={handleToast}>
                            Show toast
                        </ModalButtons.Button>
                    </ModalButtons>
                </Modal>
            </div>
        );
    },
};

export { ToastFromModal };

export default meta;
