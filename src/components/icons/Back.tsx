import React from "react";

interface Props {
    className?: string;
}

const Back: React.VFC<Props> = (props) => {
    return (
        <svg width={"9"} height={"16"} viewBox={"0 0 9 16"} xmlns={"http://www.w3.org/2000/svg"} className={props.className}>
            <path fill={"currentColor"} d={"M8.05.1L0 7.95l8.05 7.85v.05q.15.15.4.15t.4-.15q.15-.2.15-.4 0-.25-.15-.4V15H8.8L1.65 7.95l7.2-7Q9 .75 9 .55q0-.25-.2-.4Q8.65 0 8.4 0q-.2 0-.35.1"} />
        </svg>
    );
};

export { Back };
