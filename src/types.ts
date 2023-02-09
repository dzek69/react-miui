import type React from "react";

type AnyComponent<P> = React.ComponentClass<P> | React.FC<P>;

export type {
    AnyComponent,
};
