import React from "react";
import { Button } from "../../../../index.js";

const ButtonDemo = () => {
    return (
        <div>
            <Button>Basic button</Button>
            <br />
            <Button disabled={true}>Disabled button</Button>
            <br />
            <Button variant={"inline"}>Inline button</Button>
            <br />
            <Button variant={"outline"}>Outline button</Button>
        </div>
    );
};

export { ButtonDemo };
