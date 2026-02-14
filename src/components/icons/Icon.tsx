import React, { forwardRef } from "react";

import { Back } from "./Back";
import { Battery } from "./Battery";
import { Checkmark } from "./Checkmark";
import { Config } from "./Config";
import { Dots } from "./Dots";
import { Forward } from "./Forward";
import { Heart } from "./Heart";
import { Search } from "./Search";
import { Trash } from "./Trash";

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

type IconComponent = React.ForwardRefExoticComponent<{ className?: string } & React.RefAttributes<SVGSVGElement>>;

const iconsMap = new Map<ICON, IconComponent>([
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

const Icon = forwardRef<SVGSVGElement, Props>(({ name: iconName, ...props }, ref) => {
    const C = iconsMap.get(iconName);
    if (!C) {
        throw new TypeError("Unknown icon: " + iconName);
    }
    return <C ref={ref} {...props} />;
});

Icon.displayName = "Icon";

export { Icon, ICON };

export type {
    Props as IconProps,
};
