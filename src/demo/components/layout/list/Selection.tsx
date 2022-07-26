import React from "react";

import { List, Item, Header } from "../../../../index.js";

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
