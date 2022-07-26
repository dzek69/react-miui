import React from "react";

import { Label, Select } from "../../../index.js";

const SelectDemo: React.FC = () => {
    return (
        <>
            <Label label={"Normal select"}>
                <Select>
                    <option>Cookie</option>
                    <option>Ice cream</option>
                    <option>Sweets</option>
                </Select>
            </Label>
            <Label label={"Disabled"}>
                <Select disabled={true}>
                    <option>Cookie</option>
                    <option>Ice cream</option>
                    <option>Sweets</option>
                </Select>
            </Label>
        </>
    );
};

export { SelectDemo };
