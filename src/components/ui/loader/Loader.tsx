import React from "react";

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
}

const DEFAULT_SPEED = 400;
const DEFAULT_SIZE = "2rem";

/**
 * Basic spinner.
 *
 * Based on MIT licensed code by Sam Herbert
 * https://github.com/SamHerbert/SVG-Loaders/blob/master/svg-loaders/tail-spin.svg
 */
const Loader: React.FC<Props> = ({
    color = "currentColor", speed = DEFAULT_SPEED, size = DEFAULT_SIZE,
    ...props
}) => {
    const spinnerBg = useTailSpin({ size, color, speed });

    if (props.show === false) {
        return null;
    }

    return (
        <Div css={{ width: size, height: size, backgroundImage: `url('${spinnerBg}')` }} />
    );
};

export { Loader };
export type { Props as LoaderProps };
