import React, {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useState,
} from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import { useNativeValidity } from "../../../utils/useNativeValidity";
import { Clock } from "../../icons/Clock";
import {
    StyledInputContainer,
    StyledLabel,
    StyledSuffix,
    StyledWrapper,
} from "../input/Input.styled";
import {
    StyledSuffixButton,
    StyledTimeInput,
} from "./TimePicker.styled";
import { TimePickerModal } from "./TimePickerModal";

const PATTERN_HHMM = "(?:[01]\\d|2[0-3]):[0-5]\\d";
const PATTERN_HHMMSS = "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
const MAX_LEN_HHMM = 5;
const MAX_LEN_HHMMSS = 8;

const assertStep = (name: string, step: number): void => {
    if (!Number.isInteger(step) || step < 1 || step > 60) {
        throw new Error(
            `TimePicker: \`${name}\` must be an integer between 1 and 60, got ${String(step)}`,
        );
    }
};

interface CustomProps {
    children?: never;
    label?: string;
    pinnedLabel?: boolean;
    error?: boolean;
    withSeconds?: boolean;
    minuteStep?: number;
    secondStep?: number;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    modalTitle?: React.ReactNode;
    okLabel?: React.ReactNode;
    cancelLabel?: React.ReactNode;
}

type InputAttrs = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue" | "onChange" | "type" | "prefix" | "pattern" | "placeholder" | "maxLength"
>;

type Props = InputAttrs & CustomProps;

// eslint-disable-next-line max-lines-per-function,max-statements
const TimePickerInner = ({
    className,
    label,
    pinnedLabel = false,
    error,
    withSeconds = false,
    minuteStep = 1,
    secondStep = 1,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled,
    readOnly,
    id,
    modalTitle,
    okLabel = "OK",
    cancelLabel = "Cancel",
    ...rest
}: Props, ref: React.Ref<HTMLInputElement>) => {
    assertStep("minuteStep", minuteStep);
    if (withSeconds) {
        assertStep("secondStep", secondStep);
    }

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = isControlled ? (value ?? "") : internalValue;

    const [focused, setFocused] = useState(false);
    const validity = useNativeValidity(error);
    const { revalidate } = validity;
    const inputRef = useForwardedRef(ref);
    const generatedId = useId();
    const inputId = id ?? (label ? generatedId : undefined);

    const [modalOpen, setModalOpen] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        if (!isControlled) {
            setInternalValue(next);
        }
        validity.onChange(e);
        onChange?.(next);
    }, [isControlled, onChange, validity]);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        validity.onBlur(e);
        onBlur?.(e);
    }, [onBlur, validity]);

    useEffect(() => {
        revalidate(inputRef.current);
    }, [currentValue, revalidate, inputRef]);

    const openModal = useCallback(() => {
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        inputRef.current?.focus();
    }, [inputRef]);

    const confirmModal = useCallback((next: string) => {
        if (!isControlled) {
            setInternalValue(next);
        }
        onChange?.(next);
        setModalOpen(false);
        inputRef.current?.focus();
    }, [isControlled, onChange, inputRef]);

    const hasValue = currentValue.length > 0;
    const floating = Boolean(label) && (pinnedLabel || focused || hasValue);
    const placeholder = withSeconds ? "--:--:--" : "--:--";
    const pattern = withSeconds ? PATTERN_HHMMSS : PATTERN_HHMM;
    const maxLength = withSeconds ? MAX_LEN_HHMMSS : MAX_LEN_HHMM;
    const finalError = validity.finalError;

    const labelElem = label
        ? (
            <StyledLabel
                htmlFor={inputId}
                floating={floating}
                error={finalError}
            >
                {label}
            </StyledLabel>
        )
        : null;

    return (
        <>
            <StyledWrapper
                className={className}
                focused={focused}
                disabled={Boolean(disabled)}
                readOnly={Boolean(readOnly)}
                error={finalError}
            >
                <StyledInputContainer>
                    {labelElem}
                    <StyledTimeInput
                        ref={inputRef}
                        {...rest}
                        id={inputId}
                        type={"text"}
                        inputMode={"numeric"}
                        autoComplete={"off"}
                        value={currentValue}
                        placeholder={placeholder}
                        pattern={pattern}
                        maxLength={maxLength}
                        disabled={disabled}
                        readOnly={readOnly}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onInvalid={validity.onInvalid}
                        data-error={finalError}
                    />
                </StyledInputContainer>
                <StyledSuffix>
                    <StyledSuffixButton
                        type={"button"}
                        onClick={openModal}
                        disabled={disabled}
                        aria-label={"Open time picker"}
                    >
                        <Clock />
                    </StyledSuffixButton>
                </StyledSuffix>
            </StyledWrapper>
            <TimePickerModal
                isOpen={modalOpen}
                initialValue={currentValue}
                withSeconds={withSeconds}
                minuteStep={minuteStep}
                secondStep={secondStep}
                readOnly={Boolean(readOnly)}
                title={modalTitle}
                okLabel={okLabel}
                cancelLabel={cancelLabel}
                onClose={closeModal}
                onConfirm={confirmModal}
            />
        </>
    );
};

const TimePickerRef = forwardRef(TimePickerInner);
TimePickerRef.displayName = "TimePicker";
TimePickerRef.toString = () => StyledWrapper.toString();

const TimePicker = TimePickerRef;

export { TimePicker };

export type { Props as TimePickerProps };
