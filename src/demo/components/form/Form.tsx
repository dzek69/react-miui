import React from "react";

import { Section, Input, Label, Button, TextArea } from "../../../index";

// @TODO add checkbox
// @TODO add toggle
// @TODO some kind of `form` wrapper which also takes cares of margins?
const FormDemo = () => {
    return (
        <Section.Container>
            <Section>
                <Section vertical={true} horizontal={true}>
                    <Label label={"First name"}>
                        <Input placeholder={""} />
                    </Label>
                    <Label label={"E-mail"}>
                        <Input placeholder={"Don't forget the @"} suffix={".com"} />
                    </Label>
                    <Label label={"Your story"}>
                        <TextArea placeholder={"Hello"} />
                    </Label>
                    <Label>
                        <Button>Submit</Button>
                    </Label>
                </Section>
            </Section>
        </Section.Container>
    );
};

export { FormDemo };
