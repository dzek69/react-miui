import React, { useState } from "react";
import { Choice } from "../../../components/form/choice/Choice";
import { Section } from "../../../components/layout/section/Section";

interface Props {}

const values = ["Single", "Multiple"];

const ChoiceDemo: React.FC<Props> = () => {
    const [current, handleCurrent] = useState(values[0]);

    return (
        <Section variant={["vertical", "horizontal"]}>
            <Choice values={values} value={current} name={"rnd"} onChange={handleCurrent} />
        </Section>
    );
};

export { ChoiceDemo };
