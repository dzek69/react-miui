import type { ChangeEvent } from "react";
import React, { forwardRef, useCallback } from "react";

import { StyledContainer, StyledToggle } from "./Toggle.styled";

type ContainerProps = React.ComponentProps<typeof StyledContainer>;

type ToggleProps = Partial<Pick<ContainerProps, "css" | "className">> & {
    onChange: (newValue: boolean) => void;
    onContextMenu?: React.MouseEventHandler;
    /**
     * If the toggle is in an undetermined state (value is null),
     * clicking it will change the value to this.
     */
    undeterminedClickValue?: boolean;
    /**
     * If true, the toggle is disabled and cannot be interacted with.
     */
    disabled?: boolean;
    value: boolean | null;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
    const { onChange, onContextMenu, undeterminedClickValue, disabled, value, ...rest } = props;

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (value == null) {
            if (typeof undeterminedClickValue === "boolean") {
                onChange(undeterminedClickValue);
            }
            return;
        }
        onChange(e.target.checked);
    }, [onChange, value, undeterminedClickValue]);

    return (
        <StyledContainer
            {...rest}
            disabled={Boolean(disabled)}
            onContextMenu={onContextMenu}
        >
            <input
                type={"checkbox"}
                checked={Boolean(value)}
                data-undetermined={value == null}
                readOnly={value == null}
                disabled={disabled}
                onChange={handleChange}
                ref={ref}
            />
            <StyledToggle />
        </StyledContainer>
    );
});

Toggle.displayName = "Toggle";
Toggle.toString = () => StyledContainer.toString();

const ToggleStyledToggleSelector = StyledToggle.toString();

export { Toggle, ToggleStyledToggleSelector };
export type { ToggleProps };
