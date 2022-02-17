import React from "react";
import { Input } from "../../../components/form/Input";
import { ICON, Icon } from "../../../components/icons/Icon";

const InputDemo: React.FC = () => {
    return (
        <>
            <Input placeholder={"Capacity"} prefix={<Icon name={ICON.battery} />} suffix={"kWh"} />
            <Input value={"William J. Welter"} />
            <Input prefix={"Text prefix"} value={"Polly W. Wilson"} />
            <Input prefix={"Disabled"} value={"Clayton J. Foster"} disabled={true} />
            <Input prefix={"Read only"} value={"Norma J. Gomez"} readOnly={true} />
        </>
    );
};

export { InputDemo };
