import React from "react";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";
import { Header } from "../../../../components/layout/list/Header";

const ListHeaderDemo = () => {
    return (
        <List>
            <Header>Section name</Header>
            <Item>Item</Item>
            <Item>Another item</Item>
            <Item>One more</Item>
            <Header>Status section</Header>
            <Item>Item</Item>
            <Item>One more</Item>
            <Header>Advanced</Header>
            <Item>Item</Item>
            <Item>Another item</Item>
            <Item>One more</Item>
        </List>
    );
};

export { ListHeaderDemo };
