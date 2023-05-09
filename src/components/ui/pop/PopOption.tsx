import React from "react";

import classnames from "classnames";

import styles from "./Pop.module.scss";

interface Props {
    icon?: React.ReactElement;
    forceEmptyIcon?: boolean;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const PopOption: React.FC<Props> = (props) => {
    const ic = props.icon
        ? <div className={styles.icon}>{props.icon}</div>
        : ((props.forceEmptyIcon ?? true) ? <span className={styles.fakeIcon} /> : null);

    return (
        <li className={classnames(props.className, styles.li)}>
            <button onClick={props.onClick} className={styles.button}>{ic}{props.children}</button>
        </li>
    );
};

export { PopOption };
