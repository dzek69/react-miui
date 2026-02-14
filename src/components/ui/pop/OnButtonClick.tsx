import React, { useEffect, useRef } from "react";

interface Props {
    onClick: () => void;
    children: React.ReactNode;
}

const OnButtonClick: React.FC<Props> = (props) => {
    const theRef = useRef<HTMLDivElement>(null);

    const { onClick } = props;

    useEffect(() => {
        const div = theRef.current;
        if (!div) {
            return;
        }

        const cb = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement && e.target.nodeName.toLowerCase() === "button") {
                setTimeout(() => {
                    onClick();
                }, 0);
            }
        };

        div.addEventListener("click", cb);
        return () => { div.removeEventListener("click", cb); };
    }, [onClick]);

    return <div ref={theRef}>{props.children}</div>;
};

export { OnButtonClick };
