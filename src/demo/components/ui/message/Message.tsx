import React from "react";

import { Message } from "../../../../index.js";

interface Props {}

const MessageDemo: React.FC<Props> = () => {
    return (
        <>
            <Message type={"warning"}>Files will be removed after 30 days.</Message>
            <br /><br />
            <Message type={"error"}>Files will be removed after 30 days.</Message>
            <br /><br />
            <Message type={"info"}>
                Files will be removed after 30 days. Files will be removed after 30 days.
            </Message>
            <br /><br />
            <Message type={"warning"} variant={"box"}>Files will be removed after 30 days.</Message>
            <Message type={"error"} variant={"box"}>Files will be removed after 30 days.</Message>
            <Message type={"info"} variant={"box"}>
                Files will be removed after 30 days. Files will be removed after 30 days.
            </Message>
        </>
    );
};

export { MessageDemo };
