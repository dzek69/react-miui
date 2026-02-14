import React, { forwardRef } from "react";

import type { ComponentProps } from "@stitches/react";

import { Item, Label, Separator, StyledStats, Value } from "./Stats.styled";

type Stat = {
    label: string;
    value: React.ReactNode;
};

type StyledStatsProps = ComponentProps<typeof StyledStats>;

type StatsProps = StyledStatsProps & {
    stats: Stat[];
};

const Stats = forwardRef<HTMLUListElement, StatsProps>(({ stats, ...props }, ref) => {
    const list = stats.map((s, k) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={k}>
            <Value>{s.value}</Value>
            <Label>{s.label}</Label>
        </Item>
    ));

    const len = list.length;
    for (let i = 0; i < len - 1; i++) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        list.splice((i * 2) + 1, 0, <Separator key={`separator${i}`} />);
    }

    return (
        <StyledStats {...props} ref={ref}>
            {list}
        </StyledStats>
    );
});

Stats.displayName = "Stats";
Stats.toString = () => StyledStats.toString();

const StatsItemSelector = Item.toString();
const StatsSeparatorSelector = Separator.toString();
const StatsLabelSelector = Label.toString();
const StatsValueSelector = Value.toString();

export {
    Stats,
    StatsItemSelector,
    StatsSeparatorSelector,
    StatsLabelSelector,
    StatsValueSelector,
};
export type { StatsProps, Stat };
