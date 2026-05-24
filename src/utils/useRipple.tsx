import React, { useCallback, useRef, useState } from "react";

type Ripple = {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
};

const HALF = 2;
const RIPPLE_SPEED_PX_PER_MS = 1.5;
const RIPPLE_MIN_DURATION_MS = 250;

const prefersReducedMotion = (): boolean => {
    if (typeof window === "undefined") {
        return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const isDisabled = (el: HTMLElement): boolean => {
    if ("disabled" in el && (el as HTMLButtonElement).disabled) {
        return true;
    }
    return el.getAttribute("aria-disabled") === "true";
};

const isRippleDisabledByCssVar = (el: HTMLElement): boolean => {
    if (typeof window === "undefined") {
        return false;
    }
    return window.getComputedStyle(el).getPropertyValue("--miui-ripple").trim() === "0";
};

type UseRippleArgs<T extends HTMLElement> = {
    ref: React.RefObject<T | null>;
    onPointerDown?: React.PointerEventHandler<T> | undefined;
    onKeyDown?: React.KeyboardEventHandler<T> | undefined;
    /**
     * If true, the ripple always emanates from the element's center,
     * regardless of pointer position.
     */
    fromCenter?: boolean | undefined;
};

type UseRippleResult<T extends HTMLElement> = {
    onPointerDown: React.PointerEventHandler<T>;
    onKeyDown: React.KeyboardEventHandler<T>;
    ripples: React.ReactNode;
};

/**
 * Adds an Android-style ripple effect to an element.
 *
 * Pair with `rippleHostStyles` spread into the host's styled definition.
 *
 * - Triggered by pointer (mouse/touch/pen) and keyboard (Enter/Space — emanates from center).
 * - Skipped when the host is `disabled` / `aria-disabled` or when `prefers-reduced-motion: reduce`.
 * - Ripple duration scales with size (constant px/ms) so big and small elements feel the same.
 */
// eslint-disable-next-line max-lines-per-function
const useRipple = <T extends HTMLElement>(args: UseRippleArgs<T>): UseRippleResult<T> => {
    const { ref, onPointerDown, onKeyDown, fromCenter = false } = args;
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const idCounter = useRef(0);

    const addRippleAt = useCallback((clientX: number, clientY: number) => {
        const el = ref.current;
        if (!el || isDisabled(el) || prefersReducedMotion() || isRippleDisabledByCssVar(el)) {
            return;
        }
        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const maxX = Math.max(x, rect.width - x);
        const maxY = Math.max(y, rect.height - y);
        const size = Math.hypot(maxX, maxY) * HALF;
        const duration = Math.max(RIPPLE_MIN_DURATION_MS, size / RIPPLE_SPEED_PX_PER_MS);
        idCounter.current += 1;
        const id = idCounter.current;
        setRipples((arr) => [...arr, { id, x, y, size, duration }]);
    }, [ref]);

    const handlePointerDown = useCallback<React.PointerEventHandler<T>>((evt) => {
        if (fromCenter) {
            const el = ref.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                addRippleAt(rect.left + (rect.width / HALF), rect.top + (rect.height / HALF));
            }
        }
        else {
            addRippleAt(evt.clientX, evt.clientY);
        }
        onPointerDown?.(evt);
    }, [addRippleAt, onPointerDown, fromCenter, ref]);

    const handleKeyDown = useCallback<React.KeyboardEventHandler<T>>((evt) => {
        if (!evt.repeat && (evt.key === "Enter" || evt.key === " ")) {
            const el = ref.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                addRippleAt(rect.left + (rect.width / HALF), rect.top + (rect.height / HALF));
            }
        }
        onKeyDown?.(evt);
    }, [addRippleAt, ref, onKeyDown]);

    const handleAnimationEnd = useCallback<React.AnimationEventHandler<HTMLSpanElement>>((evt) => {
        const id = Number(evt.currentTarget.dataset.rippleId);
        setRipples((arr) => arr.filter((r) => r.id !== id));
    }, []);

    const elements = ripples.map((r) => (
        <span
            key={r.id}
            data-miui-ripple={true}
            data-ripple-id={r.id}
            aria-hidden={true}
            style={{
                left: `${String(r.x - (r.size / HALF))}px`,
                top: `${String(r.y - (r.size / HALF))}px`,
                width: `${String(r.size)}px`,
                height: `${String(r.size)}px`,
                animationDuration: `${String(r.duration)}ms`,
            }}
            onAnimationEnd={handleAnimationEnd}
        />
    ));

    return {
        onPointerDown: handlePointerDown,
        onKeyDown: handleKeyDown,
        ripples: elements,
    };
};

export { useRipple };
