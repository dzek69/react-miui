import type { AnyComponent } from "../types";
import { CheckboxDemo } from "./components/form/Checkbox";
import { HeaderDemo } from "./components/layout/header/Header";
import {
    StickyHeaderBottomDemo,
    StickyHeaderDemo, StickyHeaderLeftCenterDemo, StickyHeaderLeftDemo, StickyHeaderRightDemo,
    StickyHeaderTopBottomDemo,
} from "./components/layout/header/StickyHeader";
import { ListItemDemo } from "./components/layout/list/List.Item";
import { DirectionPadDemo } from "./components/ui/directionPad/Pad";
import { IconsDemo } from "./components/ui/icons/Icons";
import { ButtonDemo } from "./components/ui/button/ButtonDemo";
import {
    ActionDemo,
    ActionLabelsOnBottom,
    ActionsDemo,
    ActionsOnBottom,
    ActionsOnLeft,
} from "./components/ui/action/Action";

interface TheMap {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    [key: string]: TheMapItem;
}

interface TheMapItem {
    name: string;
    Component: AnyComponent;
    children?: TheMap;
}

const componentsMap: TheMap = {
    Button: {
        name: "Button",
        Component: ButtonDemo,
    },
    Checkbox: {
        name: "Checkbox",
        Component: CheckboxDemo,
    },
    Header: {
        name: "Header",
        Component: HeaderDemo,
        children: {
            Sticky: {
                name: "Sticky header",
                Component: StickyHeaderDemo,
            },
            StickyBottom: {
                name: "On bottom",
                Component: StickyHeaderBottomDemo,
            },
            StickyTopBottom: {
                name: "On top & bottom",
                Component: StickyHeaderTopBottomDemo,
            },
            StickyLeft: {
                name: "On left",
                Component: StickyHeaderLeftDemo,
            },
            StickyRight: {
                name: "On right",
                Component: StickyHeaderRightDemo,
            },
            StickyLeftCentered: {
                name: "On left centered",
                Component: StickyHeaderLeftCenterDemo,
            },
        },
    },
    Action: {
        name: "Action",
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
            Actions: {
                name: "Actions (wrapper)",
                Component: ActionsDemo,
            },
        },
    },
    ListItem: {
        name: "List & Item",
        Component: ListItemDemo,
    },
    Pad: {
        name: "Direction pad",
        Component: DirectionPadDemo,
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
