import React from "react";

// eslint-disable-next-line import/order
import "@icon-park/react/styles/index.css";

import { ToasterProvider } from "../components/ui/toaster/Toaster";

import { Menu } from "./Menu";
import { Main } from "./Main";
import { componentsMap } from "./componentsMap";

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
