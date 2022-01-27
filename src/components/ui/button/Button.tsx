import React from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";
import { makeVariants } from "../../../utils/makeVariants.js";

interface Props {
    variant?: "inline" | "outline";
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
    className, children, variant, ...props
}) => {
    const variants = makeVariants(variant);

    const cls = classnames(styles.btn, {
        [styles["btn--inline"]]: variants.includes("inline"),
        [styles["btn--outline"]]: variants.includes("outline"),
    }, className);

    return (
        <button
            {...props}
            className={cls}
            disabled={props.disabled}
        >{children}
        </button>
    );
};

export { Button };
