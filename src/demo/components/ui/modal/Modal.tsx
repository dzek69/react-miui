import React, { useCallback, useState } from "react";

import { Modal, Button, Input, Checkbox, Label, ModalButtons, List } from "../../../../index.js";

const Item = List.Item;

interface Props {}

const handleNoop = () => undefined;

const ModalDemo: React.FC<Props> = (props) => {
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
            <Modal onClose={handleClose} isOpen={open} title={"95.5 MHz"} variant={["bottom", "full"]}>
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
};

const ModalCenteredDemo: React.FC<Props> = (props) => {
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
            <Modal onClose={handleClose} isOpen={open} title={"Format C:?"}>
                <ModalButtons>
                    <ModalButtons.Button onClick={handleClose}>
                        Nope
                    </ModalButtons.Button>
                    <ModalButtons.Button variant={"main"} onClick={handleClose}>
                        Yes, please
                    </ModalButtons.Button>
                </ModalButtons>
            </Modal>
        </div>
    );
};

const ModalOptionsDemo: React.FC<Props> = (props) => {
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
            <Modal onClose={handleClose} isOpen={open} title={"Format C:?"}>
                <Modal.NegateMargin>
                    <List inset={true}>
                        <Item selected={false} onClick={handleClose}>First item</Item>
                        <Item selected={true} onClick={handleClose}>Second item</Item>
                        <Item selected={false} onClick={handleClose}>Third item</Item>
                        <Item selected={false} onClick={handleClose}>Last option</Item>
                    </List>
                </Modal.NegateMargin>
            </Modal>
        </div>
    );
};

export { ModalDemo, ModalCenteredDemo, ModalOptionsDemo };
