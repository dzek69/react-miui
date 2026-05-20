import React, { useCallback, useEffect, useState } from "react";

import { Modal } from "../../ui/modal/Modal";
import { ModalButtons } from "../../ui/modal/ModalButtons";
import {
    StyledWheelHighlight,
    StyledWheelsContainer,
    StyledWheelSeparator,
} from "./TimePicker.styled";
import { padTwo, parseTimeText } from "./utils";
import { Wheel } from "./Wheel";

interface Props {
    isOpen: boolean;
    /** Current input value, parsed to seed the wheels when the modal opens. */
    initialValue: string;
    withSeconds: boolean;
    minuteStep: number;
    secondStep: number;
    readOnly: boolean;
    title?: React.ReactNode;
    okLabel: React.ReactNode;
    cancelLabel: React.ReactNode;
    onClose: () => void;
    onConfirm: (value: string) => void;
}

const snapToStep = (v: number, step: number, max: number): number => {
    const snapped = Math.round(v / step) * step;
    return Math.min(snapped, max - (max % step === 0 ? step : max % step));
};

const TimePickerModal = ({
    isOpen,
    initialValue,
    withSeconds,
    minuteStep,
    secondStep,
    readOnly,
    title,
    okLabel,
    cancelLabel,
    onClose,
    onConfirm,
}: Props) => {
    const [draftHours, setDraftHours] = useState(0);
    const [draftMinutes, setDraftMinutes] = useState(0);
    const [draftSeconds, setDraftSeconds] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        const digits = parseTimeText(initialValue, withSeconds);
        const hh = digits.length >= 2 ? parseInt(digits.slice(0, 2), 10) : 0;
        const mmRaw = digits.length >= 4 ? parseInt(digits.slice(2, 4), 10) : 0;
        const ssRaw = digits.length >= 6 ? parseInt(digits.slice(4, 6), 10) : 0;
        setDraftHours(hh);
        setDraftMinutes(snapToStep(mmRaw, minuteStep, 60));
        setDraftSeconds(snapToStep(ssRaw, secondStep, 60));
    }, [isOpen, initialValue, withSeconds, minuteStep, secondStep]);

    const handleConfirm = useCallback(() => {
        const next = padTwo(draftHours) + ":" + padTwo(draftMinutes)
            + (withSeconds ? ":" + padTwo(draftSeconds) : "");
        onConfirm(next);
    }, [draftHours, draftMinutes, draftSeconds, withSeconds, onConfirm]);

    const handleWheelsKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !readOnly) {
            e.preventDefault();
            handleConfirm();
        }
    }, [readOnly, handleConfirm]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
        >
            <StyledWheelsContainer onKeyDown={handleWheelsKeyDown}>
                <Wheel
                    count={24}
                    step={1}
                    value={draftHours}
                    onChange={setDraftHours}
                    ariaLabel={"Hours"}
                    autoFocus={true}
                />
                <StyledWheelSeparator>{":"}</StyledWheelSeparator>
                <Wheel
                    count={60}
                    step={minuteStep}
                    value={draftMinutes}
                    onChange={setDraftMinutes}
                    ariaLabel={"Minutes"}
                />
                {withSeconds
                    ? (
                        <>
                            <StyledWheelSeparator>{":"}</StyledWheelSeparator>
                            <Wheel
                                count={60}
                                step={secondStep}
                                value={draftSeconds}
                                onChange={setDraftSeconds}
                                ariaLabel={"Seconds"}
                            />
                        </>
                    )
                    : null}
                <StyledWheelHighlight aria-hidden={true} />
            </StyledWheelsContainer>
            <ModalButtons>
                <ModalButtons.Button onClick={onClose}>
                    {cancelLabel}
                </ModalButtons.Button>
                {readOnly
                    ? null
                    : (
                        <ModalButtons.Button variant={"main"} onClick={handleConfirm}>
                            {okLabel}
                        </ModalButtons.Button>
                    )}
            </ModalButtons>
        </Modal>
    );
};

export { TimePickerModal };
