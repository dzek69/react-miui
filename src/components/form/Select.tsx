import React from "react";
import classnames from "classnames";

import styles from "./Select.module.scss";

interface Props {
}

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & Props> = ({ className, children, ...props }) => {
    const wrapperCls = classnames(styles.select, className);

    return (
        <select className={wrapperCls} {...props}>
            {children}
        </select>
    );
};

export {
    Select,
};
