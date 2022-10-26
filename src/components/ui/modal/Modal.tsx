import React, { useCallback, useEffect, useRef, useState } from "react";

import classnames from "classnames";
import { createPortal } from "react-dom";

import { makeVariants } from "../../../utils/index.js";

import { ModalNegateMargin } from "./ModalNoMargin.js";
import styles from "./Modal.module.scss";

type Variant = "bottom" | "full";

interface Props {
    onOverlayClick?: (() => void) | "close" | null;
    closeOnEsc?: boolean;
    onClose: () => void;
    isOpen: boolean;
    title?: React.ReactNode;
    className?: string;
    variant?: Variant | Variant[];
    portal?: boolean | HTMLElement;
}

interface SubComponents {
    NegateMargin: typeof ModalNegateMargin;
}

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
    variant,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const v = makeVariants(variant);

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

    const titleElem = title && <div className={styles.title}>{title}</div>;

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

    const overlayCls = classnames(styles.overlay, {
        [styles.isClosing]: isClosing,
        [styles.overlayOnBottom]: v.includes("bottom"),
    });

    const containerCls = classnames(styles.container, className, {
        [styles.isClosing]: isClosing,
        [styles.full]: v.includes("full"),
    });

    const tree = (
        <div
            className={overlayCls}
            onClick={handleOverlayClick}
            ref={overlayRef}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className={containerCls} ref={containerRef}>
                {titleElem}
                {children}
            </div>
        </div>
    );

    if (portal) {
        const root = typeof portal === "boolean" ? document.body : portal;
        return createPortal(tree, root);
    }

    return tree;
};
Modal.NegateMargin = ModalNegateMargin;

export { Modal };
