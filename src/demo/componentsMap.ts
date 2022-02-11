/* eslint-disable max-lines */
import type { AnyComponent } from "../types";
import { CheckboxDemo } from "./components/form/Checkbox";
import {
    CenteredHeaderDemo,
    HeaderDemo,
    HeaderWithButtonsDemo,
    HeaderWithButtonsOnSideDemo, ToolbarVariantDemo,
} from "./components/layout/header/Header";
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
import { ToggleDemo } from "./components/form/Toggle";
import { ItemRatioDemo } from "./components/layout/list/ItemRatio";
import { ItemLabelDemo } from "./components/layout/list/Label";
import { ListHeaderDemo } from "./components/layout/list/Header";
import { ValueDemo } from "./components/layout/list/Value";
import { SectionDemo } from "./components/layout/section/Section";
import { CardDemo } from "./components/layout/card/Card";
import { InputDemo } from "./components/form/Input";
import { FormDemo } from "./components/form/Form";
import { SearchDemo } from "./components/form/Search";
import { LabelDemo } from "./components/form/Label";
import { ToasterDemo } from "./components/ui/toaster/Toaster";
import { ModalCenteredDemo, ModalDemo, ModalOptionsDemo } from "./components/ui/modal/Modal";
import { ListInsetDemo } from "./components/layout/list/Inset";
import { ListSelectionDemo } from "./components/layout/list/Selection";
import { TabsDemo } from "./components/ui/tabs/Tabs";
import { ChoiceDemo } from "./components/form/Choice";

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
    Form: {
        name: "Form",
        Component: FormDemo,
        children: {
            Input: {
                name: "Input",
                Component: InputDemo,
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
    Icons: {
        name: "Icons",
        Component: IconsDemo,
    },
    Toaster: {
        name: "Toaster",
        Component: ToasterDemo,
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
};

export {
    componentsMap,
};

export type {
    TheMap,
    TheMapItem,
};
