import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../../utils/makeVariants.js";

import styles from "./Card.module.scss";

type Variants = "margin";

interface Props {
    variant?: Variants;
    className?: string;
}

const Card: React.FC<Props> = (props) => {
    const v = makeVariants(props.variant);
    const cls = classnames(props.className, styles.card, {
        [styles.margin]: v.includes("margin"),
    });

    // @TODO auto wrap some children in Section

    return (
        <div className={cls}>{props.children}</div>
    );
};

export { Card };
