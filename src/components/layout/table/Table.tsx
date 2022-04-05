import React from "react";
import classnames from "classnames";

import styles from "./Table.module.scss";

interface Props {
    variant?: "striped" | "raw";
}

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement> & Props> = (
    { className, children, variant, ...props },
) => {
    const cls = classnames(className, {
        [styles.table]: variant !== "raw",
        [styles.striped]: variant === "striped",
    });
    return <table className={cls} {...props}>{children}</table>;
};

export { Table };
