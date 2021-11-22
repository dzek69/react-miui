import React from "react";

import type { AnyComponent } from "../../types";
import { Checkmark } from "./Checkmark";
import { Back } from "./Back";
import { Forward } from "./Forward";

enum ICON {
    checkmark = "checkmark",
    back = "back",
    forward = "forward",
}

interface Props {
    name: ICON;
    className?: string;
}

const iconsMap = new Map<ICON, AnyComponent>([
    [ICON.checkmark, Checkmark],
    [ICON.back, Back],
    [ICON.forward, Forward],
]);

const Icon: React.FC<Props> = ({ name: iconName, ...props }) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C {...props} />;
};

export { Icon, ICON };
