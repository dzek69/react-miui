import React from "react";

interface Props {
    className?: string;
}

const Checkmark: React.FC<Props> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 45.701 45.7"
            className={props.className}
        >
            <path
                d="M20.687 38.332a5.308 5.308 0 01-7.505 0L1.554 26.704A5.306 5.306 0 119.059 19.2l6.928 6.927a1.344 1.344 0 001.896 0L36.642 7.368a5.308 5.308 0 017.505 7.504l-23.46 23.46z"
            />
        </svg>

    );
};

export { Checkmark };
