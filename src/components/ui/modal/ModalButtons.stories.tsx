import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Modal } from "./Modal";
import { ModalButtons } from "./ModalButtons";

const meta: Meta = {
    title: "Components/UI/ModalButtons",
    component: ModalButtons,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof ModalButtons>;

const Primary: Story = {
    args: {},
    render: () => (
        <Modal onClose={() => {}} isOpen={true} title={"System message"}>
            <div>
                Check out these pretty buttons. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur, diam eget aliquam tincidunt, diam nisl ultrices velit, nec aliquet nunc diam eget.
            </div>
            <ModalButtons>
                <ModalButtons.Button onClick={() => {}}>
                    Cancel
                </ModalButtons.Button>
                <ModalButtons.Button variant={"main"} onClick={() => {}}>
                    Ok
                </ModalButtons.Button>
            </ModalButtons>
        </Modal>
    ),
};

export {
    Primary,
};

export default meta;
