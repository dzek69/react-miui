import type { ChangeEvent } from "react";
import React, { useCallback } from "react";

import { StyledContainer, StyledToggle } from "./Toggle.styled";

type ContainerProps = React.ComponentProps<typeof StyledContainer>;

interface Props extends Partial<Pick<ContainerProps, "css" | "className">> {
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
}

const Toggle: React.FC<Props> = (props) => {
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
            />
            <StyledToggle />
        </StyledContainer>
    );
};

export { Toggle };

export type {
    Props as ToggleProps,
};
