import React from "react";

import { List, Item, ICON, Icon } from "../../../../index.js";

import styles from "./Value.module.scss";

const { Label, Value } = Item;

const ValueDemo = () => {
    return (
        <List>
            <Item>
                <Label>Name</Label>
                <Value>Jack The 23rd</Value>
            </Item>
            <Item>
                <Label>Start at</Label>
                <Value>18:00</Value>
                <Icon name={ICON.forward} className={styles.icon} />
            </Item>
        </List>
    );
};

export { ValueDemo };
