import React, { useCallback, useState } from "react";

import { SunOne } from "@icon-park/react";

import type { Meta, StoryObj } from "@storybook/react";

import { HeaderIconAction } from "../../layout/header/HeaderIconAction";
import { Icon, ICON } from "../../icons/Icon";
import { StickyHeader } from "../../layout/header/StickyHeader";
import { Header } from "../../layout/header/Header";
import { Section } from "../../layout/section/Section";

import { Pop } from "./Pop";

const meta: Meta = {
    title: "Components/UI/Pop",
    component: Pop,
    tags: ["autodocs", "layout"],
    args: {
        value: 25,
        valueFrom: 15,
        scaleFrom: 10,
        scaleTo: 30,
    },
};

type Story = StoryObj<typeof Pop>;

const handleClick = () => {
    console.info("Clicked an option");
};

const Primary: Story = {
    // eslint-disable-next-line max-lines-per-function
    render: (args) => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [open, setOpen] = useState(false);
        const [leftOpen, setLeftOpen] = useState(false);

        const handleToggle = useCallback(() => {
            setOpen(p => !p);
        }, []);

        const handleLeftToggle = useCallback(() => {
            setLeftOpen(p => !p);
        }, []);

        const handleClose = useCallback(() => {
            setOpen(false);
        }, []);

        const handleLeftClose = useCallback(() => {
            setLeftOpen(false);
        }, []);

        const after = (
            <>
                <HeaderIconAction icon={ICON.config} onClick={handleToggle} />
                <Pop anchor={"prev"} open={open} onClose={handleClose}>
                    <Pop.Option icon={<Icon name={ICON.heart} />} onClick={handleClick}>Add new list</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.trash} />} onClick={handleClick}>Remove empty lists</Pop.Option>
                    <Pop.Option onClick={handleClick}>Configure</Pop.Option>
                </Pop>
            </>
        );

        const left = (
            <>
                <HeaderIconAction icon={ICON.checkmark} onClick={handleLeftToggle} />
                <Pop anchor={"prev"} open={leftOpen} onClose={handleLeftClose}>
                    <Pop.Option icon={<Icon name={ICON.heart} />} onClick={handleClick}>Add new list</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.trash} />} onClick={handleClick}>Remove empty lists</Pop.Option>
                    <Pop.Option icon={<SunOne />} onClick={handleClick}>Configure</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.heart} />} onClick={handleClick}>Add new list</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.trash} />} onClick={handleClick}>Remove empty lists</Pop.Option>
                    <Pop.Option onClick={handleClick}>Configure</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.heart} />} onClick={handleClick}>Add new list</Pop.Option>
                    <Pop.Option icon={<Icon name={ICON.trash} />} onClick={handleClick}>Remove empty lists</Pop.Option>
                    <Pop.Option icon={<>text</>} onClick={handleClick}>Configure</Pop.Option>
                </Pop>
            </>
        );

        return (
            <StickyHeader>
                <Header before={left} after={after}>
                    Some place
                </Header>
                <StickyHeader.Content>
                    <Section horizontal={true} vertical={true} css={{ minHeight: 600 }}>
                        Click on the left or right icon to open the menu
                    </Section>
                </StickyHeader.Content>
            </StickyHeader>
        );
    },
};

export default meta;
export {
    Primary,
};
