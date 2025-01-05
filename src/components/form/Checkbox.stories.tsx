import React, { useCallback, useState } from "react";

import { omit } from "@ezez/utils";

import type { StoryObj, Meta } from "@storybook/react";

import { Div } from "../native";
import { styled } from "../../theme";

import { Checkbox } from "./Checkbox";

const meta: Meta = {
    title: "Components/Form/Checkbox",
    component: Checkbox,
    tags: ["autodocs", "form"],
    argTypes: {
        color: {
            control: {
                type: "color",
            },
        },
        defaultChecked: {
            control: {
                type: "boolean",
            },
        },
        checked: {
            control: {
                type: "boolean",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        readOnly: {
            control: {
                type: "boolean",
            },
        },
        error: {
            control: {
                type: "boolean",
            },
        },
        onChange: {
            action: "onChange",
        },
    },
    args: {
        children: "Check me",
    },
};

type Story = StoryObj<typeof Checkbox>;

const Primary: Story = {};

const Green = styled(Checkbox, {
    "--color": "$colors$green1",
});

const AllAtOnce: Story = {
    render: (args) => {
        const [v, setV] = useState(false);
        const handleToggle = useCallback(() => { setV((prevV) => !prevV); }, []);

        return (
            <>
                <Div>Red (deprecated prop):</Div>
                <Checkbox {...args} color={"red"} />
                <Div>Blue (css):</Div>
                <Checkbox {...args} css={{ "--color": "$blue5" }} />
                <Div>Green (composed):</Div>
                <Green {...omit(args, ["ref"])} />
                <Div>Always controlled: (checked: {String(v)})</Div>
                <Checkbox {...args} checked={v} onChange={handleToggle} />
                <Div>Always disabled:</Div>
                <Checkbox {...args} disabled={true} />
                <Div>Always read-only:</Div>
                <Checkbox {...args} readOnly={true} />
            </>
        );
    },
    args: {
        defaultChecked: true,
    },
};

export {
    Primary,
    AllAtOnce,
};

export default meta;
