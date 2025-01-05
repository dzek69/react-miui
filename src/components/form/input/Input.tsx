import React, { useCallback, useId, useState } from "react";

import type { ObjectValue, Value } from "../../../types/form";

import { Suggestions } from "../Suggestions";

import { StyledInput, StyledWrapper, StyledPrefix, StyledSuffix } from "./Input.styled";

import styles from "./Input.module.scss";

interface CustomProps<T extends string> {
    children?: never;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: boolean;
    suggestions?: Value<T>[];
    onSuggestionMatch?: (value: Exclude<Value<T>, ObjectValue>, __chromiumPickedFromList: boolean) => void;
}

type Props<T extends string> = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> & CustomProps<T>;

/**
 * Input component.
 */
const Input = <T extends string>({ // eslint-disable-line max-lines-per-function
    className, children,
    prefix, suffix,
    onFocus, onBlur, onKeyDown, onChange,
    suggestions,
    onSuggestionMatch,
    ...props
}: Props<T>): ReturnType<React.FC<Props<T>>> => {
    const [focused, setFocused] = useState(false);
    const suggestionsId = useId();
    const [info] = useState<{ picked?: boolean }>({});

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
    }, [onBlur]);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (e.code === undefined) { // pick from list on Chromium browsers
            info.picked = true;
        }
        onKeyDown?.(e);
    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
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
            onSuggestionMatch?.(val as Exclude<Value<T>, ObjectValue>, Boolean(info.picked));
        }
        info.picked = false;
        onChange?.(e);
    }, [suggestions, onChange]);

    const prefixElem = prefix ? <StyledPrefix>{prefix}</StyledPrefix> : null;
    const suffixElem = suffix ? <StyledSuffix>{suffix}</StyledSuffix> : null;

    const extraProps: { list?: string } = {};
    if (suggestions) {
        extraProps.list = suggestionsId;
    }

    return (
        <StyledWrapper
            className={className}
            focused={Boolean(focused)}
            disabled={Boolean(props.disabled)}
            readOnly={Boolean(props.readOnly)}
            error={Boolean(props.error)}
        >
            {prefixElem}
            <StyledInput
                {...props}
                {...extraProps}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.input}
            />
            <Suggestions id={suggestionsId} suggestions={suggestions} />
            {suffixElem}
        </StyledWrapper>
    );
};

export {
    Input,
};

export type {
    Props as InputProps,
    CustomProps as InputCustomProps,
};
