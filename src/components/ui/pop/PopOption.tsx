import React, { forwardRef } from "react";

import { Button, FakeIcon, Icon, ListItem } from "./Pop.styled";

interface Props {
    icon?: React.ReactElement;
    forceEmptyIcon?: boolean;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const PopOption = forwardRef<HTMLLIElement, Props>((props, ref) => {
    const ic = props.icon
        ? <Icon>{props.icon}</Icon>
        : ((props.forceEmptyIcon ?? true) ? <FakeIcon /> : null);

    return (
        <ListItem ref={ref} className={props.className}>
            <Button onClick={props.onClick}>{ic}{props.children}</Button>
        </ListItem>
    );
});

PopOption.displayName = "PopOption";
PopOption.toString = () => ListItem.toString();

const PopOptionButtonSelector = Button.toString();
const PopOptionIconSelector = Icon.toString();

export { PopOption, PopOptionButtonSelector, PopOptionIconSelector };
