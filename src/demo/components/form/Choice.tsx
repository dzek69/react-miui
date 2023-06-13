import React, { useState } from "react";

import { Choice, Section } from "../../../index.js";

import styles from "./Choice.module.scss";

interface Props {}

const values: ("Single" | "Multiple words")[] = ["Single", "Multiple words"];

const ChoiceDemo: React.FC<Props> = () => {
    const [current, handleCurrent] = useState(values[0]);

    return (
        <Section vertical={true} horizontal={true}>
            <Choice values={values} value={current} name={"rnd"} onChange={handleCurrent} />
        </Section>
    );
};

const values2 = [
    {
        label: "Option 1",
        value: "one",
    },
    {
        label: "Option 2",
        value: "two",
    },
];

const ChoiceDemo2: React.FC<Props> = () => {
    const [current, handleCurrent] = useState(values2[0].value);

    return (
        <>
            <Section vertical={true} horizontal={true}>
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
            <Section vertical={true} horizontal={true}>
                <Choice
                    values={values2}
                    value={current}
                    name={"rn2d"}
                    onChange={handleCurrent}
                    variant={"left"}
                />
            </Section>

        </>
    );
};

export { ChoiceDemo, ChoiceDemo2 };
