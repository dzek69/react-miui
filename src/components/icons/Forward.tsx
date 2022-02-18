import React from "react";

interface Props {
    className?: string;
}

const Forward: React.FC<Props> = (props) => {
    return (
        <svg
            width={"16"}
            height={"16"}
            viewBox={"0 0 9 16"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path fill={"currentColor"} d={"M.95.15Q.8 0 .55 0t-.4.15Q0 .3 0 .55t.15.4L7.35 8l-7.2 7.05Q0 15.2 0 15.4q0 .25.2.4.15.2.4.2.2 0 .35-.15L9 8 1 .2Q1 .15.95.15"} />
        </svg>
    );
};

export { Forward };
