import React from "react";
import { Input } from "../../../components/form/Input";
import { ICON, Icon } from "../../../components/icons/Icon";

const InputDemo: React.FC = () => {
    return (
        <>
            <Input placeholder={"Capacity"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
        </>
    );
};

export { InputDemo };
