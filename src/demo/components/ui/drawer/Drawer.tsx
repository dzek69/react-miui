import React, { useCallback, useState } from "react";

import { Drawer } from "../../../../index";

interface Props {}

const DrawerDemo: React.FC<Props> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const [open, setOpen] = useState(false);

    const handleToggleOpen = useCallback(() => {
        setOpen(p => !p);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Drawer isOpen={open} onClose={handleClose}>
                Drawer content
            </Drawer>
            <button onClick={handleToggleOpen}>open drawer</button>
        </>
    );
};

export { DrawerDemo };
