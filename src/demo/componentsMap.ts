/* eslint-disable import/max-dependencies */
import type { AnyComponent } from "../types";

import { CheckboxDemo } from "./components/form/Checkbox";
import { DirectionPadDemo } from "./components/ui/directionPad/Pad";
import { IconsDemo } from "./components/ui/icons/Icons";
import {
    ActionDemo,
    ActionLabelsOnBottom,
    ActionsDemo,
    ActionsOnBottom,
    ActionsOnLeft,
} from "./components/ui/action/Action";
import { ToggleDemo } from "./components/form/Toggle";
import { CardDemo } from "./components/layout/card/Card";
import { FormDemo } from "./components/form/Form";
import { SearchDemo } from "./components/form/Search";
import { LabelDemo } from "./components/form/Label";
import { ToasterDemo } from "./components/ui/toaster/Toaster";
import { TabsDemo } from "./components/ui/tabs/Tabs";
import { ChoiceDemo, ChoiceDemo2 } from "./components/form/Choice";
import { PopDemo } from "./components/ui/pop/Pop";
import { DrawerDemo } from "./components/ui/drawer/Drawer";
import { StatsDarkDemo, StatsDemo } from "./components/ui/stats/Stats";
import { TableDemo } from "./components/layout/table/TableDemo";
import { KeyValueDemo } from "./components/ui/keyValue/KeyValue";

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
            Label: {
                name: "Label",
                Component: LabelDemo,
            },
            Search: {
                name: "Search",
                Component: SearchDemo,
            },
            Checkbox: {
                name: "Checkbox",
                Component: CheckboxDemo,
            },
            Toggle: {
                name: "Toggle",
                Component: ToggleDemo,
            },
            Choice: {
                name: "Choice",
                Component: ChoiceDemo,
                children: {
                    Darker: {
                        name: "Customized colors",
                        Component: ChoiceDemo2,
                    },
                },
            },
        },
    },
    Action: {
        name: "Action", // TODO move all action demos to storybook
        Component: ActionDemo,
        children: {
            ActionOnBottom: {
                name: "Actions on header",
                Component: ActionsOnBottom,
            },
            ActionLabelsOnBottom: {
                name: "Actions with labels on header",
                Component: ActionLabelsOnBottom,
            },
            ActionOnLeft: {
                name: "Actions on left header",
                Component: ActionsOnLeft,
            },
            EqualActions: {
                name: "EqualActions (wrapper)",
                Component: ActionsDemo,
            },
        },
    },
    Tabs: {
        name: "Tabs",
        Component: TabsDemo,
    },
    Card: {
        name: "Card",
        Component: CardDemo,
    },
    Pad: {
        name: "Direction pad",
        Component: DirectionPadDemo,
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
    KeyValue: {
        name: "Key Value blocks",
        Component: KeyValueDemo,
    },
    Icons: {
        name: "Icons",
        Component: IconsDemo,
    },
    Toaster: {
        name: "Toaster",
        Component: ToasterDemo,
    },
    Drawer: {
        name: "Drawer",
        Component: DrawerDemo,
    },
    Pop: {
        name: "Pop up menu",
        Component: PopDemo,
    },
    Table: {
        name: "Table",
        Component: TableDemo,
    },
};

export {
    componentsMap,
};

export type {
    TheMap,
    TheMapItem,
};
