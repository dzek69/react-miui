import React from "react";

interface Props {
    className?: string;
}

const Checkmark: React.FC<Props> = (props) => {
    return (
        <svg
            width={"16"}
            height={"16"}
            viewBox={"0 0 26 18"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path d={"M26 1.6q0-.7-.4-1.15Q25.15 0 24.55 0q-.65 0-1.1.45L9.5 14.35l-6.95-7Q2.1 6.9 1.5 6.9q-.65 0-1.05.45Q0 7.8 0 8.4q0 .7.45 1.15l8 8.05q.45.4 1.05.4.6 0 1.05-.4l15-14.95Q26 2.2 26 1.6"} />
        </svg>
    );
};

export { Checkmark };
