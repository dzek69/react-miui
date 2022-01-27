import React from "react";

import styles from "./ModalButtons.module.scss";
import { makeVariants } from "../../../utils/makeVariants";
import classnames from "classnames";

type Variant = "main";

interface Props {
    variant?: Variant | Variant[];
}

const ModalButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
    className, children, variant, ...props
}) => {
    const v = makeVariants(variant);

    const cls = classnames(styles.button, {
        [styles.buttonMain]: v.includes("main"),
    }, className);

    return <button {...props} className={cls}>{children}</button>;
};

export { ModalButton };
