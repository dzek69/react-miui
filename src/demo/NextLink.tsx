import React from "react";

import Link from "next/link";

const NextLink: React.FC<Omit<React.ComponentProps<typeof Link>, "href"> & { href: string }> = (props) => {
    return <Link legacyBehavior={true} {...props} />;
};

export {
    NextLink,
};
