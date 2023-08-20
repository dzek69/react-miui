import React from "react";

import classnames from "classnames";

import { makeVariants } from "../../../utils/index";

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
        [styles.table as string]: !v.includes("raw"),
        [styles.striped as string]: v.includes("striped"),
        [styles.wide as string]: v.includes("wide"),
        [styles.centered as string]: v.includes("centered"),
    });
    return <table className={cls} {...props}>{children}</table>;
};

export { Table };
