import React from "react";

import { Header, StickyHeader } from "../../../../index.js";

const LongContent: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);
    return <>{longContent}</>;
};

const StickyHeaderDemo = () => {
    return (
        <StickyHeader>
            <Header >Some place</Header>
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

export {
    StickyHeaderDemo, StickyHeaderBottomDemo, StickyHeaderTopBottomDemo, StickyHeaderLeftDemo, StickyHeaderRightDemo,
    StickyHeaderLeftCenterDemo,
};
