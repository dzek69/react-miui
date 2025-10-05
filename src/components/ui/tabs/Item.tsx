import React, { useCallback } from "react";

import type { ObjectValue } from "../../../types/form";

import { StyledItem } from "./Item.styled";

type ItemProps = {
    value: ObjectValue;
    onClick: (value: string) => void;
    active: boolean;
};

const Item = (props: ItemProps): React.ReactElement => {
    const handleClick = useCallback(() => {
        props.onClick(props.value.value);
    }, [props.onClick, props.value.value]);

    return (
        <StyledItem onClick={handleClick} active={props.active} type={"button"} data-active={props.active}>
            {props.value.label}
        </StyledItem>
    );
};

Item.displayName = "Item";
Item.toString = () => StyledItem.toString();

export { Item, type ItemProps };
