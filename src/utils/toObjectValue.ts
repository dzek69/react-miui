import type { ObjectValue, Value } from "../types/form";

const toObjectValue = <T extends string>(s: Value<T>): ObjectValue => {
    return typeof s === "string" ? { value: s, label: s } : s;
};

export {
    toObjectValue,
};
