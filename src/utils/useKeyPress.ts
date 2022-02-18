import { useEffect, useState } from "react";

const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = ({ key }: KeyboardEvent): void => {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        };

        const handleKeyUp = ({ key }: KeyboardEvent): void => {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [targetKey]);

    return keyPressed;
};

export {
    useKeyPress,
};
