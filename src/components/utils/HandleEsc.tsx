import { useEffect } from "react";
import type React from "react";

import { useKeyPress } from "../../utils/index";

interface Props {
    onPress: () => void;
}

const HandleEsc: React.FC<Props> = (props) => {
    const pressed = useKeyPress("Escape");

    useEffect(() => {
        if (pressed) {
            props.onPress();
        }
    }, [pressed]);

    return null;
};

export { HandleEsc };
