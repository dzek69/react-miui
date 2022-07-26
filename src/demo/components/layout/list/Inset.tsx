import React from "react";

import { List, Item, Header } from "../../../../index.js";

const ListInsetDemo = () => {
    return (
        <List variant={"inset"}>
            <Header>Section name</Header>
            <Item>Item</Item>
            <Item>Another item</Item>
            <Item>One more</Item>
            <Header>Status section</Header>
            <Item>Item</Item>
            <Item>One more</Item>
            <Header>Selection</Header>
            <Item>Item</Item>
            <Item>Another item</Item>
            <Item>One more</Item>
        </List>
    );
};

export { ListInsetDemo };
