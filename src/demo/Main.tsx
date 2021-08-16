import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Main.module.scss";

import { CheckboxDemo } from "./components/form/Checkbox";
import { safeUseHash } from "./utils/safeUseHash";

type BG = "white" | "transparent";

const componentsMap: { [key: string]: (typeof React.Component) | React.FC } = {
    checkbox: CheckboxDemo,
};

const Main: React.FC = (props) => {
    const [bg, setBg] = useState<BG>("white");

    const hash = safeUseHash();
    const hashWithoutHash = hash.substr(1);
    const Component = componentsMap[hashWithoutHash];

    if (!Component) {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Hi there</h1>
                This is poor man's StoryBook.
            </div>
        );
    }

    const componentCls = classnames(styles.component, {
        [styles["component--transparent"]]: bg === "transparent",
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{hash}</h1>
            <button onClick={() => { setBg("transparent"); }}>Transparent</button>
            <button onClick={() => { setBg("white"); }}>White</button>

            <div className={componentCls}>
                <Component />
            </div>
        </div>
    );
};

export { Main };
