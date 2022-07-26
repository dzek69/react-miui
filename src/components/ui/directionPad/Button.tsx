import React from "react";

import styles from "./Pad.module.scss";

interface Props {
    onClick?: (() => void) | undefined;
}

const PadButton: React.FC<Props> = (props) => {
    return (
        <button {...props} className={styles.pad__button}><span className={styles.pad__dot} /></button>
    );
};

export { PadButton };
