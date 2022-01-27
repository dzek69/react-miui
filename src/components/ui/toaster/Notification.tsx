import React, { useCallback } from "react";
import classnames from "classnames";

import type { Toast } from "./types";
import styles from "./Toaster.module.scss";

interface Props {
    toast: Toast;
    onRemove: (id: Toast["id"]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const Notification: React.FC<Props> = (props) => {
    const handleRemove = useCallback(() => {
        props.onRemove(props.toast.id);
    }, [props.toast.id]);

    return (
        <div
            className={classnames(styles.toast, {
                [styles.hide]: props.toast.hide,
            })}
            key={props.toast.id}
            onTransitionEnd={handleRemove}
        >
            <span>{props.toast.text}</span>
        </div>
    );
};

export { Notification };
