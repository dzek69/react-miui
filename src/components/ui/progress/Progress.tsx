import React, { forwardRef } from "react";

import { cap, scale } from "@ezez/utils";

import type { ThemeCSS } from "../../../theme";

import { fnWithProps } from "../../../types/fnWithProps";

import { Background, Container, Value } from "./Progress.styled";

type ProgressProps = React.ComponentProps<typeof Container> & {
    /**
     * The value of the progress bar. If used alone, it's the percentage value of the progress bar.
     */
    value?: number | undefined;
    /**
     * Value from which the value bar starts. Default is equal to `scaleFrom`.
     */
    valueFrom?: number;
    /**
     * Redefines the scale of the progress bar. By default, the scale is 0-100. This controls the starting point of the progress bar.
     */
    scaleFrom?: number;
    /**
     * Redefines the scale of the progress bar. By default, the scale is 0-100. This controls the ending point of the progress bar.
     */
    scaleTo?: number;
};

type Selectors = {
    selectors: {
        background: string;
        value: string;
    };
};

/**
 * Progress bar component, it can be filled from the start or from any arbitrary point.
 *
 * At the moment, no value (undefined) means starting point, but in the future it will mean "undetermined" state.
 */
const ProgressBase = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const { value, valueFrom, scaleFrom = 0, scaleTo = 100, ...rest } = props;

    const from = cap(valueFrom ?? scaleFrom, scaleTo, scaleFrom);
    const to = cap(value ?? scaleFrom, scaleTo, scaleFrom);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const scaledFrom = valueFrom != null ? scale(scaleFrom, scaleTo, 0, 100, from) : 0;
    const percFrom = Math.max(scaledFrom, 0);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const scaledTo = value != null ? scale(scaleTo, scaleFrom, 0, 100, to) : 100;
    const percTo = Math.max(scaledTo, 0);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const isZeroWidth = from >= to || percFrom === 100 || percTo === 100;

    const css: ThemeCSS = {
        right: `${percTo}%`,
        left: `${percFrom}%`,
    };

    return (
        <Container ref={ref} {...rest}>
            <Background />
            <Value css={css} zero={isZeroWidth} />
        </Container>
    );
});

ProgressBase.displayName = "Progress";

const Progress = fnWithProps<typeof ProgressBase, Selectors>(ProgressBase, {
    /**
     * @deprecated, use Progress-*-Selector exports
     */
    selectors: {
        /**
         * @deprecated use ProgressBackgroundSelector instead
         */
        background: Background.toString(),
        /**
         * @deprecated use ProgressValueSelector instead
         */
        value: Value.toString(),
    },
});

Progress.toString = () => Container.toString();

const ProgressBackgroundSelector = Background.toString();
const ProgressValueSelector = Value.toString();

export { Progress, type ProgressProps, ProgressBackgroundSelector, ProgressValueSelector };

