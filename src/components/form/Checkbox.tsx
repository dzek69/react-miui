import React from "react";

import styles from "./Checkbox.module.scss";
import { Checkmark } from "../icons/Checkmark";

interface Props {
    color?: string;
    name: string;
    onChange: () => void;
    checked: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
    const style: React.CSSProperties = {};
    props.color && (style.color = props.color);

    return (
        <label className={styles.checkbox}>
            <input type={"checkbox"} name={props.name} onChange={props.onChange} checked={props.checked} />
            <span style={style}><Checkmark /></span>
            <span>{props.children}</span>
        </label>
    );
};

export { Checkbox };
