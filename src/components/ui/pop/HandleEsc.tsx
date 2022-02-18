import type React from "react";
import { useKeyPress } from "react-use";
import { useEffect } from "react";

interface Props {
    onPress: () => void;
}

const HandleEsc: React.FC<Props> = (props) => {
    const [pressed] = useKeyPress("Escape");

    useEffect(() => {
        if (pressed) {
            props.onPress();
        }
    }, [pressed]);

    return null;
};

export { HandleEsc };
