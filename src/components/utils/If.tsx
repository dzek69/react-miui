import React from "react";

interface Props {
    condition?: unknown;
    children: React.ReactNode;
}

const If: React.FC<Props> = (props) => {
    if (Boolean(props.condition)) { // eslint-disable-line no-extra-boolean-cast
        return <>{props.children}</>;
    }
    return null;
};

export { If };
