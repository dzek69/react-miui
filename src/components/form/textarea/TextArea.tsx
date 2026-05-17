import React, { forwardRef, useCallback, useId, useState } from "react";

import { StyledLabel, StyledTextArea, StyledTextAreaWrapper } from "./TextArea.styled";

interface Props {
    children?: never;
    error?: boolean;
    label?: string;
    /**
     * When `true` (default), the label stays anchored to the top of the textarea.
     * When `false`, the label sits inside the textarea like a placeholder and floats up
     * on focus or when the textarea has a value.
     */
    pinnedLabel?: boolean;
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

// eslint-disable-next-line max-lines-per-function
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    children,
    className,
    onFocus, onBlur, onChange,
    error,
    label,
    pinnedLabel = true,
    placeholder,
    id,
    ...props
}, ref) => {
    const [focused, setFocused] = useState(false);
    const [internalHasValue, setInternalHasValue] = useState(() => {
        return Boolean(props.value ?? props.defaultValue);
    });
    const isControlled = props.value !== undefined;
    const hasValue = isControlled ? Boolean(props.value) : internalHasValue;

    const generatedInputId = useId();
    const inputId = id ?? (label ? generatedInputId : undefined);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);
        onBlur?.(e);
    }, [onBlur]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
            setInternalHasValue(Boolean(e.currentTarget.value));
        }
        onChange?.(e);
    }, [isControlled, onChange]);

    const floating = Boolean(label) && (pinnedLabel || focused || hasValue);
    const showPlaceholder = !label || floating;
    const effectivePlaceholder = showPlaceholder ? placeholder : undefined;

    const labelElem = label
        ? (
            <StyledLabel
                htmlFor={inputId}
                floating={floating}
                error={Boolean(error)}
            >
                {label}
            </StyledLabel>
        )
        : null;

    return (
        <StyledTextAreaWrapper
            className={className}
            focused={focused}
            disabled={Boolean(props.disabled)}
            readOnly={Boolean(props.readOnly)}
            error={Boolean(error)}
        >
            {labelElem}
            <StyledTextArea
                {...props}
                ref={ref}
                id={inputId}
                placeholder={effectivePlaceholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                data-error={Boolean(error)}
            />
        </StyledTextAreaWrapper>
    );
});

TextArea.displayName = "TextArea";
TextArea.toString = () => StyledTextAreaWrapper.toString();

const TextAreaWrapperSelector = StyledTextAreaWrapper.toString();
const TextAreaTextAreaSelector = StyledTextArea.toString();
const TextAreaLabelSelector = StyledLabel.toString();

export {
    TextArea,
    TextAreaWrapperSelector,
    TextAreaTextAreaSelector,
    TextAreaLabelSelector,
};
export type { TextAreaProps };
