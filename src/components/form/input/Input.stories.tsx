import React, { useCallback } from "react";

import type { StoryObj, Meta } from "@storybook/react-vite";

import { Icon, ICON } from "../../icons/Icon";
import { countries } from "../../../demo/countries.const";
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
            <Input
                placeholder={"With suggestions, try country name"}
                suggestions={countries}
                onSuggestionMatch={handleSuggestionMatch}
            />
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

export {
    Primary, Mixed, InputRef,
};

export default meta;
