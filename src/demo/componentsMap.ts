import type React from "react";
import { CheckboxDemo } from "./components/form/Checkbox";
import { HeaderDemo } from "./components/layout/header/Header";
import {
    StickyHeaderBottomDemo,
    StickyHeaderDemo, StickyHeaderLeftCenterDemo, StickyHeaderLeftDemo, StickyHeaderRightDemo,
    StickyHeaderTopBottomDemo,
} from "./components/layout/header/StickyHeader";
import { ListItemDemo } from "./components/layout/list/List.Item";

type AnyComponent = React.ComponentClass | React.FC;

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
    ListItem: {
        name: "List & Item",
        Component: ListItemDemo,
    },
};

export {
    componentsMap,
};

export type {
    TheMap,
    TheMapItem,
};
