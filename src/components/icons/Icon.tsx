import React from "react";

import type { AnyComponent } from "../../types";
import { Checkmark } from "./Checkmark.js";
import { Back } from "./Back.js";
import { Forward } from "./Forward.js";
import { Search } from "./Search.js";
import { Battery } from "./Battery.js";

enum ICON {
    checkmark = "checkmark",
    back = "back",
    forward = "forward",
    search = "search",
    battery = "battery",
}

interface Props {
    name: ICON;
    className?: string;
}

const iconsMap = new Map<ICON, AnyComponent>([
    [ICON.checkmark, Checkmark],
    [ICON.back, Back],
    [ICON.forward, Forward],
    [ICON.search, Search],
    [ICON.battery, Battery],
]);

const Icon: React.FC<Props> = ({ name: iconName, ...props }) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C {...props} />;
};

export { Icon, ICON };
