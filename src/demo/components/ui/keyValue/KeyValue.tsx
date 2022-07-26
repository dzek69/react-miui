import React from "react";

import { Icon, ICON, KeyValue, Section } from "../../../../index.js";

interface Props {}

const items = [
    {
        key: "Turbo",
        value: "100x",
    },
    {
        key: "Turbo",
        value: "100x",
        icon: <Icon name={ICON.heart} />,
        onClick: () => { alert(1); },
    },
    {
        value: "99%",
        icon: <Icon name={ICON.battery} />,
    },
    {
        key: "4,25 V",
        value: "99%",
        icon: <Icon name={ICON.battery} />,
    },
    {
        key: "Just key",
    },
    {
        value: "Just value",
    },
    {
        key: <>Multi line<br />key</>,
    },
    {
        value: <>Multi line<br />value</>,
    },
];

const KeyValueDemo: React.FC<Props> = (props) => {
    return (
        <Section variant={["vertical", "horizontal"]}>
            <KeyValue items={items} valueFirst={true} cols={3} />
        </Section>
    );
};

export { KeyValueDemo };
