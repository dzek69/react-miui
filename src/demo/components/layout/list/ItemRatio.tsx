import React from "react";

import { List, Item, ICON, Icon } from "../../../../index.js";

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
