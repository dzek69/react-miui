import React, { forwardRef } from "react";

import type { ReactElement } from "react";

import {
    Container,
    Icon,
    Item,
    Key,
    KeyValuePair,
    Value,
} from "./KeyValue.styled";

type KeyValueProps = {
    items: Array<{ key?: React.ReactNode; value?: React.ReactNode; icon?: React.ReactNode; onClick?: () => void }>;
    cols?: number;
    valueFirst?: boolean;
    className?: string;
};

const DEFAULT_COLS = 2;

const KeyValue = forwardRef<HTMLDivElement, KeyValueProps>((props, ref) => {
    const cols = props.cols ?? DEFAULT_COLS;

    const items: ReactElement[] = props.items.map((value, key) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const width = `${100 / cols}%`;
        const style = { width };

        const isFirstRow = key < cols;
        const isFirstCol = (key % cols) === 0;

        const kvKey = value.key != null ? <Key>{value.key}</Key> : null;
        const kvValue = value.value != null ? <Value>{value.value}</Value> : null;

        const keyValue = (
            <KeyValuePair>
                {props.valueFirst ? kvValue : kvKey}{!props.valueFirst ? kvValue : kvKey}
            </KeyValuePair>
        );
        const icon = value.icon != null ? <Icon>{value.icon}</Icon> : null;

        const component = value.onClick ? "button" : "div";
        return React.createElement(Item, {
            // eslint-disable-next-line react/no-array-index-key
            key,
            style,
            // @ts-expect-error idk why ts can't figure it out, but it works
            as: component,
            notFirstRow: !isFirstRow,
            notFirstCol: !isFirstCol,
        }, <>{icon}{keyValue}</>);
    });

    const rest = items.length % cols;
    const missingItems = rest ? cols - rest : 0;
    if (missingItems) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const width = `${(100 / cols) * (missingItems)}%`;
        const style = { width };

        const firstRow = items.length < cols;
        const firstCol = (items.length % cols) === 0;

        items.push(
            <Item key={"extra"} css={style} notFirstCol={!firstCol} notFirstRow={!firstRow} />,
        );
    }

    return (
        <Container className={props.className} ref={ref}>
            {items}
        </Container>
    );
});

KeyValue.displayName = "KeyValue";
KeyValue.toString = () => Container.toString();

const KeyValueItemSelector = Item.toString();
const KeyValuePairSelector = KeyValuePair.toString();
const KeyValueKeySelector = Key.toString();
const KeyValueValueSelector = Value.toString();
const KeyValueIconSelector = Icon.toString();

export {
    KeyValue,
    KeyValueItemSelector,
    KeyValuePairSelector,
    KeyValueKeySelector,
    KeyValueValueSelector,
    KeyValueIconSelector,
};
export type { KeyValueProps };
