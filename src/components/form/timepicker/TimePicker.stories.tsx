import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Gap } from "../../utils/Gap";
import { TimePicker } from "./TimePicker";

const meta: Meta<typeof TimePicker> = {
    title: "Components/Form/TimePicker",
    component: TimePicker,
    tags: ["autodocs", "form"],
    argTypes: {
        error: { type: "boolean" },
        disabled: { type: "boolean" },
        readOnly: { type: "boolean" },
        withSeconds: { type: "boolean" },
        minuteStep: { type: "number" },
        secondStep: { type: "number" },
    },
};

type Story = StoryObj<typeof TimePicker>;

const Primary: Story = {
    args: {
        label: "Time",
    },
};

const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState("14:30");
        return (
            <Gap>
                <TimePicker label={"Time"} value={value} onChange={setValue} />
                <div>{"Value: " + (value || "(empty)")}</div>
            </Gap>
        );
    },
};

const Uncontrolled: Story = {
    args: {
        label: "Time",
        defaultValue: "08:00",
    },
};

const WithSeconds: Story = {
    args: {
        label: "Time with seconds",
        withSeconds: true,
        defaultValue: "12:34:56",
    },
};

const MinuteStep5: Story = {
    args: {
        label: "Time (5 min step)",
        minuteStep: 5,
    },
};

const Validation: Story = {
    render: () => {
        const [submitted, setSubmitted] = useState<string | null>(null);
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const v = data.get("time");
                    setSubmitted(typeof v === "string" ? v : "");
                }}
            >
                <Gap>
                    <div>
                        {"Type something invalid (e.g. \"9:5\" or \"abc\") and blur — TimePicker"
                            + " reads native validity and auto-applies its error variant."}
                    </div>
                    <TimePicker name={"time"} label={"Time"} required={true} />
                    <button type={"submit"}>{"Submit"}</button>
                    {submitted !== null
                        ? <div>{"Submitted: " + (submitted || "(empty)")}</div>
                        : null}
                </Gap>
            </form>
        );
    },
};

const Mixed: Story = {
    render: () => (
        <Gap>
            <TimePicker label={"Default"} />
            <TimePicker label={"With value"} defaultValue={"09:15"} />
            <TimePicker label={"With seconds"} withSeconds={true} defaultValue={"23:59:30"} />
            <TimePicker label={"Every 15 min"} minuteStep={15} />
            <TimePicker label={"Disabled"} defaultValue={"10:00"} disabled={true} />
            <TimePicker label={"Read only"} defaultValue={"10:00"} readOnly={true} />
            <TimePicker label={"Error"} defaultValue={"10:00"} error={true} />
        </Gap>
    ),
};

export default meta;
export { Primary, Controlled, Uncontrolled, WithSeconds, MinuteStep5, Validation, Mixed };
