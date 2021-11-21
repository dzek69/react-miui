import React, { useCallback, useEffect, useState } from "react";
import { Toggle } from "../../../components/form/Toggle";
import { List } from "../../../components/layout/list/List";
import { Item } from "../../../components/layout/list/Item";

import styles from "./Toggle.module.scss";

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
            <Item>
                <div className={styles.row}>
                    <span>Off</span>
                    <Toggle onChange={handleNoop} state={false} />
                </div>
            </Item>
            <Item>
                <div className={styles.row}>
                    <span>On</span>
                    <Toggle onChange={handleNoop} state={true} />
                </div>
            </Item>
            <Item>
                <div className={styles.row}>
                    <span>Undetermined</span>
                    <Toggle onChange={handleNoop} state={null} />
                </div>
            </Item>
            <Item>
                <div className={styles.row}>
                    <span>Dynamic</span>
                    <Toggle onChange={handleToggle} state={state} />
                </div>
            </Item>
        </List>
    );
};

export { ToggleDemo };
