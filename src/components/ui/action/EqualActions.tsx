import React, { forwardRef } from "react";

import type { ThemeCSS } from "../../../theme";

import { Action } from "./Action";
import { StyledEqualActions } from "./EqualActions.styled";

type EqualActionsProps = {
    className?: string;
    mode?: "horizontal" | "vertical";
    children: React.ReactNode;
};

const EqualActions = forwardRef<HTMLDivElement, EqualActionsProps>((props, ref) => {
    React.Children.forEach(props.children, (child) => {
        if (!child || typeof child !== "object" || !("type" in child) || child.type !== Action) {
            throw new TypeError("Every child of EqualActions must be an Action component");
        }
    });

    const style: ThemeCSS = {
        "--actions-count": React.Children.count(props.children),
    };

    const isVertical = props.mode === "vertical";

    return (
        <StyledEqualActions
            className={props.className}
            vertical={isVertical}
            css={style}
            ref={ref}
        >
            {props.children}
        </StyledEqualActions>
    );
});

EqualActions.displayName = "EqualActions";
EqualActions.toString = () => StyledEqualActions.toString();

export { EqualActions };
export type { EqualActionsProps };
