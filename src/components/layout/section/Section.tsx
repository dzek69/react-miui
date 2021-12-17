import React from "react";
import classnames from "classnames";

import { SectionContainer } from "./SectionContainer.js";
import { makeVariants } from "../../../utils/makeVariants.js";
import styles from "./Section.module.scss";

interface SubComponents {
    Container: typeof SectionContainer;
}

type Variant = "horizontal" | "vertical";

interface Props {
    variant?: Variant | Variant[];
}

const Section: React.FC<Props> & SubComponents = (props) => {
    const v = makeVariants(props.variant);

    const cls = classnames(styles.section, {
        [styles.vertical]: v.includes("vertical"),
        [styles.horizontal]: v.includes("horizontal"),
    });
    return (
        <section className={cls}>
            {props.children}
        </section>
    );
};

Section.Container = SectionContainer;

export { Section };
