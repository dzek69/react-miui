import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { ModalButtons } from "./ModalButtons.js";
import { Modal } from "./Modal.js";

const meta: Meta = {
    title: "Components/UI/ModalButtons",
    component: ModalButtons,
    tags: ["autodocs", "ui"],
};

type Story = StoryObj<typeof ModalButtons>;

const Primary: Story = {
    args: {},
    render: () => (
        <Modal onClose={() => null} isOpen={true} title={"System message"}>
            <div>
                Check out these pretty buttons. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                consectetur, diam eget aliquam tincidunt, diam nisl ultrices velit, nec aliquet nunc diam eget.
            </div>
            <ModalButtons>
                <ModalButtons.Button onClick={() => null}>
                    Cancel
                </ModalButtons.Button>
                <ModalButtons.Button variant={"main"} onClick={() => null}>
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
