import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { toast, Toaster as SonnerToaster } from "sonner";

type SonnerToasterProps = React.ComponentProps<typeof SonnerToaster>;

interface ToasterProviderProps extends SonnerToasterProps {
    children?: React.ReactNode;
}

const ToasterProvider: React.FC<ToasterProviderProps> = ({ children, position = "bottom-center", ...rest }) => {
    const [body, setBody] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBody(document.body);
    }, []);

    const toaster = <SonnerToaster position={position} {...rest} />;

    return (
        <>
            {children}
            {body ? createPortal(toaster, body) : null}
        </>
    );
};

type ToasterFn = (text: string, timeout?: number) => string | number;

const useToaster = (): ToasterFn => {
    return useCallback((text, timeout) => {
        return toast(text, timeout != null ? { duration: timeout } : undefined);
    }, []);
};

export { ToasterProvider, useToaster, toast };
export type { ToasterProviderProps };
