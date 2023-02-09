import React from "react";

import { Header, ICON, StickyHeader, HeaderIconAction } from "../../../../index.js";
import { NextLink } from "../../../NextLink.js";

const HeaderDemo = () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers,react/no-array-index-key
    const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);

    return (
        <>
            <Header>Some place</Header>
            {longContent}
        </>
    );
};

const CenteredHeaderDemo = () => {
    return (
        <>
            <Header center={true}>Messages</Header>
            <div>
                Header text is centered
            </div>
        </>
    );
};

const ToolbarVariantDemo = () => {
    return (
        <>
            <Header center={true} variant={"toolbar"}>Toolbar version</Header>
        </>
    );
};

const handleClick = () => { alert(1); };

// eslint-disable-next-line max-lines-per-function
const HeaderWithButtonsDemo = () => {
    const demo = (
        <>
            <HeaderIconAction icon={ICON.back} onClick={handleClick} />
            <HeaderIconAction icon={ICON.checkmark} onClick={handleClick} />
        </>
    );

    return (
        <>
            <Header center={true} before={"A text"}>Messages</Header>
            <div>
                Header text is centered
            </div>
            <Header before={"A text"}>Messages</Header>
            <div>
                Header text is start aligned
            </div>
            <Header before={demo}>Messages</Header>
            <div>
                Some button icons are added on the left to left aligned title
            </div>
            <Header before={demo} center={true}>Messages</Header>
            <div>
                Some button icons are added on the left to centered aligned title
            </div>
            <Header
                before={<HeaderIconAction icon={ICON.back} to={"/react-miui"} Link={NextLink} />}
                center={true}
            >Messages
            </Header>
            <div>
                Some internal link icons are added on the left to centered aligned title
            </div>
            <Header
                before={<HeaderIconAction icon={ICON.back} href={"https://www.npmjs.com/package/react-miui"} />}
                center={true}
            >Messages
            </Header>
            <div>
                Some external link icons are added on the left to centered aligned title
            </div>
            <Header
                before={<HeaderIconAction icon={ICON.back} href={"https://www.npmjs.com/package/react-miui"} />}
                after={<HeaderIconAction icon={ICON.checkmark} href={"https://www.npmjs.com/package/react-miui"} />}
                center={true}
            >Messages
            </Header>
            <div>
                Some external link icons are added on both sides to centered aligned title
            </div>
        </>
    );
};

const HeaderWithButtonsOnSideDemo = () => {
    const demo = (
        <>
            <HeaderIconAction icon={ICON.back} onClick={handleClick} />
            <HeaderIconAction icon={ICON.checkmark} onClick={handleClick} />
        </>
    );

    return (
        <StickyHeader position={"left"}>
            <Header
                center={true}
                before={demo}
                after={demo}
            >M
            </Header>
            <StickyHeader.Content>
                Header is on the side
            </StickyHeader.Content>
        </StickyHeader>
    );
};

export { HeaderDemo, CenteredHeaderDemo, ToolbarVariantDemo, HeaderWithButtonsDemo, HeaderWithButtonsOnSideDemo };
