import React from "react";

interface Props {
    className?: string;
}

const Trash: React.FC<Props> = (props) => {
    return (
        <svg
            width={"16"}
            height={"16"}
            viewBox={"0 0 41 37"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path d={"M35.7 9.25h3.95q1.4-.4 1.35-1.6-.1-1.2-1.35-1.45H25.6V1.25Q25.6 0 24.4 0h-8.7q-1.1-.05-1.2 1.25V6.2H1.35Q-.1 6.6 0 7.75.1 9 1.35 9.25H5.4v26.5q.15 1.2 1.25 1.25H34.5q1.1-.1 1.2-1.25V9.25M22.6 6.2h-5.05V3.1h5.05v3.1M8.45 33.9V9.25H32.7V33.9H8.45"} />
        </svg>
    );
};

export { Trash };
