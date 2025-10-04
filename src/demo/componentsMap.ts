import type { AnyComponent } from "../types";

import { IconsDemo } from "./components/ui/icons/Icons";
import { FormDemo } from "./components/form/Form";
import { SearchDemo } from "./components/form/Search";
import { TabsDemo } from "./components/ui/tabs/Tabs";
import { DrawerDemo } from "./components/ui/drawer/Drawer";
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
    Form: {
        name: "Form",
        Component: FormDemo,
        children: {
            Search: {
                name: "Search",
                Component: SearchDemo,
            },
        },
    },
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
    Drawer: {
        name: "Drawer",
        Component: DrawerDemo,
    },
};

export {
    componentsMap,
};

export type {
    TheMap,
    TheMapItem,
};
