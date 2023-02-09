import React, { createContext, useContext } from "react";

import type { Toast } from "./types";

// eslint-disable-next-line @typescript-eslint/no-shadow
import { Notification } from "./Notification.js";

type ToasterFn = (text: string) => void;

const ToasterContext = createContext<ToasterFn>(() => {
    throw new Error("Toaster Provider missing in the tree");
});

const prefix = `${Date.now()}_`;
let counter = 0;

interface Props {
    children: React.ReactNode;
}
interface State {
    list: Toast[];
}

const DEFAULT_TIMEOUT = 5000;

class ToasterProvider extends React.Component<Props, State> {
    public constructor(props: Props, context: unknown) {
        super(props, context);

        this.state = {
            list: [],
        };
    }

    private readonly _add = (text: string) => {
        this._removeAllToasts();

        const id = prefix + String(counter++);
        const hide = false;

        this.setState(prev => ({
            ...prev,
            list: [...prev.list, {
                id,
                text,
                hide,
            }],
        }));

        setTimeout(() => {
            this.setState(prev => ({
                ...prev,
                list: prev.list.map(p => {
                    if (p.id !== id) {
                        return p;
                    }
                    return {
                        ...p,
                        hide: true,
                    };
                }),
            }));
        }, DEFAULT_TIMEOUT);
    };

    private readonly _handleRemove = (id: Toast["id"]) => {
        this.setState(prev => ({
            ...prev,
            list: prev.list.filter(p => p.id !== id),
        }));
    };

    private readonly _removeAllToasts = () => {
        this.setState(prev => ({
            ...prev,
            list: prev.list.map(p => {
                if (p.hide) {
                    return p;
                }
                return {
                    ...p,
                    hide: true,
                };
            }),
        }));
    };

    public override render() {
        const notifications = this.state.list.map((t) => {
            return <Notification onRemove={this._handleRemove} key={t.id} toast={t} />;
        });

        return (
            <ToasterContext.Provider value={this._add}>
                {notifications}
                {this.props.children}
            </ToasterContext.Provider>
        );
    }
}

const useToaster = () => useContext(ToasterContext);

export { ToasterProvider, useToaster };
