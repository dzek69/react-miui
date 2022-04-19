import React, { useState } from "react";
import { Choice } from "../../../components/form/choice/Choice";
import { Section } from "../../../components/layout/section/Section";

import styles from "./Choice.module.scss";

interface Props {}

const values: ("Single" | "Multiple")[] = ["Single", "Multiple"];

const ChoiceDemo: React.FC<Props> = () => {
    const [current, handleCurrent] = useState(values[0]);

    return (
        <Section variant={["vertical", "horizontal"]}>
            <Choice values={values} value={current} name={"rnd"} onChange={handleCurrent} />
        </Section>
    );
};

const values2 = [
    {
        label: "Option 1",
        value: "opt",
    },
    {
        label: "Option 2",
        value: "xxx",
    },
];

const ChoiceDemo2: React.FC<Props> = () => {
    const [current, handleCurrent] = useState(values2[0].value);

    return (
        <Section variant={["vertical", "horizontal"]}>
            <Choice
                values={values2}
                value={current}
                name={"rnd"}
                onChange={handleCurrent}
                className={styles.darker}
                variant={"wide"}
            />

            Current: {current}
        </Section>
    );
};

export { ChoiceDemo, ChoiceDemo2 };
