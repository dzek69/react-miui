import React from "react";
import { Label } from "../../../components/form/Label";
import { Input } from "../../../components/form/Input";
import { ICON, Icon } from "../../../components/icons/Icon";

const LabelDemo = () => {
    return (
        <Label label={"Capacity"}>
            <Input placeholder={"ie: 500"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
        </Label>
    );
};

export { LabelDemo };
