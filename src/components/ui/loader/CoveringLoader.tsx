import { Children, cloneElement, forwardRef, useEffect, useId, useRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import type React from "react";
import type { LoaderProps } from "./Loader";

import { useTailSpin } from "../../../utils";

type Props = LoaderProps & {
    mode?: "before" | "after" | "over";
    inertMode?: "block-interaction" | "cover-element" | "pass-through";
    children: React.ReactElement;
};

const passThroughCss = `pointer-events: none;
touch-action: none;`;

// TODO only set position: relative if not already set or not absolute/fixed
// TODO something similar with inert attribute

/**
 * A loader that wraps an element and covers it with a loading spinner, decreasing visibility of the content and
 * blocking interactions.
 * It requires a single child element, whose ref will provide a DOM element.
 *
 * It has 3 modes of operation:
 * - before - will add the loader as ::before element of the ref node
 * - after - will add the loader as ::after element of the ref node
 * - cover (default) - will add itself to the parent of the ref node, setting position: relative to it
 *
 * Before/after modes will cover the background with semi-transparent white.
 * Over mode will decrease the opacity of the wrapped element.
 */
const CoveringLoader = forwardRef<HTMLElement, Props>(({ // eslint-disable-line max-lines-per-function
    show, children, color, size, speed, mode = "over", inertMode = "block-interaction",
}, ref) => {
    const spinnerBg = useTailSpin({ size, color, speed });
    const innerRef = useForwardedRef(ref);
    const id = "miui-" + useId().replace(/:/gu, "-");
    const stylesheet = useRef<HTMLStyleElement>();

    useEffect(() => {
        const styleEl = document.createElement("style");
        document.head.appendChild(styleEl);
        stylesheet.current = styleEl;

        return () => {
            stylesheet.current?.remove();
        };
    }, []);

    // eslint-disable-next-line max-lines-per-function,max-statements
    const effect = () => {
        const current = innerRef.current as HTMLElement | null;
        if (current !== null && !(current instanceof HTMLElement)) {
            throw new Error(
                "CoveringLoader child ref is not an HTMLElement, got: (" + typeof current + ") " + String(current),
            );
        }
        if (!current || !show) {
            return;
        }

        let extraLoaderElem: HTMLDivElement | null = null;

        if (mode === "over") {
            const prnt = current.parentElement!;
            prnt.classList.add("parent-" + id);
            extraLoaderElem = document.createElement("div");
            extraLoaderElem.classList.add(id);
            prnt.appendChild(extraLoaderElem);
            if (inertMode === "block-interaction") {
                prnt.inert = true;
            }
        }
        else {
            current.classList.add(id);
            if (inertMode === "block-interaction") {
                current.inert = true;
            }
        }

        const inertCss = inertMode === "pass-through" ? passThroughCss : "";
        const backgroundCss = mode !== "over"
            ? "background-color: rgba(255, 255, 255, 0.5); mix-blend-mode: luminosity;"
            : "";
        const spinnerCss = `z-index: 1;
content: "";
position: fixed;
inset: 0;
background: url('${spinnerBg}') no-repeat center center;
${backgroundCss}
${inertCss}`;
        const parentCss = "position: relative;";

        if (mode !== "over") {
            stylesheet.current!.textContent = `
.${id}::${mode} {
    ${spinnerCss}
}
.${id} {
    ${parentCss}
}`;
        }
        else {
            stylesheet.current!.textContent = `
.${id} {
    ${spinnerCss}
}
.parent-${id} {
    ${parentCss}
}
.parent-${id} > *:not(:last-child) {
    opacity: 0.5
}`;
        }

        return () => {
            stylesheet.current!.textContent = "";
            if (mode === "over") {
                const prnt = current.parentElement!;
                extraLoaderElem?.remove();
                prnt.classList.add("parent-" + id);
                if (inertMode === "block-interaction") {
                    prnt.inert = false;
                }
            }
            else {
                current.classList.remove(id);
                if (inertMode === "block-interaction") {
                    current.inert = false;
                }
            }
        };
    };

    useEffect(effect, [innerRef.current, spinnerBg, show, color, size, speed, mode, inertMode]);

    return cloneElement(Children.only(children), {
        ref: innerRef,
    });
});

CoveringLoader.displayName = "CoveringLoader";

export { CoveringLoader };
