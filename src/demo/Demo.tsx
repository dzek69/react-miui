import React from "react";

import { ToasterProvider } from "../components/ui/toaster/Toaster.js";

import styles from "./Demo.module.scss";
import { Menu } from "./Menu.js";
import { Main } from "./Main.js";
import { componentsMap } from "./componentsMap.js";

const Demo: React.FC = (props) => {
    return (
        <ToasterProvider>
            <div className={styles.container}>
                <Menu list={componentsMap} />
                <Main />
            </div>
        </ToasterProvider>
    );
};

export { Demo };
