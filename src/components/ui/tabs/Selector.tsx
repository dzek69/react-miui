import React, { forwardRef, useCallback, useEffect, useState } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import type { Value } from "../../../types/form";

import { toObjectValue } from "../../../utils";
import { Item } from "./Item";
import { Arrow, Root, Wrapper } from "./Selector.styled";

type SelectorProps = {
    values: Array<Value<string>>;
    value?: string;
    onChange?: (value: string) => void;
    multiLine?: boolean;
    className?: string;
};

const FADE_SIZE = "62px";
const fadeRight = `linear-gradient(to right, black calc(100% - ${FADE_SIZE}), transparent)`;
const fadeLeft = `linear-gradient(to left, black calc(100% - ${FADE_SIZE}), transparent)`;
const fadeBoth = [
    `linear-gradient(to right, transparent, black ${FADE_SIZE}, black calc(100% - ${FADE_SIZE}), transparent)`,
].join("");

const useScrollIndicators = (
    ref: React.MutableRefObject<HTMLDivElement>,
    enabled: boolean,
) => {
    const [showRight, setShowRight] = useState(false);
    const [showLeft, setShowLeft] = useState(false);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const el = ref.current;

        const update = () => {
            const canScroll = el.scrollWidth > el.clientWidth;
            const atStart = el.scrollLeft <= 1;
            const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
            const right = canScroll && !atEnd;
            const left = canScroll && !atStart;
            setShowRight(right);
            setShowLeft(left);

            let mask = "";
            if (left && right) { mask = fadeBoth; }
            else if (right) { mask = fadeRight; }
            else if (left) { mask = fadeLeft; }
            el.style.maskImage = mask;
        };

        update();
        el.addEventListener("scroll", update, { passive: true });

        const ro = new ResizeObserver(update);
        ro.observe(el);

        return () => {
            el.removeEventListener("scroll", update);
            ro.disconnect();
        };
    }, [ref, enabled]);

    return { showRight, showLeft };
};

const Selector = forwardRef<HTMLDivElement, SelectorProps>((props, ref) => {
    const innerRef = useForwardedRef(ref);
    const [current, setCurrent] = useState(props.value);
    const { showRight, showLeft } = useScrollIndicators(innerRef, props.multiLine === false);

    const { onChange } = props;

    const handleCurrent = useCallback((value: string) => {
        setCurrent(value);
        onChange?.(value);
    }, [onChange]);

    const crr = props.value ?? current;

    const vals = props.values.map(v => {
        const ov = toObjectValue(v);
        return <Item key={ov.value} value={ov} onClick={handleCurrent} active={crr === ov.value} />;
    });

    const multiLineVariant = props.multiLine != null ? { multiLine: props.multiLine } : {};

    const root = (
        <Root ref={innerRef} className={props.className} {...multiLineVariant}>{vals}</Root>
    );

    if (props.multiLine === false) {
        return (
            <Wrapper>
                <Arrow side={"left"} visible={showLeft}>{"‹"}</Arrow>
                {root}
                <Arrow side={"right"} visible={showRight}>{"›"}</Arrow>
            </Wrapper>
        );
    }

    return root;
});

Selector.displayName = "Selector";
Selector.toString = () => Root.toString();

const SelectorItemSelector = Item.toString();

export type { SelectorProps };
export { Selector, SelectorItemSelector };
