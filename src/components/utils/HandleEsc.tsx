import { useEffect } from "react";

import type React from "react";

import { useKeyPress } from "../../utils";

interface Props {
    onPress: () => void;
}

const HandleEsc: React.FC<Props> = ({ onPress }) => {
    const pressed = useKeyPress("Escape");

    useEffect(() => {
        if (pressed) {
            onPress();
        }
    }, [pressed, onPress]);

    return null;
};

export { HandleEsc };
