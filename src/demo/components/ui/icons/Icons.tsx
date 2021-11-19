import React from "react";
import { Icon, ICON } from "../../../../index.js";

const IconsDemo: React.FC = () => {
    const icons = Object.values(ICON).map((value) => {
        return (
            <li key={value}>
                <Icon name={value} />
                {value}
            </li>
        );
    });

    return (
        <div>
            Icons:
            <ul>
                {icons}
            </ul>
        </div>
    );
};

export { IconsDemo };
