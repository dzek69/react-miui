import React, { useState } from "react";
import { Checkbox } from "../../../components/form/Checkbox";

const CheckboxDemo: React.FC = (props) => {
    const [v, setV] = useState(false);
    return (
        <Checkbox name={"a"} onChange={() => { setV(!v); }} checked={v}>I want something something</Checkbox>
    );
};

export { CheckboxDemo };
