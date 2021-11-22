import React from "react";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";
import { Value } from "../../../../components/layout/list/Value";
import { Label } from "../../../../components/layout/list/Label";
import { ICON, Icon } from "../../../../components/icons/Icon";

import styles from "./Value.module.scss";

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
