import React from "react";

interface Props {
    className?: string;
}

const Battery: React.FC<Props> = (props) => {
    return (
        <svg
            width={"13"}
            height={"17"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path
                fill={"none"}
                stroke={"#000"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={"M12.5 2.55q0-.6-.5-.55H9.25q-.65 0-.6-.7v-.2Q8.7.5 8.2.5H4.75q-.4 0-.4.4v.4q.05.75-.75.7H1.1q-.6-.05-.6.55V16q0 .5.6.5h11q.4 0 .4-.45V2.55"}
            />
            <path
                fill={"none"}
                stroke={"#000"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={"M8.9 8.6h-2V5.8l-3 4 1.95.05v2.75l3.05-4"}
            />
        </svg>

    );
};

export { Battery };
