import React, { useState } from "react";
import { DirectionPad } from "../../../..";

const DirectionPadDemo: React.FC = (props) => {
    const [lastClick, setLastClick] = useState("<none>");

    return (
        <>
            <DirectionPad onLeftPress={() => { setLastClick("left"); }} onRightPress={() => { setLastClick("right"); }}
                onUpPress={() => { setLastClick("up"); }}
                onDownPress={() => { setLastClick("down"); }}
                onMiddlePress={() => { setLastClick("res"); }}
                middleLabel={"RES"}
            />
            <div>
                Last clicked button: {lastClick}
            </div>
        </>
    );
};

export { DirectionPadDemo };
