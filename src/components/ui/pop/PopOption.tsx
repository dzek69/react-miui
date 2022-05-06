import React from "react";

import type { ICON } from "../../icons/Icon";
import { Icon } from "../../icons/Icon";

import styles from "./Pop.module.scss";

interface Props {
    icon?: ICON;
    forceEmptyIcon?: boolean;
    onClick: () => void;
}

const PopOption: React.FC<Props> = (props) => {
    const ic = props.icon
        ? <Icon name={props.icon} className={styles.icon} />
        : ((props.forceEmptyIcon ?? true) ? <span className={styles.fakeIcon} /> : null);

    return (
        <li className={styles.li}>
            <button onClick={props.onClick} className={styles.button}>{ic}{props.children}</button>
        </li>
    );
};

export { PopOption };
