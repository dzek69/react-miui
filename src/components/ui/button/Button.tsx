import React from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";
import { makeVariants } from "../../../demo/utils/makeVariants.js";

interface Props {
    disabled?: boolean;
    variant?: "inline" | "outline";
}

const Button: React.FC<Props> = (props) => {
    const variants = makeVariants(props.variant);

    const cls = classnames(styles.btn, {
        [styles["btn--inline"]]: variants.includes("inline"),
        [styles["btn--outline"]]: variants.includes("outline"),
    });

    return (
        <button className={cls} disabled={props.disabled}>{props.children}</button>
    );
};

export { Button };
