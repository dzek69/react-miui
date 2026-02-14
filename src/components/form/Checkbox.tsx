import React, { forwardRef, useCallback } from "react";

import type { ThemeCSS } from "../../theme";

import { Checkmark } from "../icons/Checkmark";
import { CheckmarkWrapper, LabelWrapper, TextLabel } from "./Checkbox.styled";

type LabelWrapperProps = React.ComponentProps<typeof LabelWrapper>;
type InputProps = React.ComponentProps<"input">;

type CheckboxProps = Partial<Pick<LabelWrapperProps, "css" | "className">>
    & Omit<InputProps, "className"> & {
        /**
         * @deprecated use --color css variable instead
         */
        color?: string;
        children: React.ReactNode;
        error?: boolean;
    };

/**
 * Checkbox component
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({

    color, error, name, onChange, children, css, className, ...inputProps
}, ref) => {
    const style: ThemeCSS = {};
    color && (style["--color"] = color);

    const wrapperProps: { css?: NonNullable<typeof css>; className?: typeof className } = { className };
    if (css) {
        wrapperProps.css = css;
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (inputProps.readOnly) {
            // eslint-disable-next-line no-param-reassign
            e.currentTarget.checked = !e.currentTarget.checked;
            return;
        }
        onChange?.(e);
    }, [inputProps.readOnly, onChange]);

    return (
        <LabelWrapper {...wrapperProps}>
            <input
                type={"checkbox"}
                name={name}
                onChange={handleChange}
                data-error={error}
                ref={ref}
                {...inputProps}
            />
            <CheckmarkWrapper css={style}><Checkmark /></CheckmarkWrapper>
            <TextLabel>{children}</TextLabel>
        </LabelWrapper>
    );
});

Checkbox.displayName = "Checkbox";
Checkbox.toString = () => LabelWrapper.toString();

const CheckboxCheckmarkWrapperSelector = CheckmarkWrapper.toString();
const CheckboxTextLabelSelector = TextLabel.toString();

export { Checkbox, CheckboxCheckmarkWrapperSelector, CheckboxTextLabelSelector };
export type { CheckboxProps };
