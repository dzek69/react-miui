import { useHash } from "react-use";

const safeUseHash = () => {
    if (typeof window === "undefined") {
        return "";
    }

    const [hash] = useHash();

    return hash;
};

export {
    safeUseHash,
};
