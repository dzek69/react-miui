import React, { useCallback, useState } from "react";

import { SunOne } from "@icon-park/react";

import { Pop, Header, StickyHeader, HeaderIconAction, ICON, Section, Icon } from "../../../../index";

interface Props {}

const handleClick = () => {
    console.info("Clicked an option");
};

// eslint-disable-next-line max-lines-per-function
const PopDemo: React.FC<Props> = () => {
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
                <Section horizontal={true} vertical={true}>
                    Click on the left or right icon to open the menu
                </Section>
            </StickyHeader.Content>
        </StickyHeader>
    );
};

export { PopDemo };
