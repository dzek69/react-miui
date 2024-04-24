import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Div } from "../../native";
import { Button } from "../button/Button";

import { useToaster } from "./Toaster";

const meta: Meta = {
    title: "Components/UI/Toaster",
    tags: ["autodocs", "ui"],
    argTypes: {
        text: {
            control: {
                type: "text",
            },
        },
        time: {
            control: {
                type: "number",
                step: 100,
            },
        },
    },
};

type Story = StoryObj;

const Primary: Story = {
    args: {
        text: "",
        time: 5000,
    },
    render: (args) => {
        const toast = useToaster();
        const { text, time } = args as { text: string; time: number };

        const handleClick = () => {
            toast(text || "Lorem ipsum dolor sit amet", time);
        };

        return (
            <Div css={{ height: 400 }}>
                {/* <Input placeholder={"Fill in text to display"} onChange={e => { setText(e.target.value); }} /> */}
                {/* <Input */}
                {/*    placeholder={"Time to display in ms"} */}
                {/*    step={100} */}
                {/*    type={"number"} */}
                {/*    onChange={e => { setTime(e.target.value); }} */}
                {/*    value={time} */}
                {/*/ > */}
                <Button onClick={handleClick}>Show toast</Button>
            </Div>
        );
    },
};

export {
    Primary,
};

export default meta;
