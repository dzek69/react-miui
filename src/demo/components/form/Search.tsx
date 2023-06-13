import React from "react";

import { SearchContainer, Input, ICON, Icon, Section, List } from "../../../index.js";

const Item = List.Item;

const SearchDemo = () => {
    return (
        <Section.Container>
            <SearchContainer>
                <Input placeholder={"Search..."} prefix={<Icon name={ICON.search} />} />
            </SearchContainer>
            <Section>
                <List>
                    <List.Header>Messages</List.Header>
                    <Item>Lorem</Item>
                    <Item>Ipsum</Item>
                    <Item>Dolor</Item>
                </List>
            </Section>
            <Section>
                <List>
                    <List.Header>Contacts</List.Header>
                    <Item>Lorem</Item>
                    <Item>Ipsum</Item>
                    <Item>Dolor</Item>
                </List>
            </Section>
        </Section.Container>
    );
};

export { SearchDemo };
