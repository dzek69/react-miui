import React from "react";

import styles from "./Demo.module.scss";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { componentsMap } from "./componentsMap";
import { ToasterProvider } from "../components/ui/toaster/Toaster";

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
