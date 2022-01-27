import React from "react";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";
import { Header } from "../../../../components/layout/list/Header";

const ListSelectionDemo = () => {
    return (
        <List>
            <Header>Select your favourite meal</Header>
            <Item selected={false}>Stick</Item>
            <Item selected={true}>Stone</Item>
            <Item selected={false}>Bone</Item>
        </List>
    );
};

export { ListSelectionDemo };
