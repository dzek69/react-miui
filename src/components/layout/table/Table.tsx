import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../../utils/index.js";

import styles from "./Table.module.scss";

type Variant = "striped" | "raw" | "wide" | "centered";

interface Props {
    variant?: Variant | Variant[];
}

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement> & Props> = (
    { className, children, variant, ...props },
) => {
    const v = makeVariants(variant);

    const cls = classnames(className, {
        [styles.table]: !v.includes("raw"),
        [styles.striped]: v.includes("striped"),
        [styles.wide]: v.includes("wide"),
        [styles.centered]: v.includes("centered"),
    });
    return <table className={cls} {...props}>{children}</table>;
};

export { Table };
