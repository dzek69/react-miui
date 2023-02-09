import React from "react";

import classnames from "classnames";

import styles from "./SearchContainer.module.scss";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const SearchContainer: React.FC<Props> = (props) => {
    return (
        <section className={classnames(props.className, styles.section)}>{props.children}</section>
    );
};

export { SearchContainer };
