import type React from "react";
import { CheckboxDemo } from "./components/form/Checkbox";
import { HeaderDemo } from "./components/layout/header/Header";
import { StickyHeaderDemo } from "./components/layout/header/StickyHeader";
import { ListItemDemo } from "./components/layout/list/List.Item";

const componentsMap: { [key: string]: (typeof React.Component) | React.FC } = {
    checkbox: CheckboxDemo,
    header: HeaderDemo,
    stickyHeader: StickyHeaderDemo,
    listItem: ListItemDemo,
};

export {
    componentsMap,
};
