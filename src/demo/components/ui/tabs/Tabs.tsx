import React, { useState } from "react";

import { Header, Selector } from "../../../../index.js";

interface Props {}

const values = ["Recent", "Categories", "Whole Disk"];

const TabsDemo: React.FC<Props> = () => {
    const [current, handleCurrent] = useState("Recent");

    return <Header><Selector values={values} value={current} onChange={handleCurrent} /></Header>;
};

export { TabsDemo };
