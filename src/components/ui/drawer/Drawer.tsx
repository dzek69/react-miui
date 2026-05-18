import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";
import { Timeout } from "oop-timers";

import { HandleEsc } from "../../utils/HandleEsc";
import { Content, StyledDrawer, Tint } from "./Drawer.styled";

const RENDER_TIMEOUT = 500;
const TRANSITION_MS = 300;
const DEFAULT_CONTENT_SCALE = 0.92;
const DEFAULT_TINT_OPACITY = 0.1;
const PARTIAL_RADIUS = "16px";
const DEFAULT_SCALE_SELECTORS = ["#__next", "#root", "#storybook-root", "body>*:first-child"];

type DrawerFrom = "top" | "right" | "bottom" | "left";
type ScaleMode = "first" | "all";

type DrawerProps = {
    isOpen: boolean;
    closeOnEsc?: boolean;
    onClose: () => void;
    className?: string;
    /**
     * Which edge the drawer slides in from. Defaults to `"bottom"`.
     */
    from?: DrawerFrom;
    /**
     * How far the drawer extends along its slide axis. Defaults to filling the whole viewport.
     * - positive number — size in pixels (e.g. `300` ⇒ 300px tall/wide).
     * - negative number — viewport minus pixels (e.g. `-100` ⇒ `calc(100% - 100px)`).
     * - string — any CSS length (e.g. `"50%"`, `"20rem"`).
     *
     * When set, the drawer's visible edge gets rounded corners.
     */
    size?: number | string;
    /**
     * When set, scales the targeted page content down while the drawer is open
     * (use with `scaleSelectors`) and fades in a subtle tint over it for a
     * stacked "3D" look. `true` uses the default scale (~0.92), or pass a number
     * to customize (e.g. `0.95`).
     */
    scaleContent?: boolean | number;
    /**
     * CSS selector (or array tried in order) for what to scale when `scaleContent`
     * is set. The first selector that matches anything wins. Defaults to common
     * app-root selectors `["#__next", "#root", "body>*:first-child"]`.
     */
    scaleSelectors?: string | string[];
    /**
     * Whether to scale only the first match of the chosen selector (`"first"`,
     * default) or every match (`"all"`).
     */
    scaleSelectorsMode?: ScaleMode;
    /**
     * What happens when the user clicks (or taps) on the area outside the drawer.
     * Mirrors `Modal`'s prop: `"close"` (default) calls `onClose`, a function is
     * invoked directly, and `null` makes the overlay transparent to pointer/touch
     * events so the underlying page stays interactive. The overlay only renders
     * when there is an "outside" — i.e. `size` is set or `scaleContent` is enabled.
     */
    onOverlayClick?: (() => void) | "close" | null;
    /**
     * Where to portal the drawer. `true` (default) portals to `document.body` so the
     * drawer's `position: fixed` always anchors to the viewport — needed when any
     * ancestor establishes a containing block (e.g. via `transform`, `filter`, or
     * `will-change`). Pass an `HTMLElement` to portal to a specific node, or `false`
     * to render in place.
     */
    portal?: boolean | HTMLElement;
    children: React.ReactNode;
};

const closedTransform: Record<DrawerFrom, string> = {
    bottom: "translate(0, 100%)",
    top: "translate(0, -100%)",
    left: "translate(-100%, 0)",
    right: "translate(100%, 0)",
};

const getSizeCss = (size: number | string | undefined): string | undefined => {
    if (size === undefined) {
        return undefined;
    }
    if (typeof size === "string") {
        return size;
    }
    if (size >= 0) {
        return `${size}px`;
    }
    return `calc(100% + ${size}px)`;
};

const positioningPresets: Record<DrawerFrom, (size: string) => React.CSSProperties> = {
    bottom: (size) => ({ top: "auto", height: size }),
    top: (size) => ({ bottom: "auto", height: size }),
    left: (size) => ({ right: "auto", width: size }),
    right: (size) => ({ left: "auto", width: size }),
};

const radiusPresets: Record<DrawerFrom, React.CSSProperties> = {
    bottom: { borderTopLeftRadius: PARTIAL_RADIUS, borderTopRightRadius: PARTIAL_RADIUS },
    top: { borderBottomLeftRadius: PARTIAL_RADIUS, borderBottomRightRadius: PARTIAL_RADIUS },
    left: { borderTopRightRadius: PARTIAL_RADIUS, borderBottomRightRadius: PARTIAL_RADIUS },
    right: { borderTopLeftRadius: PARTIAL_RADIUS, borderBottomLeftRadius: PARTIAL_RADIUS },
};

const getStaticStyle = (from: DrawerFrom, size: number | string | undefined): React.CSSProperties => {
    const sizeCss = getSizeCss(size);
    if (sizeCss === undefined) {
        return {};
    }
    return { ...positioningPresets[from](sizeCss), ...radiusPresets[from] };
};

const findScaleTargets = (selectors: string[], mode: ScaleMode): HTMLElement[] => {
    for (const sel of selectors) {
        if (mode === "first") {
            const el = document.querySelector<HTMLElement>(sel);
            if (el) {
                return [el];
            }
        }
        else {
            const els = Array.from(document.querySelectorAll<HTMLElement>(sel));
            if (els.length > 0) {
                return els;
            }
        }
    }
    return [];
};

const applyScale = (target: HTMLElement, transform: string) => {
    target.style.setProperty("transition", `transform ${TRANSITION_MS}ms`);
    target.style.setProperty("transform-origin", "50% 0");
    target.style.setProperty("transform", transform);
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
    const drawerRef = useForwardedRef(ref);
    const [shouldRenderWhenClosed, setShouldRenderWhenClosed] = useState(false);
    const [isVisible, setIsVisible] = useState(props.isOpen);
    const timeoutRef = useRef<Timeout | null>(null);

    useEffect(() => {
        timeoutRef.current = new Timeout(() => {
            setShouldRenderWhenClosed(false);
        }, RENDER_TIMEOUT);

        return () => {
            timeoutRef.current?.stop();
            timeoutRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!props.isOpen) {
            timeoutRef.current?.start();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(false);
            return undefined;
        }
        timeoutRef.current?.stop();
        setShouldRenderWhenClosed(true);
        const id = requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => {
            cancelAnimationFrame(id);
        };
    }, [props.isOpen]);

    const { scaleContent, scaleSelectors, scaleSelectorsMode } = props;

    useEffect(() => {
        if (!scaleContent || !props.isOpen) {
            return undefined;
        }
        const selectors = scaleSelectors === undefined
            ? DEFAULT_SCALE_SELECTORS
            : (Array.isArray(scaleSelectors) ? scaleSelectors : [scaleSelectors]);
        const mode = scaleSelectorsMode ?? "first";
        const targets = findScaleTargets(selectors, mode);
        if (targets.length === 0) {
            return undefined;
        }
        const scale = typeof scaleContent === "number" ? scaleContent : DEFAULT_CONTENT_SCALE;
        targets.forEach((el) => {
            applyScale(el, `scale(${scale})`);
        });
        return () => {
            targets.forEach((el) => {
                applyScale(el, "");
            });
        };
    }, [props.isOpen, scaleContent, scaleSelectors, scaleSelectorsMode]);

    const from = props.from ?? "bottom";
    const style = {
        ...getStaticStyle(from, props.size),
        transform: isVisible ? "translate(0, 0)" : closedTransform[from],
        transition: props.isOpen && !isVisible ? "none" : undefined,
    };

    const shouldRender = props.isOpen || shouldRenderWhenClosed;

    const closeOnEsc = props.closeOnEsc ?? true;
    const esc = closeOnEsc && <HandleEsc onPress={props.onClose} />;
    const portal = props.portal ?? true;

    const overlayClick = props.onOverlayClick === undefined ? "close" : props.onOverlayClick;
    const { onClose } = props;
    const handleOverlayClick = useCallback(() => {
        if (overlayClick === "close") {
            onClose();
            return;
        }
        if (typeof overlayClick === "function") {
            overlayClick();
        }
    }, [overlayClick, onClose]);

    const hasOverlay = props.size !== undefined || Boolean(scaleContent);
    const overlayInteractive = overlayClick !== null && props.isOpen;
    const tintStyle = {
        opacity: isVisible ? DEFAULT_TINT_OPACITY : 0,
        pointerEvents: (overlayInteractive ? "auto" : "none") as React.CSSProperties["pointerEvents"],
    };

    const tree = (
        <>
            {/* eslint-disable-next-line react/jsx-no-leaked-render */}
            {hasOverlay && (
                <Tint
                    style={tintStyle}
                    onClick={handleOverlayClick}
                    aria-hidden={true}
                />
            )}
            <StyledDrawer className={props.className} style={style} ref={drawerRef}>
                {esc}
                <Content>
                    {/* eslint-disable-next-line react/jsx-no-leaked-render */}
                    {shouldRender && props.children}
                </Content>
            </StyledDrawer>
        </>
    );

    if (portal) {
        const root = typeof portal === "boolean" ? document.body : portal;
        return createPortal(tree, root);
    }

    return tree;
});

Drawer.displayName = "Drawer";
Drawer.toString = () => StyledDrawer.toString();

const DrawerContentSelector = Content.toString();

export { Drawer, DrawerContentSelector };
export type { DrawerProps, DrawerFrom };
