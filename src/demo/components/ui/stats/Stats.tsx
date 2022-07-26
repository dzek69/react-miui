import React from "react";

import { Stats, Header, StickyHeader } from "../../../../index.js";

import styles from "./Stats.module.scss";

interface Props {}

const stats = [
    {
        label: "Temperature",
        value: "32°C",
    },
    {
        label: "Used",
        value: "320.3 mAh",
    },
    {
        label: "Used for",
        value: "14h 32m",
    },
];

const StatsDemo: React.FC<Props> = (props) => {
    return (
        <StickyHeader position={"top"}>
            <Header
                center={true}
                variant={"colored"}
                className={styles.header}
            >
                Battery
            </Header>
            <StickyHeader.Content className={"miui-scrollbars"}>
                <div className={styles.coloredBox}>
                    <Stats stats={stats} />
                </div>
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StatsDarkDemo = () => (
    <StickyHeader position={"top"}>
        <Header
            center={true}
            variant={"colored"}
            className={styles.header2}
        >
            Battery
        </Header>
        <StickyHeader.Content className={"miui-scrollbars"}>
            <div className={styles.coloredBox2}>
                <Stats stats={stats} variant={"dark"} />
            </div>
        </StickyHeader.Content>
    </StickyHeader>
);

export { StatsDemo, StatsDarkDemo };
