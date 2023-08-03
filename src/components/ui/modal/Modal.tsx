import React, { useCallback, useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import type { ThemeCSS } from "../../../theme";

import { ContainerStyled, NEGATIVE_PADDING, OverlayStyled, RemovePadding, TitleStyled } from "./Modal.styled";

type OverlayProps = React.ComponentProps<typeof OverlayStyled>;
type ContainerProps = React.ComponentProps<typeof ContainerStyled>;

interface Props {
    onOverlayClick?: (() => void) | "close" | null;
    closeOnEsc?: boolean;
    onClose: () => void;
    isOpen: boolean;
    title?: React.ReactNode;
    className?: string;
    portal?: boolean | HTMLElement;
    children: React.ReactNode;

    position?: OverlayProps["position"];
    full?: ContainerProps["full"];
}

interface SubComponents {
    RemovePadding: typeof RemovePadding;
}

// @TODO proper docs + buttons

// eslint-disable-next-line max-lines-per-function,max-statements
const Modal: React.FC<Props> & SubComponents = ({
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
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen || !closeOnEsc) {
            return;
        }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, closeOnEsc]);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(true);
            return;
        }
        setIsRendered(true);
        setIsClosing(false);
    }, [isOpen]);

    useEffect(() => {
        if (!isClosing) {
            return;
        }

        if (!overlayRef.current || !containerRef.current) {
            return;
        }

        overlayRef.current.style.animation = "none";
        containerRef.current.style.animation = "none";
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        overlayRef.current.offsetHeight; // force sync document reflow
        overlayRef.current.style.removeProperty("animation");
        containerRef.current.style.removeProperty("animation");
    }, [isClosing]);

    const titleElem = title ? <TitleStyled>{title}</TitleStyled> : null;

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        if (onOverlayClick === "close") {
            onClose();
        }
        if (typeof onOverlayClick === "function") {
            onOverlayClick();
        }
    }, [onOverlayClick, onClose]);

    const handleAnimationEnd = useCallback(() => {
        if (isOpen) {
            return;
        }

        setIsRendered(false);
    }, [isOpen]);

    if (!isRendered) {
        return null;
    }

    const overlayVariants: Pick<OverlayProps, "isClosing" | "position"> = {};
    isClosing && (overlayVariants.isClosing = true);
    position != null && (overlayVariants.position = position);

    const containerVariants: Pick<ContainerProps, "isClosing" | "full"> = {};
    isClosing && (containerVariants.isClosing = true);
    full != null && (containerVariants.full = full);

    const childrenCount = React.Children.count(children);

    const chld = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            if (child.type === RemovePadding) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                const css: ThemeCSS = child.props.css ?? {};
                if (index === 0 && titleElem == null) {
                    css.marginTop = NEGATIVE_PADDING;
                }
                if (index === childrenCount - 1) {
                    css.marginBottom = NEGATIVE_PADDING;
                }

                // @ts-expect-error TODO handle types correctly
                return React.cloneElement(child, { css });
            }
            return child;
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
            <ContainerStyled className={className} {...containerVariants} ref={containerRef}>
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
};
Modal.RemovePadding = RemovePadding;

export { Modal };
