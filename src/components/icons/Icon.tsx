import type { AnyComponent } from "../../types";

import React from "react";
import { Checkmark } from "./Checkmark";

enum ICON {
    checkmark = "checkmark",
}

interface Props {
    name: ICON;
}

const iconsMap = new Map<ICON, AnyComponent>([
    [
        ICON.checkmark, Checkmark,
    ],
]);

const Icon: React.FC<Props> = ({ name: iconName, ...props }) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C {...props} />;
};

export { Icon, ICON };
