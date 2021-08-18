import React from "react";

import { Header } from "../../../../index.js";

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

export { HeaderDemo };
