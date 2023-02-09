import React, { Component } from "react";

import { Timeout } from "oop-timers";
import classnames from "classnames";

import { HandleEsc } from "../../utils/HandleEsc.js";

import styles from "./Drawer.module.scss";

const RENDER_TIMEOUT = 500;

interface Props {
    isOpen: boolean;
    closeOnEsc?: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
}

interface State {
    shouldRenderWhenClosed: boolean;
}

class Drawer extends Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            shouldRenderWhenClosed: false,
        };
    }

    public override componentDidMount() {
        this.timeout = new Timeout(() => {
            // eslint-disable-next-line react/no-did-mount-set-state
            this.setState({ shouldRenderWhenClosed: false });
        }, RENDER_TIMEOUT);
    }

    public override componentDidUpdate(prevProps: Props) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.onOpen();
        }

        if (prevProps.isOpen && !this.props.isOpen) {
            this.onClose();
        }
    }

    public override componentWillUnmount() {
        this.timeout?.stop();
        this.timeout = null;
    }

    private timeout: Timeout | null = null;

    private onOpen() {
        this.timeout?.stop();
        this.setState({ shouldRenderWhenClosed: true });
    }

    private onClose() {
        this.timeout?.start();
    }

    private readonly handleEsc = () => {
        this.props.onClose();
    };

    public override render() {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const y = this.props.isOpen ? 0 : 100;
        const style = {
            transform: `translateY(${y}%)`,
        };

        const shouldRender = this.props.isOpen || this.state.shouldRenderWhenClosed;

        const closeOnEsc = this.props.closeOnEsc ?? true;
        const esc = closeOnEsc && <HandleEsc onPress={this.handleEsc} />;

        const cls = classnames(this.props.className, styles.drawer);

        return (
            <div className={cls} style={style}>
                {esc}
                <div className={styles.content}>
                    {shouldRender && this.props.children}
                </div>
            </div>
        );
    }
}

export { Drawer };
