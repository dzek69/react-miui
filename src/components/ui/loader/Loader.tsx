import React, { forwardRef } from "react";

import { useTailSpin } from "../../../utils";
import { Div } from "../../native";

interface Props {
    /**
     * Time in ms for a full spin
     */
    speed?: number;
    /**
     * Color of the spinner, defaults to currentColor
     */
    color?: string;
    /**
     * Size of the spinner, can be unitless, defaults to 2rem
     */
    size?: string | number;
    /**
     * Whether to show the spinner or not
     */
    show?: boolean | undefined | null;
    className?: string;
}

const DEFAULT_SPEED = 400;
const DEFAULT_SIZE = "2rem";

/**
 * Basic spinner.
 *
 * Based on MIT licensed code by Sam Herbert
 * https://github.com/SamHerbert/SVG-Loaders/blob/master/svg-loaders/tail-spin.svg
 */
const Loader = forwardRef<HTMLDivElement, Props>(({
    color = "currentColor", speed = DEFAULT_SPEED, size = DEFAULT_SIZE,
    ...props
}, ref) => {
    const spinnerBg = useTailSpin({ size, color, speed });

    if (props.show === false) {
        return null;
    }

    return (
        <Div ref={ref} className={props.className} css={{ width: size, height: size, backgroundImage: `url('${spinnerBg}')` }} />
    );
});

Loader.displayName = "Loader";
Loader.toString = () => Div.toString();

export { Loader };
export type { Props as LoaderProps };
