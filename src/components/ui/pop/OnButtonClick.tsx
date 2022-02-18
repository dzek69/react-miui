import React, { useEffect, useRef } from "react";

interface Props {
    onClick: () => void;
}

const OnButtonClick: React.FC<Props> = (props) => {
    const theRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = theRef.current;
        if (!div) {
            return;
        }

        const cb = (e: MouseEvent) => {
            if ((e.target as HTMLDivElement).nodeName.toLowerCase() === "button") {
                setTimeout(() => {
                    props.onClick();
                }, 0);
            }
        };

        div.addEventListener("click", cb);
        return () => { div.removeEventListener("click", cb); };
    }, [theRef]);

    return <div ref={theRef}>{props.children}</div>;
};

export { OnButtonClick };
