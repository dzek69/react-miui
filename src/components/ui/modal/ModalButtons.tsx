import React from "react";
import classnames from "classnames";

import { ModalButton } from "./ModalButton";
import styles from "./ModalButtons.module.scss";

interface Props {
    className?: string;
}

interface SubComponents {
    Button: typeof ModalButton;
}

const ModalButtons: React.FC<Props> & SubComponents = (props) => {
    return <div className={classnames(styles.container, props.className)}>{props.children}</div>;
};
ModalButtons.Button = ModalButton;

export { ModalButtons };
