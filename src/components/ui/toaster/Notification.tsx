import React, { useCallback, useState } from "react";

import type { Toast } from "./types";

import { StyledToast } from "./Toaster.styled";

interface Props {
    toast: Toast;
    onRemove: (id: Toast["id"]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const Notification: React.FC<Props> = (props) => {
    const [forceHide, setForceHide] = useState(false);
    const handleRemove = useCallback(() => {
        props.onRemove(props.toast.id);
    }, [props.toast.id]);

    const handleForceHide = useCallback(() => {
        setForceHide(true);
    }, []);

    return (
        <StyledToast
            hide={props.toast.hide || forceHide}
            key={props.toast.id}
            onTransitionEnd={handleRemove}
            onClick={handleForceHide}
        >
            <span>{props.toast.text}</span>
        </StyledToast>
    );
};

export { Notification };
