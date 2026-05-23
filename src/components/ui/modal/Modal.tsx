import React, { forwardRef, useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";

import type { ThemeCSS } from "../../../theme";

import { fnWithProps } from "../../../types/fnWithProps";
import { HandleEsc } from "../../utils/HandleEsc";
import { ContainerStyled, NEGATIVE_PADDING, OverlayStyled, RemovePadding, TitleStyled } from "./Modal.styled";

type OverlayProps = React.ComponentProps<typeof OverlayStyled>;
type ContainerProps = React.ComponentProps<typeof ContainerStyled>;

const FOCUSABLE_SELECTOR = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex=\"-1\"])",
].join(",");

const prefersReducedMotion = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    onOverlayClick?: (() => void) | "close" | null;
    closeOnEsc?: boolean;
    onClose: () => void;
    isOpen: boolean;
    title?: React.ReactNode;
    portal?: boolean | HTMLElement;
    children: React.ReactNode;

    position?: OverlayProps["position"];
    full?: ContainerProps["full"];
}

// @TODO proper docs + buttons

// eslint-disable-next-line max-lines-per-function,max-statements
const ModalBase = forwardRef<HTMLDivElement, Props>(({
    children,
    onClose,
    isOpen,
    title,
    className,
    onOverlayClick = "close",
    closeOnEsc = true,
    portal = true,
    position,
    full,
    ...rest
}, ref) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useForwardedRef(ref);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const titleId = useId();

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsRendered(true);
            setIsClosing(false);
            return;
        }
        // Under reduced motion the close animation is disabled, so onAnimationEnd will
        // never fire — unmount synchronously instead.
        if (prefersReducedMotion()) {
            setIsRendered(false);
            setIsClosing(false);
            return;
        }
        setIsClosing(true);
    }, [isOpen]);

    useEffect(() => {
        if (!isClosing) {
            return;
        }
        const overlay = overlayRef.current;
        const container = containerRef.current;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!overlay || !container) {
            return;
        }
        // animationFillMode: forwards leaves the keyframe in its end state, so flipping
        // animationDirection to reverse alone wouldn't replay it. Force a restart by
        // clearing animation, triggering reflow, then letting the variant's reverse run.
        overlay.style.animation = "none";
        container.style.animation = "none";
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        overlay.offsetHeight;
        overlay.style.removeProperty("animation");
        container.style.removeProperty("animation");
    }, [isClosing, containerRef]);

    // Focus management: capture previous focus on open, set initial focus inside the
    // dialog, restore focus on close. Tab containment + AT-hiding is delegated to the
    // `inert` attribute on everything outside the modal subtree (native browser handles
    // Tab cycling, screen-reader pruning, and pointer-event blocking).
    useEffect(() => {
        if (!isOpen || !isRendered) {
            return;
        }
        const container = containerRef.current;
        const overlay = overlayRef.current;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!container || !overlay) {
            return;
        }

        previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;

        const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        (focusables[0] ?? container).focus();

        // Walk up from the overlay to <body>; at each level mark every sibling of the
        // cursor as inert. Already-inert nodes (e.g. from a nesting modal) are skipped
        // so that the outer owner remains responsible for cleanup — this gives correct
        // stacking for nested modals without a separate registry.
        const inerted: HTMLElement[] = [];
        let cursor: HTMLElement = overlay;
        while (cursor !== document.body) {
            const parentEl: HTMLElement | null = cursor.parentElement;
            if (!parentEl) {
                break;
            }
            for (const child of Array.from(parentEl.children)) {
                if (child === cursor || !(child instanceof HTMLElement)) {
                    continue;
                }
                if (!child.hasAttribute("inert")) {
                    child.setAttribute("inert", "");
                    inerted.push(child);
                }
            }
            cursor = parentEl;
        }

        return () => {
            inerted.forEach((el) => {
                el.removeAttribute("inert");
            });
            previouslyFocusedRef.current?.focus();
        };
    }, [isOpen, isRendered, containerRef]);

    const titleElem = title ? <TitleStyled id={titleId}>{title}</TitleStyled> : null;

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        if (onOverlayClick === "close") {
            onClose();
        }
        else if (typeof onOverlayClick === "function") {
            onOverlayClick();
        }
    }, [onOverlayClick, onClose]);

    const handleAnimationEnd = useCallback((e: React.AnimationEvent) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        if (isOpen) {
            return;
        }
        setIsRendered(false);
    }, [isOpen]);

    if (!isRendered) {
        return null;
    }

    const overlayVariants: Pick<OverlayProps, "isClosing" | "position"> = {};
    if (isClosing) {
        overlayVariants.isClosing = true;
    }
    if (position != null) {
        overlayVariants.position = position;
    }

    const containerVariants: Pick<ContainerProps, "isClosing" | "full"> = {};
    if (isClosing) {
        containerVariants.isClosing = true;
    }
    if (full != null) {
        containerVariants.full = full;
    }

    const childrenCount = React.Children.count(children);

    const chld = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === RemovePadding) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
            const css: ThemeCSS = { ...(child.props.css ?? {}) };
            if (index === 0 && titleElem == null) {
                css.marginTop = NEGATIVE_PADDING;
            }
            if (index === childrenCount - 1) {
                css.marginBottom = NEGATIVE_PADDING;
            }

            return React.cloneElement(child, { css });
        }
        return child;
    });

    const tree = (
        <OverlayStyled
            {...overlayVariants}
            onClick={handleOverlayClick}
            ref={overlayRef}
            onAnimationEnd={handleAnimationEnd}
        >
            {closeOnEsc ? <HandleEsc onPress={onClose} /> : null}
            <ContainerStyled
                role={"dialog"}
                aria-modal={true}
                aria-labelledby={titleElem ? titleId : undefined}
                tabIndex={-1}
                className={className}
                {...containerVariants}
                ref={containerRef}
                {...rest}
            >
                {titleElem}
                {chld}
            </ContainerStyled>
        </OverlayStyled>
    );

    if (portal) {
        const root = typeof portal === "boolean" ? document.body : portal;
        return createPortal(tree, root);
    }

    return tree;
});

ModalBase.displayName = "Modal";

const Modal = fnWithProps(ModalBase, {
    RemovePadding,
});
Modal.toString = () => OverlayStyled.toString();

const ModalContainerSelector = ContainerStyled.toString();
const ModalTitleSelector = TitleStyled.toString();
const ModalRemovePaddingSelector = RemovePadding.toString();

export { Modal, ModalContainerSelector, ModalTitleSelector, ModalRemovePaddingSelector };
