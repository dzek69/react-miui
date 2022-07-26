import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import classnames from "classnames";

import styles from "./Toggle.module.scss";

interface Props {
    onChange: (newValue: boolean) => void;
    onContextMenu?: React.MouseEventHandler;
    undeterminedClickValue?: boolean;
    disabled?: boolean;
    value: boolean | null;
}

const Toggle: React.FC<Props> = (props) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (props.value == null) {
            if (typeof props.undeterminedClickValue === "boolean") {
                props.onChange(props.undeterminedClickValue);
            }
            return;
        }
        props.onChange(e.target.checked);
    }, [props.onChange, props.value]);

    const cls = classnames(styles.container, {
        [styles.disabled]: props.disabled,
    });

    return (
        <label className={cls} onContextMenu={props.onContextMenu}>
            <input
                type={"checkbox"}
                checked={Boolean(props.value)}
                data-undetermined={props.value == null}
                readOnly={props.value == null}
                disabled={props.disabled}
                onChange={handleChange}
            />
            <div className={styles.toggle} />
        </label>
    );
};

export { Toggle };
