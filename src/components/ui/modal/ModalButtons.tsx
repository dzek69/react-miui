import React from "react";
import { ModalButton } from "./ModalButton";

import styles from "./ModalButtons.module.scss";

interface Props {}

interface SubComponents {
    Button: typeof ModalButton;
}

const ModalButtons: React.FC<Props> & SubComponents = (props) => {
    return <div className={styles.container}>{props.children}</div>;
};
ModalButtons.Button = ModalButton;

export { ModalButtons };
