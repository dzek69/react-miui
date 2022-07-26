import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../../utils/index.js";

import styles from "./Button.module.scss";

type Variant = "inline" | "outline";

interface Props {
    variant?: Variant | Variant[];
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
