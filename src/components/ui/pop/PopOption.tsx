import React from "react";

import { Button, FakeIcon, Icon, ListItem } from "./Pop.styled";

interface Props {
    icon?: React.ReactElement;
    forceEmptyIcon?: boolean;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const PopOption: React.FC<Props> = (props) => {
    const ic = props.icon
        ? <Icon>{props.icon}</Icon>
        : ((props.forceEmptyIcon ?? true) ? <FakeIcon /> : null);

    return (
        <ListItem className={props.className}>
            <Button onClick={props.onClick}>{ic}{props.children}</Button>
        </ListItem>
    );
};

export { PopOption };
