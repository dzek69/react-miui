import React from "react";
import { Section } from "../../../../components/layout/section/Section.js";
import { List } from "../../../../components/layout/list/List";
import { Item } from "../../../../components/layout/list/Item";

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
