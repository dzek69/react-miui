import React, { forwardRef } from "react";

interface Props {
    className?: string;
}

const Clock = forwardRef<SVGSVGElement, Props>((props, ref) => {
    return (
        <svg
            ref={ref}
            width={"16"}
            height={"16"}
            viewBox={"0 0 16 16"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <circle
                cx={"8"}
                cy={"8"}
                r={"6.5"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.5"}
            />
            <path
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.5"}
                strokeLinecap={"round"}
                d={"M8 4.5V8l2.5 1.75"}
            />
        </svg>
    );
});

Clock.displayName = "Clock";

export { Clock };
