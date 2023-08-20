import React, { useCallback, useState } from "react";

import { Checkbox } from "../../../index";

const handleChangeNoop = () => undefined;

const CheckboxDemo: React.FC = (props) => {
    const [v, setV] = useState(false);

    const handleToggle = useCallback(() => { setV((prevV) => !prevV); }, []);

    return (
        <>
            <Checkbox name={"a"} onChange={handleToggle} checked={!v}>I want something something</Checkbox>
            <hr />
            <Checkbox name={"a"} onChange={handleChangeNoop} checked={true} disabled={true}>
                Something else - disabled
            </Checkbox>
            <Checkbox name={"a"} onChange={handleChangeNoop} checked={false} disabled={true}>
                Something else - disabled
            </Checkbox>
            <hr />
            <Checkbox name={"a"} onChange={handleChangeNoop} checked={true} readOnly={true}>
                Last option - readonly
            </Checkbox>
            <Checkbox name={"a"} onChange={handleChangeNoop} checked={false} readOnly={true}>
                Last option - readonly
            </Checkbox>
        </>
    );
};

export { CheckboxDemo };
