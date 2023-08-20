import React from "react";

import { Header, HeaderIconAction, ICON, StickyHeader } from "../../../../index";

import styles from "./StickyHeader.module.scss";

const LongContent: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
    const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);
    return <>{longContent}</>;
};

const StickyHeaderDemo = () => {
    return (
        <StickyHeader>
            <Header>Some place</Header>
            <StickyHeader.Content>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StickyHeaderBottomDemo = () => {
    return (
        <StickyHeader position={"bottom"}>
            <Header>Some place</Header>
            <StickyHeader.Content>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StickyHeaderTopBottomDemo = () => {
    return (
        <StickyHeader position={"top"}>
            <Header>Some place</Header>
            <StickyHeader.Content>
                <StickyHeader position={"bottom"}>
                    <Header>Some place</Header>
                    <StickyHeader.Content>
                        <LongContent />
                    </StickyHeader.Content>
                </StickyHeader>
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StickyHeaderLeftDemo = () => {
    return (
        <StickyHeader position={"left"}>
            <Header>x<br />x<br />x</Header>
            <StickyHeader.Content>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StickyHeaderRightDemo = () => {
    return (
        <StickyHeader position={"right"}>
            <Header>x<br />x<br />x</Header>
            <StickyHeader.Content>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const StickyHeaderLeftCenterDemo = () => {
    return (
        <StickyHeader position={"left"}>
            <Header center={true}>x<br />x<br />x</Header>
            <StickyHeader.Content>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

const handleNoop = () => null;

const StickyColoredBg = () => {
    return (
        <StickyHeader position={"top"}>
            <Header
                center={true}
                variant={"colored"}
                before={<HeaderIconAction icon={ICON.back} onClick={handleNoop} />}
                after={"Text"}
                className={styles.header as string}
            >
                Some text
            </Header>
            <StickyHeader.Content className={"miui-scrollbars"}>
                <div className={styles.coloredBox}>
                    To achieve this effect set <kbd>variant=colored</kbd> & apply these with className:<br />
                    <pre>--custom-header-color: green;<br />--custom-text-color: white;</pre>
                </div>
                <LongContent />
            </StickyHeader.Content>
        </StickyHeader>
    );
};

export {
    StickyHeaderDemo, StickyHeaderBottomDemo, StickyHeaderTopBottomDemo, StickyHeaderLeftDemo, StickyHeaderRightDemo,
    StickyHeaderLeftCenterDemo, StickyColoredBg,
};
