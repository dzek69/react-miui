interface ObjectValue { value: string; label: string }
type Value<T extends string> = T | ObjectValue;

export type {
    ObjectValue,
    Value,
};
