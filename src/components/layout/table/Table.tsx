import React from "react";
import classnames from "classnames";

import styles from "./Table.module.scss";

type Variant = "striped" | "raw" | "wide" | "centered";

interface Props {
    variant?: Variant | Variant[];
}

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement> & Props> = (
    { className, children, variant, ...props },
) => {
    const cls = classnames(className, {
        [styles.table]: variant !== "raw",
        [styles.striped]: variant === "striped",
        [styles.full]: variant === "wide",
        [styles.centered]: variant === "centered",
    });
    return <table className={cls} {...props}>{children}</table>;
};

export { Table };
