import React from "react";
import { Section } from "../../../components/layout/section/Section";
import { SectionContainer } from "../../../components/layout/section/SectionContainer";
import { Input } from "../../../components/form/Input";
import { Label } from "../../../components/form/Label";
import { Button } from "../../../components/ui/button/Button";
import { TextArea } from "../../../components/form/TextArea";

// @TODO add checkbox
// @TODO add toggle
// @TODO some kind of `form` wrapper which also takes cares of margins?
const FormDemo = () => {
    return (
        <SectionContainer>
            <Section>
                <Section variant={["vertical", "horizontal"]}>
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
        </SectionContainer>
    );
};

export { FormDemo };
