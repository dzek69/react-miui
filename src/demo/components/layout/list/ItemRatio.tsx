import React from "react";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";
import { ICON, Icon } from "../../../../components/icons/Icon";

const ItemRatioDemo = () => {
    return (
        <List>
            <Item ratio={"1/"}>
                <span>Label</span>
                <>Value</>
            </Item>
            <Item ratio={"1/"}>
                <span>Label</span>
                <Icon name={ICON.forward} />
            </Item>
        </List>
    );
};

export { ItemRatioDemo };
