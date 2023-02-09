/* eslint-disable max-lines, import/max-dependencies */
import type { AnyComponent } from "../types";

import { CheckboxDemo } from "./components/form/Checkbox.js";
import {
    CenteredHeaderDemo,
    HeaderDemo,
    HeaderWithButtonsDemo,
    HeaderWithButtonsOnSideDemo, ToolbarVariantDemo,
} from "./components/layout/header/Header.js";
import {
    StickyColoredBg,
    StickyHeaderBottomDemo,
    StickyHeaderDemo, StickyHeaderLeftCenterDemo, StickyHeaderLeftDemo, StickyHeaderRightDemo,
    StickyHeaderTopBottomDemo,
} from "./components/layout/header/StickyHeader.js";
import { ListItemDemo } from "./components/layout/list/List.Item.js";
import { DirectionPadDemo } from "./components/ui/directionPad/Pad.js";
import { IconsDemo } from "./components/ui/icons/Icons.js";
import { ButtonDemo } from "./components/ui/button/ButtonDemo.js";
import {
    ActionDemo,
    ActionLabelsOnBottom,
    ActionsDemo,
    ActionsOnBottom,
    ActionsOnLeft,
} from "./components/ui/action/Action.js";
import { ToggleDemo } from "./components/form/Toggle.js";
import { ItemRatioDemo } from "./components/layout/list/ItemRatio.js";
import { ItemLabelDemo } from "./components/layout/list/Label.js";
import { ListHeaderDemo } from "./components/layout/list/Header.js";
import { ValueDemo } from "./components/layout/list/Value.js";
import { SectionDemo } from "./components/layout/section/Section.js";
import { CardDemo } from "./components/layout/card/Card.js";
import { InputDemo } from "./components/form/Input.js";
import { FormDemo } from "./components/form/Form.js";
import { SearchDemo } from "./components/form/Search.js";
import { LabelDemo } from "./components/form/Label.js";
import { ToasterDemo } from "./components/ui/toaster/Toaster.js";
import { ModalCenteredDemo, ModalDemo, ModalOptionsDemo } from "./components/ui/modal/Modal.js";
import { ListInsetDemo } from "./components/layout/list/Inset.js";
import { ListSelectionDemo } from "./components/layout/list/Selection.js";
import { TabsDemo } from "./components/ui/tabs/Tabs.js";
import { ChoiceDemo, ChoiceDemo2 } from "./components/form/Choice.js";
import { MessageDemo } from "./components/ui/message/Message.js";
import { PopDemo } from "./components/ui/pop/Pop.js";
import { DrawerDemo } from "./components/ui/drawer/Drawer.js";
import { StatsDarkDemo, StatsDemo } from "./components/ui/stats/Stats.js";
import { SelectDemo } from "./components/form/Select.js";
import { TableDemo } from "./components/layout/table/TableDemo.js";
import { KeyValueDemo } from "./components/ui/keyValue/KeyValue.js";

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
            Input: {
                name: "Input",
                Component: InputDemo,
            },
            Select: {
                name: "Select",
                Component: SelectDemo,
            },
            Label: {
                name: "Label",
                Component: LabelDemo,
            },
            Search: {
                name: "Search",
                Component: SearchDemo,
            },
            Button: {
                name: "Button",
                Component: ButtonDemo,
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
    Header: {
        name: "Header",
        Component: HeaderDemo,
        children: {
            Centered: {
                name: "Centered",
                Component: CenteredHeaderDemo,
            },
            Toolbar: {
                name: "Toolbar",
                Component: ToolbarVariantDemo,
            },
            WithButtons: {
                name: "With buttons",
                Component: HeaderWithButtonsDemo,
                children: {
                    OnLeft: {
                        name: "On the side",
                        Component: HeaderWithButtonsOnSideDemo,
                    },
                },
            },
            Sticky: {
                name: "Sticky",
                Component: StickyHeaderDemo,
                children: {
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
                    StickyColoredBg: {
                        name: "With colored background",
                        Component: StickyColoredBg,
                    },
                },
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
    ListItem: {
        name: "List & Item",
        Component: ListItemDemo,
        children: {
            Ratio: {
                name: "Alignment",
                Component: ItemRatioDemo,
            },
            Header: {
                name: "Header",
                Component: ListHeaderDemo,
            },
            Inset: {
                name: "Inset",
                Component: ListInsetDemo,
            },
            Selection: {
                name: "Selection",
                Component: ListSelectionDemo,
            },
            Label: {
                name: "Label",
                Component: ItemLabelDemo,
            },
            Value: {
                name: "Value",
                Component: ValueDemo,
            },
        },
    },
    Section: {
        name: "Section",
        Component: SectionDemo,
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
    Message: {
        name: "Message",
        Component: MessageDemo,
    },
    Drawer: {
        name: "Drawer",
        Component: DrawerDemo,
    },
    Modal: {
        name: "Modal",
        Component: ModalDemo,
        children: {
            Centered: {
                name: "Centered & smaller",
                Component: ModalCenteredDemo,
            },
            WithOptions: {
                name: "With options to pick",
                Component: ModalOptionsDemo,
            },
        },
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
