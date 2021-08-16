import React from "react";

import { Header, StickyHeader } from "../../../../index.js";

const StickyHeaderDemo = () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const longContent = new Array(1000).fill(null).map((_, key) => <div key={key}>content</div>);

    return (
        <StickyHeader>
            <Header>Some place</Header>
            <StickyHeader.Content>
                {longContent}
            </StickyHeader.Content>
        </StickyHeader>
    );
};

export { StickyHeaderDemo };
