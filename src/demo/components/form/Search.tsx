import React from "react";
import { SearchContainer } from "../../../components/layout/section/SearchContainer";
import { Input } from "../../../components/form/Input";
import { ICON, Icon } from "../../../components/icons/Icon";
import { Section } from "../../../components/layout/section/Section";
import { SectionContainer } from "../../../components/layout/section/SectionContainer";
import { List } from "../../../components/layout/list/List";
import { Item } from "../../../components/layout/list/Item";

const SearchDemo = () => {
    return (
        <SectionContainer>
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
        </SectionContainer>
    );
};

export { SearchDemo };
