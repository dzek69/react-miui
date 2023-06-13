import React from "react";

import { Icon, ICON, List } from "../../../../index.js";

const Item = List.Item;

const IconsDemo: React.FC = () => {
    const icons = Object.values(ICON).map((value) => {
        return (
            <Item key={value} ratio={"1/"}>
                {value}
                <Icon name={value} />
            </Item>
        );
    });

    return (
        <List>
            {icons}
        </List>
    );
};

export { IconsDemo };
