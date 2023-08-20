import React from "react";

import type { AnyComponent } from "../../types";

import { Checkmark } from "./Checkmark";
import { Back } from "./Back";
import { Forward } from "./Forward";
import { Search } from "./Search";
import { Battery } from "./Battery";
import { Heart } from "./Heart";
import { Trash } from "./Trash";
import { Config } from "./Config";
import { Dots } from "./Dots";

enum ICON {
    checkmark = "checkmark",
    back = "back",
    forward = "forward",
    search = "search",
    battery = "battery",
    heart = "heart",
    trash = "trash",
    config = "config",
    dots = "dots",
}

interface Props {
    name: ICON;
    className?: string;
}

const iconsMap = new Map<ICON, AnyComponent<{ className?: string }>>([
    [ICON.checkmark, Checkmark],
    [ICON.back, Back],
    [ICON.forward, Forward],
    [ICON.search, Search],
    [ICON.battery, Battery],
    [ICON.heart, Heart],
    [ICON.trash, Trash],
    [ICON.config, Config],
    [ICON.dots, Dots],
]);

const Icon: React.FC<Props> = ({ name: iconName, ...props }) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C {...props} />;
};

export { Icon, ICON };
