const makeVariants = <T extends string>(variants: T | T[] | undefined): T[] => {
    if (!variants) {
        return [];
    }
    if (typeof variants === "string") {
        return variants.split(" ").filter(Boolean) as T[];
    }
    return variants;
};

export {
    makeVariants,
};
