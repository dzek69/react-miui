import React, { useCallback, useEffect, useState } from "react";

import { Toggle, List, useToaster } from "../../../index.js";

const Item = List.Item;

const handleNoop = () => undefined;

const ToggleDemo: React.FC = () => {
    const [state, ss] = useState<boolean | null>(null);
    const toast = useToaster();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        setTimeout(() => { ss(true); }, 1000);
    }, []);

    const handleToggle = useCallback(() => {
        if (state == null) {
            return; // shouldn't happen, but ...
        }
        ss(null);
        setTimeout(() => {
            ss(!state);
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 1000);
    }, [state]);

    const handleCtx: React.MouseEventHandler = useCallback((e) => {
        e.preventDefault();
        toast("You right-clicked / long pressed the toggle");
    }, []);

    return (
        <List>
            <Item ratio={"1/"}>
                <span>Off</span>
                <Toggle onChange={handleNoop} value={false} />
            </Item>
            <Item ratio={"1/"}>
                <span>On</span>
                <Toggle onChange={handleNoop} value={true} />
            </Item>
            <Item ratio={"1/"}>
                <span>Undetermined</span>
                <Toggle onChange={handleNoop} value={null} />
            </Item>
            <Item ratio={"1/"}>
                <span>Dynamic with right click</span>
                <Toggle onChange={handleToggle} onContextMenu={handleCtx} value={state} />
            </Item>
            <Item ratio={"1/"}>
                <span>Disabled</span>
                <Toggle onChange={handleToggle} value={state} disabled={true} />
            </Item>
        </List>
    );
};

export { ToggleDemo };
