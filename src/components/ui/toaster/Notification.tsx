import React, { useCallback, useState } from "react";

import classnames from "classnames";

import type { Toast } from "./types";

import styles from "./Toaster.module.scss";

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
        <div
            className={classnames(styles.toast, {
                [styles.hide as string]: props.toast.hide || forceHide,
            })}
            key={props.toast.id}
            onTransitionEnd={handleRemove}
            onClick={handleForceHide}
        >
            <span>{props.toast.text}</span>
        </div>
    );
};

export { Notification };
