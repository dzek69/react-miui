import React, { useCallback } from "react";

import classnames from "classnames";

import type { ObjectValue } from "../../../types/form";

import styles from "./Item.module.scss";

interface Props {
    value: ObjectValue;
    onClick: (value: string) => void;
    active: boolean;
}

const Item: React.FC<Props> = (props) => {
    const handleClick = useCallback(() => {
        props.onClick(props.value.value);
    }, [props.onClick, props.value.value, props.value.label]);

    const cls = classnames(styles.button, {
        [styles.active as string]: props.active,
    });

    return <button onClick={handleClick} className={cls} type={"button"}>{props.value.label}</button>;
};

export { Item };
