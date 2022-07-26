import React from "react";

import { Section, List, Item } from "../../../../index.js";

const SectionDemo = () => {
    return (
        <Section.Container>
            <Section>
                <List>
                    <List.Header>Section name</List.Header>
                    <Item>Item</Item>
                    <Item>Item</Item>
                </List>
            </Section>
            <Section>
                <List>
                    <List.Header>Section name</List.Header>
                    <Item>Item</Item>
                    <Item>Item</Item>
                </List>
            </Section>
            <Section>
                <List>
                    <List.Header>Section name</List.Header>
                    <Item>Item</Item>
                    <Item>Item</Item>
                </List>
            </Section>
        </Section.Container>
    );
};

export { SectionDemo };
