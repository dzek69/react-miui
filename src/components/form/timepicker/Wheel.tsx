import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";

import {
    StyledWheelFocusRing,
    StyledWheelItem,
    StyledWheelPadder,
    StyledWheelViewport,
    StyledWheelWrapper,
} from "./TimePicker.styled";
import { padTwo } from "./utils";

interface Props {
    count: number;
    step: number;
    value: number;
    onChange: (v: number) => void;
    ariaLabel: string;
    autoFocus?: boolean;
}

const PAGE_JUMP = 3;

const Wheel = ({ count, step, value, onChange, ariaLabel, autoFocus = false }: Props) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);
    const itemHeightRef = useRef<number>(0);
    const scrollRafRef = useRef<number | null>(null);
    const valueRef = useRef(value);
    valueRef.current = value;

    const items = Math.ceil(count / step);
    const lastValue = (items - 1) * step;

    const valueToIndex = useCallback((v: number) => {
        const idx = Math.round(v / step);
        if (idx < 0) {
            return 0;
        }
        if (idx >= items) {
            return items - 1;
        }
        return idx;
    }, [items, step]);

    const scrollToValue = useCallback((v: number, behavior: ScrollBehavior) => {
        const vp = viewportRef.current;
        const h = itemHeightRef.current;
        if (!vp || h === 0) {
            return;
        }
        const idx = valueToIndex(v);
        vp.scrollTo({ top: idx * h, behavior });
    }, [valueToIndex]);

    useLayoutEffect(() => {
        const item = itemRef.current;
        if (!item) {
            return;
        }
        itemHeightRef.current = item.getBoundingClientRect().height;
        scrollToValue(valueRef.current, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const item = itemRef.current;
        if (!item || typeof ResizeObserver === "undefined") {
            return;
        }
        const ro = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) {
                return;
            }
            const h = entry.contentRect.height;
            if (h > 0 && h !== itemHeightRef.current) {
                itemHeightRef.current = h;
                scrollToValue(valueRef.current, "auto");
            }
        });
        ro.observe(item);
        return () => {
            ro.disconnect();
        };
    }, [scrollToValue]);

    useEffect(() => {
        const vp = viewportRef.current;
        const h = itemHeightRef.current;
        if (!vp || h === 0) {
            return;
        }
        const currentIdx = Math.round(vp.scrollTop / h);
        const desiredIdx = valueToIndex(value);
        if (currentIdx !== desiredIdx) {
            scrollToValue(value, "smooth");
        }
    }, [value, valueToIndex, scrollToValue]);

    const handleScroll = useCallback(() => {
        const vp = viewportRef.current;
        if (!vp) {
            return;
        }
        if (scrollRafRef.current != null) {
            cancelAnimationFrame(scrollRafRef.current);
        }
        scrollRafRef.current = requestAnimationFrame(() => {
            scrollRafRef.current = null;
            const vpInner = viewportRef.current;
            const h = itemHeightRef.current;
            if (!vpInner || h === 0) {
                return;
            }
            const rawIdx = Math.round(vpInner.scrollTop / h);
            const clamped = Math.max(0, Math.min(items - 1, rawIdx));
            const newValue = clamped * step;
            if (newValue !== valueRef.current) {
                onChange(newValue);
            }
        });
    }, [items, step, onChange]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        let next: number;
        switch (e.key) {
            case "ArrowDown":
                next = valueRef.current + step;
                break;
            case "ArrowUp":
                next = valueRef.current - step;
                break;
            case "PageDown":
                next = valueRef.current + (step * PAGE_JUMP);
                break;
            case "PageUp":
                next = valueRef.current - (step * PAGE_JUMP);
                break;
            case "Home":
                next = 0;
                break;
            case "End":
                next = lastValue;
                break;
            default:
                return;
        }
        e.preventDefault();
        const clamped = Math.max(0, Math.min(lastValue, next));
        if (clamped !== valueRef.current) {
            onChange(clamped);
        }
    }, [step, lastValue, onChange]);

    useEffect(() => () => {
        if (scrollRafRef.current != null) {
            cancelAnimationFrame(scrollRafRef.current);
        }
    }, []);

    useEffect(() => {
        if (autoFocus) {
            viewportRef.current?.focus({ preventScroll: true });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const itemElems: React.ReactElement[] = [];
    for (let i = 0; i < items; i++) {
        const v = i * step;
        itemElems.push(
            <StyledWheelItem key={i} ref={i === 0 ? itemRef : undefined}>
                {padTwo(v)}
            </StyledWheelItem>,
        );
    }

    return (
        <StyledWheelWrapper>
            <StyledWheelViewport
                ref={viewportRef}
                onScroll={handleScroll}
                onKeyDown={handleKeyDown}
                role={"spinbutton"}
                aria-label={ariaLabel}
                aria-valuemin={0}
                aria-valuemax={lastValue}
                aria-valuenow={value}
                aria-valuetext={padTwo(value)}
                tabIndex={0}
            >
                <StyledWheelPadder />
                {itemElems}
                <StyledWheelPadder />
            </StyledWheelViewport>
            <StyledWheelFocusRing aria-hidden={true} />
        </StyledWheelWrapper>
    );
};

export { Wheel };
