import React, { useCallback } from "react";

import { Button } from "../../../../index.js";

const ButtonDemo = () => {
    const handleClick = useCallback(() => {
        alert("Clicked");
    }, []);

    return (
        <div>
            <Button onClick={handleClick}>Basic button</Button>
            <br />
            <Button disabled={true} onClick={handleClick}>Disabled button</Button>
            <br />
            <Button variant={"inline"} onClick={handleClick}>Inline button</Button>
            <br />
            <Button variant={"outline"} onClick={handleClick}>Outline button</Button>
        </div>
    );
};

export { ButtonDemo };
