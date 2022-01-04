import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import styles from "./Toggle.module.scss";

interface Props {
    onChange: (newState: boolean) => void;
    state: boolean | null;
}

const Toggle: React.FC<Props> = (props) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (props.state == null) {
            return;
        }
        props.onChange(e.target.checked);
    }, [props.onChange, props.state]);

    return (
        <label className={styles.container}>
            <input
                type={"checkbox"}
                checked={Boolean(props.state)}
                data-undetermined={props.state == null}
                readOnly={props.state == null}
                onChange={handleChange}
            />
            <div className={styles.toggle} />
        </label>
    );
};

export { Toggle };
