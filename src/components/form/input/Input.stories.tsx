import React, { useCallback } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { countries } from "../../../demo/countries.const";
import { ICON, Icon } from "../../icons/Icon";
import { Button } from "../../ui/button/Button";
import { Gap } from "../../utils/Gap";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Form/Input",
    component: Input,
    tags: ["autodocs", "form"],
    argTypes: {
        error: { type: "boolean" },
        disabled: { type: "boolean" },
        readOnly: { type: "boolean" },
        prefix: { type: "string" },
        suffix: { type: "string" },
        children: { table: { disable: true } },
    },
};

type Story = StoryObj<typeof Input>;

const Primary: Story = {
    args: {
        placeholder: "Capacity",
        prefix: <Icon name={ICON.battery} />,
        suffix: "kWh",
    },
};

const handleSuggestionMatch = (s: string, picked: boolean) => {
    alert("Suggestion " + (picked ? "picked" : "matched") + " : " + s);
};

const Mixed: Story = {
    render: () => (
        <Gap>
            <Input placeholder={"Capacity"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
            <Input value={"William J. Welter"} />
            <Input prefix={"Text prefix"} value={"Polly W. Wilson"} />
            <Input prefix={"Disabled"} value={"Clayton J. Foster"} disabled={true} />
            <Input prefix={"Read only"} value={"Norma J. Gomez"} readOnly={true} />
            <Input prefix={"Error state"} placeholder={"Placeholder"} value={""} error={true} />
            <Input
                placeholder={"With suggestions, try country name"}
                suggestions={countries}
                onSuggestionMatch={handleSuggestionMatch}
            />
        </Gap>
    ),
};

const WithLabel: Story = {
    args: {
        label: "Capacity",
        placeholder: "Enter value in kWh",
        prefix: <Icon name={ICON.battery} />,
        suffix: "kWh",
    },
};

const FloatingLabel: Story = {
    render: () => (
        <Gap>
            <Input label={"Pinned label (default)"} placeholder={"Placeholder visible"} />
            <Input label={"Floating label"} pinnedLabel={false} placeholder={"Visible on focus"} />
            <Input label={"Only label, no placeholder"} pinnedLabel={false} />
            <Input label={"With prefix"} pinnedLabel={false} prefix={<Icon name={ICON.battery} />} />
            <Input
                label={"With prefix and suffix"}
                pinnedLabel={false}
                prefix={<Icon name={ICON.battery} />}
                suffix={"kWh"}
            />
            <Input label={"Prefilled"} pinnedLabel={false} defaultValue={"Some value"} />
            <Input label={"Error state"} pinnedLabel={false} error={true} />
            <Input label={"Disabled"} pinnedLabel={false} disabled={true} />
            <Input label={"Read only"} pinnedLabel={false} readOnly={true} defaultValue={"Read-only value"} />
        </Gap>
    ),
};

const InputRef: Story = {
    render: () => {
        const ref = React.useRef<HTMLInputElement>(null);

        const handleRandomValue = useCallback(() => {
            if (ref.current) {
                ref.current.value = (Math.random() * 100).toFixed(2);
            }
        }, []);

        return (
            <>
                <Input ref={ref} placeholder={"Capacity"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
                <Button onClick={handleRandomValue}>Set random value</Button>
            </>
        );
    },
};

const Validation: Story = {
    render: () => {
        const [submitted, setSubmitted] = React.useState<Record<string, string> | null>(null);
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const result: Record<string, string> = {};
                    data.forEach((v, k) => {
                        if (typeof v === "string") {
                            result[k] = v;
                        }
                    });
                    setSubmitted(result);
                }}
            >
                <Gap>
                    <div>
                        {"Every input reads native validity (pattern / required / type)."
                            + " Type something, blur the field or hit Submit — invalid fields turn red on their own."}
                    </div>
                    <Input name={"email"} label={"Email"} type={"email"} required={true} />
                    <Input name={"required"} label={"Required text"} required={true} />
                    <Input
                        name={"digits"}
                        label={"4 digits only"}
                        pattern={"\\d{4}"}
                        placeholder={"1234"}
                    />
                    <Input
                        name={"short"}
                        label={"Min 5 characters"}
                        minLength={5}
                        defaultValue={"abc"}
                    />
                    <Button type={"submit"}>{"Submit"}</Button>
                    {submitted
                        ? <div>{"Submitted: " + JSON.stringify(submitted)}</div>
                        : null}
                </Gap>
            </form>
        );
    },
};

export {
    Primary, Mixed, WithLabel, FloatingLabel, InputRef, Validation,
};

export default meta;
