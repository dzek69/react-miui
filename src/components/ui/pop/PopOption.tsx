import React, { forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { useRipple } from "../../../utils/useRipple";
import { Button, FakeIcon, Icon, ListItem } from "./Pop.styled";

interface Props {
    icon?: React.ReactElement;
    forceEmptyIcon?: boolean;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const PopOption = forwardRef<HTMLLIElement, Props>((props, ref) => {
    const buttonRef = useForwardedRef<HTMLButtonElement | null>(null);
    const ripple = useRipple({ ref: buttonRef });

    const ic = props.icon
        ? <Icon>{props.icon}</Icon>
        : ((props.forceEmptyIcon ?? true) ? <FakeIcon /> : null);

    return (
        <ListItem ref={ref} className={props.className}>
            <Button
                ref={buttonRef}
                onClick={props.onClick}
                onPointerDown={ripple.onPointerDown}
                onKeyDown={ripple.onKeyDown}
            >
                {ic}{props.children}
                {ripple.ripples}
            </Button>
        </ListItem>
    );
});

PopOption.displayName = "PopOption";
PopOption.toString = () => ListItem.toString();

const PopOptionButtonSelector = Button.toString();
const PopOptionIconSelector = Icon.toString();

export { PopOption, PopOptionButtonSelector, PopOptionIconSelector };
