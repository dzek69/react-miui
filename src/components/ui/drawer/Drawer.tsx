import React, { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Timeout } from "oop-timers";

import { HandleEsc } from "../../utils/HandleEsc";
import { Content, StyledDrawer } from "./Drawer.styled";

const RENDER_TIMEOUT = 500;

type DrawerProps = {
    isOpen: boolean;
    closeOnEsc?: boolean;
    onClose: () => void;
    className?: string;
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

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
    const [shouldRenderWhenClosed, setShouldRenderWhenClosed] = useState(false);
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
        if (props.isOpen) {
            timeoutRef.current?.stop();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShouldRenderWhenClosed(true);
        }
        else {
            timeoutRef.current?.start();
        }
    }, [props.isOpen]);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const y = props.isOpen ? 0 : 100;
    const style = {
        transform: `translateY(${y}%)`,
    };

    const shouldRender = props.isOpen || shouldRenderWhenClosed;

    const closeOnEsc = props.closeOnEsc ?? true;
    const esc = closeOnEsc && <HandleEsc onPress={props.onClose} />;
    const portal = props.portal ?? true;

    const tree = (
        <StyledDrawer className={props.className} style={style} ref={ref}>
            {esc}
            <Content>
                {/* eslint-disable-next-line react/jsx-no-leaked-render */}
                {shouldRender && props.children}
            </Content>
        </StyledDrawer>
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
export type { DrawerProps };
