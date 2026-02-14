import React, { forwardRef, useCallback } from "react";

import type { ThemeCSS } from "../../theme";

import { contrastColor } from "../utils/colors";
import { ColorDisplay, LabelWrapper } from "./ColorPicker.styled";

type WrapperProps = React.ComponentProps<typeof LabelWrapper>;
type ColorDisplayProps = React.ComponentProps<typeof ColorDisplay>;
type InputProps = React.ComponentProps<"input">;

type ColorPickerProps = Partial<Pick<WrapperProps, "css" | "className">>
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
const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(({
    error,
    css,
    className,
    variant,
    label,
    value = "transparent",
    children, // just extract children, so they are not passed down to the input
    onChange,
    ...inputProps
}, ref) => {
    const style: ThemeCSS = {
        "--selected-color": value,
        ...(value.startsWith("#") ? { color: contrastColor(value) } : {}),
    };

    const wrapperProps: {
        css?: NonNullable<typeof css>; className?: typeof className;
    } = { className };
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
                ref={ref}
                {...inputProps}
            />
            <ColorDisplay css={style} variant={variant!}>
                {label}
            </ColorDisplay>
        </LabelWrapper>
    );
});

ColorPicker.displayName = "ColorPicker";
ColorPicker.toString = () => LabelWrapper.toString();

const ColorPickerColorDisplaySelector = ColorDisplay.toString();

export { ColorPicker, ColorPickerColorDisplaySelector };
export type { ColorPickerProps };
