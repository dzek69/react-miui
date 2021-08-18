import React, { useCallback, useState } from "react";

import { Checkbox } from "../../../index.js";

const CheckboxDemo: React.FC = (props) => {
    const [v, setV] = useState(false);

    const handleToggle = useCallback(() => { setV((prevV) => !prevV); }, []);

    return (
        <Checkbox name={"a"} onChange={handleToggle} checked={v}>I want something something</Checkbox>
    );
};

export { CheckboxDemo };
