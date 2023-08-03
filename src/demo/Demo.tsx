import React from "react";

import { ToasterProvider } from "../components/ui/toaster/Toaster.js";

import { Menu } from "./Menu.js";
import { Main } from "./Main.js";
import { componentsMap } from "./componentsMap.js";

import "@icon-park/react/styles/index.css";
import styles from "./Demo.module.scss";

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
