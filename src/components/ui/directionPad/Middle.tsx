import React from "react";

import styles from "./Pad.module.scss";

interface Props {
    label?: string;
    onClick?: () => void;
}

const PadMiddle: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick} className={styles.pad__middle}>{props.label}</button>
    );
};

export { PadMiddle };
