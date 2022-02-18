import React, { useCallback, useState } from "react";
import { Pop } from "../../../../components/ui/pop/Pop";
import { Header } from "../../../../components/layout/header/Header";
import { StickyHeader } from "../../../../components/layout/header/StickyHeader";
import { HeaderIconAction } from "../../../../components/layout/header/HeaderIconAction";
import { ICON } from "../../../../components/icons/Icon";
import { PopOption } from "../../../../components/ui/pop/PopOption";
import { Section } from "../../../../components/layout/section/Section";

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
                <PopOption icon={ICON.heart} onClick={handleClick}>Add new list</PopOption>
                <PopOption icon={ICON.trash} onClick={handleClick}>Remove empty lists</PopOption>
                <PopOption onClick={handleClick}>Configure</PopOption>
            </Pop>
        </>
    );

    const left = (
        <>
            <HeaderIconAction icon={ICON.checkmark} onClick={handleLeftToggle} />
            <Pop anchor={"prev"} open={leftOpen} onClose={handleLeftClose}>
                <PopOption icon={ICON.heart} onClick={handleClick}>Add new list</PopOption>
                <PopOption icon={ICON.trash} onClick={handleClick}>Remove empty lists</PopOption>
                <PopOption onClick={handleClick}>Configure</PopOption>
                <PopOption icon={ICON.heart} onClick={handleClick}>Add new list</PopOption>
                <PopOption icon={ICON.trash} onClick={handleClick}>Remove empty lists</PopOption>
                <PopOption onClick={handleClick}>Configure</PopOption>
                <PopOption icon={ICON.heart} onClick={handleClick}>Add new list</PopOption>
                <PopOption icon={ICON.trash} onClick={handleClick}>Remove empty lists</PopOption>
                <PopOption onClick={handleClick}>Configure</PopOption>
            </Pop>
        </>
    );

    return (
        <StickyHeader>
            <Header before={left} after={after}>
                Some place
            </Header>
            <StickyHeader.Content>
                <Section variant={["vertical", "horizontal"]}>
                    Click on the left or right icon to open the menu
                </Section>
            </StickyHeader.Content>
        </StickyHeader>
    );
};

export { PopDemo };
