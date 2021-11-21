import type { AnyComponent } from "../../types";

import React from "react";
import { Checkmark } from "./Checkmark";
import { Back } from "./Back";

enum ICON {
    checkmark = "checkmark",
    back = "back",
}

interface Props {
    name: ICON;
    className?: string;
}

const iconsMap = new Map<ICON, AnyComponent>([
    [ICON.checkmark, Checkmark],
    [ICON.back, Back],
]);

const Icon: React.FC<Props> = ({ name: iconName, ...props }) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C {...props} />;
};

export { Icon, ICON };
