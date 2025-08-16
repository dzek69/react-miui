import React, { useCallback } from "react";

import type { ThemeCSS } from "../../theme";

import { contrastColor } from "../utils/colors";

import { ColorDisplay, LabelWrapper } from "./ColorPicker.styled";

type WrapperProps = React.ComponentProps<typeof LabelWrapper>;
type ColorDisplayProps = React.ComponentProps<typeof ColorDisplay>;
type InputProps = React.ComponentProps<"input">;

type Props = Partial<Pick<WrapperProps, "css" | "className">>
& Omit<InputProps, "className" | "type" | "value">
& Pick<ColorDisplayProps, "variant">
& {
    children?: never;
    error?: boolean;
    label?: string;
    value?: string;
};

/**
 * ColorPicker component that uses native color input but with custom styling
 */
const ColorPicker: React.FC<Props> = ({
    error,
    css,
    className,
    variant,
    label,
    value = "transparent",
    children, // just extract children, so they are not passed down to the input
    onChange,
    ...inputProps
}) => {
    const style: ThemeCSS = {
        "--selected-color": value,
        ...(value.startsWith("#") ? { color: contrastColor(value) } : {}),
    };

    const wrapperProps: { css?: NonNullable<typeof css>; className?: typeof className } = {
        className: className,
    };
    if (css) {
        wrapperProps.css = css;
    }

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputProps.readOnly) {
            return;
        }
        onChange?.(e);
    }, [inputProps.readOnly, onChange]);

    return (
        <LabelWrapper {...wrapperProps} data-error={error}>
            <input
                type={"color"}
                value={value}
                onChange={handleChange}
                {...inputProps}
            />
            <ColorDisplay css={style} variant={variant!}>
                {label}
            </ColorDisplay>
        </LabelWrapper>
    );
};

export { ColorPicker };
