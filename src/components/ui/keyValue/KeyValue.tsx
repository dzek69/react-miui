import type { ReactElement } from "react";
import React from "react";

import classnames from "classnames";

import styles from "./KeyValue.module.scss";

interface Props {
    items: { key?: React.ReactNode; value?: React.ReactNode; icon?: React.ReactNode; onClick?: () => void }[];
    cols?: number;
    valueFirst?: boolean;
    className?: string;
}

const DEFAULT_COLS = 2;

const KeyValue: React.FC<Props> = (props) => {
    const cols = props.cols ?? DEFAULT_COLS;

    const items: ReactElement[] = props.items.map((value, key) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const width = `${100 / cols}%`;
        const style = { width };

        const isFirstRow = key < cols;
        const isFirstCol = (key % cols) === 0;
        const className = classnames(styles.item, {
            [styles.itemNotFirstRow]: !isFirstRow,
            [styles.itemNotFirstCol]: !isFirstCol,
        });

        const kvKey = value.key != null ? <div className={styles.key}>{value.key}</div> : null;
        const kvValue = value.value != null ? <div className={styles.value}>{value.value}</div> : null;

        const keyValue = (
            <div className={styles.kv}>
                {props.valueFirst ? kvValue : kvKey}{!props.valueFirst ? kvValue : kvKey}
            </div>
        );
        const icon = value.icon != null ? <div className={styles.icon}>{value.icon}</div> : null;

        const component = value.onClick ? "button" : "div";
        return React.createElement(component, {
            // eslint-disable-next-line react/no-array-index-key
            key, style, className,
        }, <>{icon}{keyValue}</>);
    });

    const rest = items.length % cols;
    const missingItems = rest ? cols - rest : 0;
    if (missingItems) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const width = `${(100 / cols) * (missingItems)}%`;
        const style = { width };
        const cls = classnames(styles.item, styles.missingItem);

        items.push(
            <div key={"extra"} style={style} className={cls} />,
        );
    }

    return (
        <div className={classnames(styles.container, props.className)}>
            {items}
        </div>
    );
};

export { KeyValue };
