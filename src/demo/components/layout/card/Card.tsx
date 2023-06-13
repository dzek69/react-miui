import React from "react";

import { Card, Section } from "../../../../index.js";

const CardDemo = () => {
    return (
        <Section.Container>
            <Card>
                <Section vertical={true} horizontal={true}>Content</Section>
            </Card>
            <Card>
                <Section vertical={true} horizontal={true}>Content</Section>
            </Card>
            <Card variant={"margin"}>
                <Section vertical={true} horizontal={true}>Content</Section>
            </Card>
        </Section.Container>
    );
};

export { CardDemo };
