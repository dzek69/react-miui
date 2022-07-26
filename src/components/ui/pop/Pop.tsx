import React, { Component, createRef } from "react";

import { HandleEsc } from "../../utils/HandleEsc.js";

import { OnButtonClick } from "./OnButtonClick.js";
import { PopOption } from "./PopOption.js";
import styles from "./Pop.module.scss";

interface Props {
    open: boolean;
    onClose: () => void;
    anchor?: HTMLElement | "prev" | "next";
    closeOnEsc?: boolean;
}

interface State {
    x: number;
    y: number;
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
}

const html = typeof document === "object" ? document.getElementsByTagName("html")[0] : null;

const getElementDimensions = (elem: HTMLElement) => {
    return {
        width: elem.clientWidth,
        height: elem.clientHeight,
    };
};

const getElementLocation = (element: HTMLElement, outerElement = html): [State["vertical"], State["horizontal"]] => {
    const outer = getElementDimensions(outerElement!);
    const rect = element.getBoundingClientRect();

    const distanceToBottom = outer.height - rect.bottom;
    const distanceToTop = rect.top;

    const verticalLocation = distanceToTop > distanceToBottom ? "bottom" : "top";

    const distanceToLeft = rect.left;
    const distanceToRight = outer.width - rect.right;

    const horizontalLocation = distanceToLeft > distanceToRight ? "right" : "left";

    return [verticalLocation, horizontalLocation];
};

class Pop extends Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            vertical: "top",
            horizontal: "left",
        };
        this.rootRef = createRef();
    }

    public override componentDidUpdate(prevProps: Props) {
        if (!prevProps.open && this.props.open) {
            this.onOpen();
        }
    }

    public static Option: typeof PopOption = PopOption;

    private readonly rootRef: React.RefObject<HTMLDivElement>;

    private getAnchorElement() {
        if (this.props.anchor instanceof HTMLElement) {
            return this.props.anchor;
        }
        if (!this.rootRef.current) {
            return null;
        }

        if (this.props.anchor === "prev") {
            return this.rootRef.current.previousElementSibling;
        }
        if (this.props.anchor === "next") {
            return this.rootRef.current.nextElementSibling;
        }
        return null;
    }

    private readonly onOpen = () => {
        const anchorElement = this.getAnchorElement();
        if (!anchorElement) {
            console.warn("PopOptions can not find anchor element");
            return;
        }
        // @todo use get derived state

        const [vertical, horizontal] = getElementLocation(anchorElement as HTMLElement);
        const dimensions = getElementDimensions(html!);
        const rect = anchorElement.getBoundingClientRect();

        const x = horizontal === "left" ? rect.left : dimensions.width - rect.right;
        const y = vertical === "top" ? rect.bottom : dimensions.height - rect.top;

        this.setState({
            vertical,
            horizontal,
            x,
            y,
        });
    };

    private readonly handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    private readonly handleEsc = () => {
        this.props.onClose();
    };

    public override render() {
        const style: React.CSSProperties = {};

        if (this.state.vertical === "top") {
            style.top = this.state.y;
        }
        else {
            style.bottom = this.state.y;
        }

        if (this.state.horizontal === "left") {
            style.left = this.state.x;
        }
        else {
            style.right = this.state.x;
        }

        if (!this.props.open) {
            return null;
        }

        const closeOnEsc = this.props.closeOnEsc ?? true;
        const esc = closeOnEsc && <HandleEsc onPress={this.handleEsc} />;

        return (
            <div className={styles.overlay} ref={this.rootRef} onClick={this.handleOverlayClick}>
                {esc}
                <OnButtonClick onClick={this.handleEsc}>
                    <ul className={styles.pop} style={style}>
                        {this.props.children}
                    </ul>
                </OnButtonClick>
            </div>
        );
    }
}

export { Pop };
