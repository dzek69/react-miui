import React from "react";

import { Input, ICON, Icon } from "../../../index.js";

import { countries } from "./countries.const.js";

const handleSuggestionMatch = (s: string, picked: boolean) => {
    alert("Suggestion " + (picked ? "picked" : "matched") + " : " + s);
};

const InputDemo: React.FC = () => {
    return (
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
    );
};

export { InputDemo };
