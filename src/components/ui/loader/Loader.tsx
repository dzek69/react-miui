import React, { useId } from "react";

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
     * Classname to add to the svg element
     */
    className?: string;
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
const Loader: React.FC<Props> = ({ // eslint-disable-line max-lines-per-function
    color = "currentColor", speed = DEFAULT_SPEED, size = DEFAULT_SIZE,
    ...props
}) => {
    const id = useId();

    if (props.show === false) {
        return null;
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox={"0 0 38 38"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <defs>
                <linearGradient x1={"8.042%"} y1={"0%"} x2={"65.682%"} y2={"23.865%"} id={id}>
                    <stop stopColor={color} stopOpacity={"0"} offset={"0%"} />
                    <stop stopColor={color} stopOpacity={".631"} offset={"63.146%"} />
                    <stop stopColor={color} offset={"100%"} />
                </linearGradient>
            </defs>
            <g fill={"none"} fillRule={"evenodd"}>
                <g transform={"translate(1 1)"}>
                    <path
                        d={"M36 18c0-9.94-8.06-18-18-18"}
                        stroke={`url(#${id})`}
                        strokeWidth={"2"}
                    >
                        <animateTransform
                            attributeName={"transform"}
                            type={"rotate"}
                            from={"0 18 18"}
                            to={"360 18 18"}
                            dur={`${speed}ms`}
                            repeatCount={"indefinite"}
                        />
                    </path>
                    <circle fill={color} cx={"36"} cy={"18"} r={"1"}>
                        <animateTransform
                            attributeName={"transform"}
                            type={"rotate"}
                            from={"0 18 18"}
                            to={"360 18 18"}
                            dur={`${speed}ms`}
                            repeatCount={"indefinite"}
                        />
                    </circle>
                </g>
            </g>
        </svg>
    );
};

export { Loader };
