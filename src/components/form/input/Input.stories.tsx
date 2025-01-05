import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Icon, ICON } from "../../icons/Icon";
import { countries } from "../../../demo/components/form/countries.const";

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
        <>
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
        </>
    ),
};

export {
    Primary, Mixed,
};

export default meta;
