import React from "react";
import Link from "next/link";
import { Action } from "../../../../components/ui/action/Action";
import { ICON } from "../../../../components/icons/Icon";
import { StickyHeader } from "../../../../components/layout/header/StickyHeader";
import { Header } from "../../../../components/layout/header/Header";

import styles from "./ActionDemo.module.scss";
import { EqualActions } from "../../../../components/ui/action/EqualActions";

const handleClick = () => { alert(1); };

const ActionDemo: React.FC = () => {
    return (
        <>
            <div>
                <Action icon={ICON.checkmark} /> - action without action
            </div>
            <div>
                <Action icon={ICON.checkmark} Link={Link} to={"react-miui"} /> - internal link action
            </div>
            <div>
                <Action icon={ICON.checkmark} href={"https://www.npmjs.com/package/react-miui"} /> - external link action
            </div>
            <div>
                <Action icon={ICON.checkmark} onClick={handleClick} /> - onClick action
            </div>
            <div>
                <Action icon={ICON.checkmark} onClick={handleClick} label={"Pineapple"} /> - onClick action
            </div>
        </>
    );
};

const ActionsOnLeft = () => {
    return (
        <StickyHeader position={"left"}>
            <Header center={true} className={styles.header}>
                <Action icon={ICON.checkmark} />
                <Action icon={ICON.checkmark} />
                <Action icon={ICON.checkmark} />
            </Header>
            <StickyHeader.Content>
                content
            </StickyHeader.Content>
        </StickyHeader>

    );
};

const ActionsOnBottom = () => {
    return (
        <StickyHeader position={"bottom"}>
            <Header center={true} className={styles.header}>
                <Action icon={ICON.checkmark} />
                <Action icon={ICON.checkmark} />
                <Action icon={ICON.checkmark} />
            </Header>
            <StickyHeader.Content>
                content
            </StickyHeader.Content>
        </StickyHeader>

    );
};

const ActionLabelsOnBottom = () => {
    return (
        <StickyHeader position={"bottom"}>
            <Header center={true} className={styles.header}>
                <Action icon={ICON.checkmark} label={"Add"} />
                <Action icon={ICON.checkmark} label={"Delete"} />
                <Action icon={ICON.checkmark} label={"Share on Web"} />
            </Header>
            <StickyHeader.Content>
                <StickyHeader position={"top"}>
                    <Header center={true} className={styles.header}>
                        <Action icon={ICON.checkmark} label={"Add"} />
                        <Action icon={ICON.checkmark} label={"Delete"} />
                        <Action icon={ICON.checkmark} label={"Share"} />
                    </Header>
                    <StickyHeader.Content>
                        When you put just `Action`s into Header it will be automatically wrapped with EqualActions so if
                        labels width are not equal each action will take the same space as the most wide item.
                        If you don't like this behavior - wrap your actions into React.Fragment {"<></>"} or pass extra
                        {"<span />"}.
                    </StickyHeader.Content>
                </StickyHeader>
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const ActionsDemo = () => {
    return (
        <div>
            To make every action take the same amount of horizontal space you need to wrap every Action with Actions
            wrapper. Some components (like Header) will do that automatically for you. If you need to use Actions
            outside of such components - manually wrap them with Actions.

            <div>
                <EqualActions>
                    <Action icon={ICON.checkmark} label={"Add"} />
                    <Action icon={ICON.checkmark} label={"Delete"} />
                    <Action icon={ICON.checkmark} label={"Share on Web"} />
                </EqualActions>
            </div>
        </div>
    );
};

export { ActionDemo, ActionsOnLeft, ActionsOnBottom, ActionLabelsOnBottom, ActionsDemo };
