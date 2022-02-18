import React, { Component } from "react";
import { Timeout } from "oop-timers";

import styles from "./Drawer.module.scss";
import { HandleEsc } from "../../utils/HandleEsc";

const RENDER_TIMEOUT = 500;

interface Props {
    isOpen: boolean;
    closeOnEsc?: boolean;
    onClose: () => void;
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

    public componentDidMount() {
        this.timeout = new Timeout(() => {
            // eslint-disable-next-line react/no-did-mount-set-state
            this.setState({ shouldRenderWhenClosed: false });
        }, RENDER_TIMEOUT);
    }

    public componentDidUpdate(prevProps: Props) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.onOpen();
        }

        if (prevProps.isOpen && !this.props.isOpen) {
            this.onClose();
        }
    }

    public componentWillUnmount() {
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

    public render() {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const y = this.props.isOpen ? 0 : 100;
        const style = {
            transform: `translateY(${y}%)`,
        };

        const shouldRender = this.props.isOpen || this.state.shouldRenderWhenClosed;

        const closeOnEsc = this.props.closeOnEsc ?? true;
        const esc = closeOnEsc && <HandleEsc onPress={this.handleEsc} />;

        return (
            <div className={styles.drawer} style={style}>
                {esc}
                <div className={styles.content}>
                    {shouldRender && this.props.children}
                </div>
            </div>
        );
    }
}

export { Drawer };
