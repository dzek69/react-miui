import type { ObjectValue, Value } from "../types/form";

const toObjectValue = (s: Value): ObjectValue => {
    return typeof s === "string" ? { value: s, label: s } : s;
};

export {
    toObjectValue,
};
