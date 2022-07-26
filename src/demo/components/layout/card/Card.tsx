import React from "react";

import { Card, Section } from "../../../../index.js";

const CardDemo = () => {
    return (
        <Section.Container>
            <Card>
                <Section variant={["vertical", "horizontal"]}>Content</Section>
            </Card>
            <Card>
                <Section variant={["vertical", "horizontal"]}>Content</Section>
            </Card>
            <Card variant={"margin"}>
                <Section variant={["vertical", "horizontal"]}>Content</Section>
            </Card>
        </Section.Container>
    );
};

export { CardDemo };
