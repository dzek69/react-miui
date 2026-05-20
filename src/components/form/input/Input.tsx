import React, { useCallback, useId, useRef, useState } from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { useNativeValidity } from "../../../utils";
import { Suggestions } from "../Suggestions";
import {
    StyledInput,
    StyledInputContainer,
    StyledLabel,
    StyledPrefix,
    StyledSuffix,
    StyledWrapper,
} from "./Input.styled";

interface CustomProps<T extends string> {
    children?: never;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: boolean;
    label?: string;
    /**
     * When `true` (default), the label stays anchored to the top of the input.
     * When `false`, the label sits inside the input like a placeholder and floats up
     * on focus or when the input has a value.
     */
    pinnedLabel?: boolean;
    suggestions?: Array<Value<T>>;
    onSuggestionMatch?: (value: Exclude<Value<T>, ObjectValue>, __chromiumPickedFromList: boolean) => void;
}

type Props<T extends string> = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> & CustomProps<T>;

/**
 * Input component.
 */
const InputInner = <T extends string>({ // eslint-disable-line max-lines-per-function
    className, children,
    prefix, suffix,
    onFocus, onBlur, onKeyDown, onChange,
    suggestions,
    onSuggestionMatch,
    error,
    label,
    pinnedLabel = true,
    placeholder,
    id,
    ...props
}: Props<T>, ref: React.Ref<HTMLInputElement>) => {
    const [focused, setFocused] = useState(false);
    const [internalHasValue, setInternalHasValue] = useState(() => {
        return Boolean(props.value ?? props.defaultValue);
    });
    const isControlled = props.value !== undefined;
    const hasValue = isControlled ? Boolean(props.value) : internalHasValue;

    const validity = useNativeValidity(error);

    const suggestionsId = useId();
    const generatedInputId = useId();
    const inputId = id ?? (label ? generatedInputId : undefined);
    const infoRef = useRef<{ picked?: boolean }>({});

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        validity.onBlur(e);
        onBlur?.(e);
    }, [onBlur, validity]);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (e.code === undefined) { // pick from list on Chromium browsers
            infoRef.current.picked = true;
        }
        onKeyDown?.(e);
    }, [onKeyDown]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (!isControlled) {
            setInternalHasValue(Boolean(e.currentTarget.value));
        }
        validity.onChange(e);
        if (!suggestions) {
            onChange?.(e);
            return;
        }
        const val = e.currentTarget.value;
        const matched = suggestions.find(s => {
            if (typeof s === "string") {
                return s === val;
            }
            return s.value === val;
        });
        if (matched) {
            onSuggestionMatch?.(val as Exclude<Value<T>, ObjectValue>, Boolean(infoRef.current.picked));
        }
        infoRef.current.picked = false;
        onChange?.(e);
    }, [isControlled, suggestions, onChange, onSuggestionMatch, validity]);

    const prefixElem = prefix ? <StyledPrefix>{prefix}</StyledPrefix> : null;
    const suffixElem = suffix ? <StyledSuffix>{suffix}</StyledSuffix> : null;

    const extraProps: { list?: string } = {};
    if (suggestions) {
        extraProps.list = suggestionsId;
    }

    const floating = Boolean(label) && (pinnedLabel || focused || hasValue);
    const showPlaceholder = !label || floating;
    const effectivePlaceholder = showPlaceholder ? placeholder : undefined;

    const labelElem = label
        ? (
            <StyledLabel
                htmlFor={inputId}
                floating={floating}
                error={validity.finalError}
            >
                {label}
            </StyledLabel>
        )
        : null;

    return (
        <StyledWrapper
            className={className}
            focused={focused}
            disabled={Boolean(props.disabled)}
            readOnly={Boolean(props.readOnly)}
            error={validity.finalError}
        >
            {prefixElem}
            <StyledInputContainer>
                {labelElem}
                <StyledInput
                    ref={ref}
                    {...props}
                    {...extraProps}
                    id={inputId}
                    placeholder={effectivePlaceholder}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onInvalid={validity.onInvalid}
                    data-error={validity.finalError}
                />
                <Suggestions id={suggestionsId} suggestions={suggestions} />
            </StyledInputContainer>
            {suffixElem}
        </StyledWrapper>
    );
};

const InputRef = React.forwardRef(InputInner);
InputRef.displayName = "Input";
InputRef.toString = () => StyledWrapper.toString();

const Input = InputRef as <T extends string>(
    props: Props<T> & React.RefAttributes<HTMLInputElement>,
) => React.ReactElement;

const InputContainerSelector = StyledInputContainer.toString();
const InputLabelSelector = StyledLabel.toString();
const InputInputSelector = StyledInput.toString();
const InputPrefixSelector = StyledPrefix.toString();
const InputSuffixSelector = StyledSuffix.toString();

export {
    Input,
    InputContainerSelector,
    InputLabelSelector,
    InputInputSelector,
    InputPrefixSelector,
    InputSuffixSelector,
};

export type {
    Props as InputProps,
    CustomProps as InputCustomProps,
};
