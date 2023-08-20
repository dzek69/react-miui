import React, { useState } from "react";

import classnames from "classnames";

import type { AnyComponent } from "../types";
import type { TheMap, TheMapItem } from "./componentsMap";

import { Choice } from "../components/form/choice/Choice";

import { safeUseHash } from "./utils/safeUseHash";
import { componentsMap } from "./componentsMap";
import styles from "./Main.module.scss";

type BG = "white" | "transparent" | "mobile";

interface ComponentInfo {
    Component: AnyComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
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

const values: BG[] = ["white", "transparent", "mobile"];

const Main: React.FC = (props) => {
    const [bg, handleBgChange] = useState<BG>("white");

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
        [styles["component--transparent"] as string]: bg === "transparent",
        [styles["component--mobile"] as string]: bg === "mobile",
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{info.name}</h1>
            <Choice values={values} value={bg} name={"x"} onChange={handleBgChange} />

            <div className={componentCls}>
                <Component />
            </div>
        </div>
    );
};

export { Main };
