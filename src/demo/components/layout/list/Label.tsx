import React from "react";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";
import { Label } from "../../../../components/layout/list/Label";

const ItemLabelDemo = () => {
    return (
        <List>
            <Item>
                <Label sub={"Here is a little text explaining things. Don't go too long, but make it non-ambiguous."}>
                    Transmit power
                </Label>
            </Item>
            <Item ratio={"6/4/"}>
                <Label sub={"Here is a little text explaining things. Don't go too long, but make it non-ambiguous."}>
                    Transmit power
                </Label>
                <></>
                <>Value</>
            </Item>
            <Item>
                <Label sub={"Just one sentence."}>
                    Complicated name
                </Label>
            </Item>
        </List>
    );
};

export { ItemLabelDemo };
