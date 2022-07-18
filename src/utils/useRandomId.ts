import { useMemo } from "react";

let id = 0;

const getRandomId = () => {
    return "r" + String(Date.now()) + "_" + String(++id);
};

const useRandomId = () => {
    return useMemo(getRandomId, []);
};

export { useRandomId };
