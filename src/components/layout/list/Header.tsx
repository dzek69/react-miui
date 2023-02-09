import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../../utils/index.js";

import styles from "./Item.module.scss";
import headerStyles from "./Header.module.scss";

type Variant = "inset";

interface Props {
    className?: string;
    variant?: Variant | Variant[];
    children: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {
    const v = makeVariants(props.variant);

    const cls = classnames(props.className, styles.item, headerStyles.header, {
        [styles.inset]: v.includes("inset"),
    });

    // @TODO way to use h1, h2, h3 instead of div
    return (
        <li className={cls}>
            <div>{props.children}</div>
        </li>
    );
};

export { Header };
