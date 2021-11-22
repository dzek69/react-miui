import React, { useCallback, useEffect, useState } from "react";
import { Toggle } from "../../../components/form/Toggle";
import { List } from "../../../components/layout/list/List";
import { Item } from "../../../components/layout/list/Item";

const handleNoop = () => undefined;

const ToggleDemo: React.VFC = () => {
    const [state, ss] = useState<boolean | null>(null);

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

    return (
        <List>
            <Item ratio={"1/"}>
                <span>Off</span>
                <Toggle onChange={handleNoop} state={false} />
            </Item>
            <Item ratio={"1/"}>
                <span>On</span>
                <Toggle onChange={handleNoop} state={true} />
            </Item>
            <Item ratio={"1/"}>
                <span>Undetermined</span>
                <Toggle onChange={handleNoop} state={null} />
            </Item>
            <Item ratio={"1/"}>
                <span>Dynamic</span>
                <Toggle onChange={handleToggle} state={state} />
            </Item>
        </List>
    );
};

export { ToggleDemo };
