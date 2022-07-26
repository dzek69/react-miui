import React from "react";

import { Label, Input, ICON, Icon } from "../../../index.js";

const LabelDemo = () => {
    return (
        <Label label={"Capacity"}>
            <Input placeholder={"ie: 500"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
        </Label>
    );
};

export { LabelDemo };
