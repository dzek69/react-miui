import { useId, useMemo } from "react";

const src = `<svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 38 38"><defs><linearGradient id="iidd" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="63.146%" stop-color="#fff" stop-opacity=".631"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="url(#iidd)" stroke-width="2" d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path><circle cx="36" cy="18" r="1" fill="#fff"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></circle></g></svg>`;

type Options = {
    /**
     * Size of the spinner, can be unitless, defaults to 2rem
     */
    size?: string | number | undefined;
    /**
     * Color of the spinner, defaults to currentColor
     */
    color?: string | undefined;
    /**
     * Time in ms for a full spin
     */
    speed?: number | undefined;
};

const DEFAULT_SPEED = 400;
const DEFAULT_SIZE = "2rem";
const DEFAULT_COLOR = "currentColor";

const useTailSpin = ({ size = DEFAULT_SIZE, color = DEFAULT_COLOR, speed = DEFAULT_SPEED }: Options) => {
    const id = useId();

    return useMemo(() => {
        const svg = src.replace(/iidd/gu, id).replace(/69/gu, String(size))
            .replace(/#fff/gu, color).replace(/0\.9s/gu, `${speed}ms`);
        const encoded = encodeURIComponent(svg).replace(/'/gu, "%27")
            .replace(/"/gu, "%22");
        return `data:image/svg+xml,${encoded}`;
    }, [size, color, speed, id]);
};

export {
    useTailSpin,
};
