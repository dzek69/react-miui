import React, { useCallback, useState } from "react";

import { DirectionPad } from "../../../../index";

const DirectionPadDemo: React.FC = (props) => {
    const [lastClick, setLastClick] = useState("<none>");

    const handleLeftClick = useCallback(() => {
        setLastClick("left");
    }, []);
    const handleRightClick = useCallback(() => {
        setLastClick("right");
    }, []);
    const handleUpClick = useCallback(() => {
        setLastClick("up");
    }, []);
    const handleDownClick = useCallback(() => {
        setLastClick("down");
    }, []);
    const handleMiddleClick = useCallback(() => {
        setLastClick("res");
    }, []);

    return (
        <>
            <DirectionPad
                onLeftPress={handleLeftClick}
                onRightPress={handleRightClick}
                onUpPress={handleUpClick}
                onDownPress={handleDownClick}
                onMiddlePress={handleMiddleClick}
                middleLabel={"RES"}
            />
            <div>
                Last clicked button: {lastClick}
            </div>
        </>
    );
};

export { DirectionPadDemo };
