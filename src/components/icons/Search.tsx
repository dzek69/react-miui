import React from "react";

interface Props {
    className?: string;
}

const Search: React.FC<Props> = (props) => {
    return (
        <svg
            baseProfile={"basic"}
            width={"16"}
            height={"16"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={"M11.95 6.6q0 2.1-1.5 3.6m0-7.2q1.5 1.55 1.5 3.6M6.9 1.5q2.05 0 3.55 1.5m-7.2 0q1.5-1.5 3.65-1.5M1.75 6.6q0-2.05 1.5-3.6m0 7.2q-1.5-1.5-1.5-3.6m5.15 5.1q-2.15 0-3.65-1.5m6.95.2q-1.4 1.3-3.3 1.3m3.3-1.3l4.1 4.1m-3.85-4.3q-.1.1-.25.2"}
            />
        </svg>

    );
};

export { Search };
