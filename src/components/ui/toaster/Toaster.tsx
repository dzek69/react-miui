import React, { useCallback } from "react";

import { toast, Toaster as SonnerToaster } from "sonner";

type SonnerToasterProps = React.ComponentProps<typeof SonnerToaster>;

interface ToasterProviderProps extends SonnerToasterProps {
    children?: React.ReactNode;
}

const ToasterProvider: React.FC<ToasterProviderProps> = ({ children, position = "bottom-center", ...rest }) => {
    return (
        <>
            {children}
            <SonnerToaster position={position} {...rest} />
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
