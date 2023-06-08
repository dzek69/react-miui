import React from "react";

import { PopLoader } from "./PopLoader.js";
import { FullLoader } from "./FullLoader.js";

interface Props {
    data?: unknown;
    isLoading?: boolean;
    children: React.ReactNode;
}

/**
 * A full-featured loader that can be used to wrap components that renders data.
 * If not loading it will render whatever is passed in `children`.
 * If loading when there is no data (initial data load) it will render a full screen loader.
 * If loading when there is data (revalidation) it will render a small loader in the top right corner (PopLoader).
 *
 * It requires a parent with `position: relative`.
 */
const Loading: React.FC<Props> = (props) => {
    if (!props.data && props.isLoading) {
        return <FullLoader />;
    }

    const l = props.isLoading ? <PopLoader /> : null;
    return (<>{l}{props.children}</>);
};

export { Loading };
