import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Main.module.scss";

import { safeUseHash } from "./utils/safeUseHash";
import type { TheMap, TheMapItem } from "./componentsMap";
import { componentsMap } from "./componentsMap";

type BG = "white" | "transparent";
type AnyComponent = React.ComponentClass | React.FC;

interface ComponentInfo {
    Component: AnyComponent;
    name: string;
}

const getComponentByHash = (hash: string): ComponentInfo | null => {
    const parts = hash.split("/");
    let obj: TheMap | undefined = componentsMap,
        objItem: TheMapItem | undefined;

    while (parts.length) {
        const first = parts.shift()!;
        objItem = obj?.[first];

        if (!objItem) {
            return null;
        }
        obj = objItem.children;
    }

    if (objItem?.Component) {
        return {
            name: objItem.name,
            Component: objItem.Component,
        };
    }

    return null;
};

const Main: React.FC = (props) => {
    const [bg, setBg] = useState<BG>("white");

    const hash = safeUseHash();
    const hashWithoutHash = hash.substr(1);
    const info = getComponentByHash(hashWithoutHash);

    if (!info) {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Hi there</h1>
                This is poor man's StoryBook.
            </div>
        );
    }

    const Component = info.Component;

    const componentCls = classnames(styles.component, {
        [styles["component--transparent"]]: bg === "transparent",
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{info.name}</h1>
            <button onClick={() => { setBg("transparent"); }}>Transparent</button>
            <button onClick={() => { setBg("white"); }}>White</button>

            <div className={componentCls}>
                <Component />
            </div>
        </div>
    );
};

export { Main };
