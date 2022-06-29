import React from "react";
import classnames from "classnames";

import styles from "./Stats.module.scss";

interface Stat {
    label: string;
    value: React.ReactNode;
}

interface Props {
    stats: Stat[];
    variant?: "dark";
}

const Stats: React.FC<Props> = (props) => {
    const list = props.stats.map((s, k) => (
        <li key={String(k)} className={styles.item}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
        </li>
    ));

    const len = list.length;

    for (let i = 0; i < len - 1; i++) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        list.splice((i * 2) + 1, 0, <li key={"separator" + String(i)} className={styles.separator} />);
    }

    const cls = classnames(styles.stats, {
        [styles["stats-dark"]]: props.variant === "dark",
    });

    return (
        <ul className={cls}>
            {list}
        </ul>
    );
};

export { Stats };
