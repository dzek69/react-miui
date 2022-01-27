import React from "react";
import classnames from "classnames";

import { Header } from "./Header.js";
import { makeVariants } from "../../../utils/makeVariants";
import { Item } from "./Item";
import styles from "./List.module.scss";

type Variant = "inset";

interface Props {
    className?: string;
    variant?: Variant | Variant[];
}

interface SubComponents {
    Header: typeof Header;
}

const List: React.FC<Props> & SubComponents = (props) => {
    const v = makeVariants(props.variant);

    const chld = React.Children.map(props.children, (child) => {
        if (child && typeof child === "object" && "type" in child && (child.type === Item || child.type === Header)) {
            return React.cloneElement(child, {
                // @TODO this will override but should merge?
                variant: props.variant,
            });
        }
        return child;
    });

    return (
        <ul
            className={classnames(styles.list, {
                [styles.inset]: v.includes("inset"),
            })}
        >{chld}
        </ul>
    );
};

List.Header = Header;

export { List };
