import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import styles from "./Toggle.module.scss";
import classnames from "classnames";

interface Props {
    onChange: (newValue: boolean) => void;
    disabled?: boolean;
    value: boolean | null;
}

const Toggle: React.FC<Props> = (props) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (props.value == null) {
            return;
        }
        props.onChange(e.target.checked);
    }, [props.onChange, props.value]);

    const cls = classnames(styles.container, {
        [styles.disabled]: props.disabled,
    });

    return (
        <label className={cls}>
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
