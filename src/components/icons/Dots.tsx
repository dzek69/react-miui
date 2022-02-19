import React from "react";

interface Props {
    className?: string;
}

const Dots: React.FC<Props> = (props) => {
    return (
        <svg
            width={"16"}
            height={"16"}
            viewBox={"0 0 16 72"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={props.className}
        >
            <path d={"M13.65 13.65Q16 11.3 16 8q0-3.3-2.35-5.65Q11.3 0 8 0 4.7 0 2.35 2.35 0 4.7 0 8q0 3.3 2.35 5.65Q4.7 16 8 16q3.3 0 5.65-2.35M8 44q3.3 0 5.65-2.35Q16 39.3 16 36q0-3.3-2.35-5.65Q11.3 28 8 28q-3.3 0-5.65 2.35Q0 32.7 0 36q0 3.3 2.35 5.65Q4.7 44 8 44M8 72q3.3 0 5.65-2.35Q16 67.3 16 64q0-3.3-2.35-5.65Q11.3 56 8 56q-3.3 0-5.65 2.35Q0 60.7 0 64q0 3.3 2.35 5.65Q4.7 72 8 72"} />
        </svg>
    );
};

export { Dots };