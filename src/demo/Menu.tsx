import React from "react";

import styles from "./Menu.module.scss";
import type { componentsMap } from "./componentsMap";

interface Props {
    ancestors?: string[];
    list: typeof componentsMap;
}

const Menu: React.FC<Props> = (props) => {
    const cmp = Object.entries(props.list).map(([urlHash, component]) => {
        const label = component.name;
        const children = `children` in component && component.children
            ? <Menu ancestors={[...props.ancestors!, urlHash]} list={component.children} />
            : null;

        return (
            <li key={urlHash}>
                <a href={"#" + [...props.ancestors!, urlHash].join("/")}>{label}</a>
                {children}
            </li>
        );
    });

    const contents = <ul>{cmp}</ul>;

    if (!props.ancestors!.length) {
        cmp.unshift(<li key={"--main"}><a href={"#"}>Main</a></li>);
        return <menu className={styles.menu}>{contents}</menu>;
    }

    return contents;
};

Menu.defaultProps = {
    ancestors: [],
};

export { Menu };
