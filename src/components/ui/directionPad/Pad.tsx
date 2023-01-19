import React from "react";

import classnames from "classnames";

import { PadButton as Button } from "./Button.js";
import { PadMiddle as Middle } from "./Middle.js";
import styles from "./Pad.module.scss";

interface Props {
    onUpPress?: () => void;
    onDownPress?: () => void;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    onMiddlePress?: () => void;
    middleLabel?: string;
    className?: string;
}

const Pad: React.FC<Props> = (props) => {
    return (
        <div className={classnames(props.className, styles.pad)}>
            <div className={styles.pad__line}>
                <Button onClick={props.onUpPress} />
            </div>
            <div className={styles.pad__line}>
                <Button onClick={props.onLeftPress} />
                <Middle onClick={props.onMiddlePress} label={props.middleLabel} />
                <Button onClick={props.onRightPress} />
            </div>
            <div className={styles.pad__line}>
                <Button onClick={props.onDownPress} />
            </div>
        </div>
    );
};

export { Pad as DirectionPad };
