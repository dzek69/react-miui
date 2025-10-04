import type { AnyComponent } from "../types";

import { IconsDemo } from "./components/ui/icons/Icons";
import { TabsDemo } from "./components/ui/tabs/Tabs";
import { StatsDarkDemo, StatsDemo } from "./components/ui/stats/Stats";

interface TheMap {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    [key: string]: TheMapItem;
}

interface TheMapItem {
    name: string;
    Component: AnyComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    children?: TheMap;
}

const componentsMap: TheMap = {
    Tabs: {
        name: "Tabs",
        Component: TabsDemo,
    },
    Stats: {
        name: "Stats",
        Component: StatsDemo,
        children: {
            DarkOnLight: {
                name: "Dark on light",
                Component: StatsDarkDemo,
            },
        },
    },
    Icons: {
        name: "Icons",
        Component: IconsDemo,
    },
};

export {
    componentsMap,
};

export type {
    TheMap,
    TheMapItem,
};
