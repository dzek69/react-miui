import React from "react";

import { Header } from "./Header";
import { Content, StyledStickyHeader } from "./StickyHeader.styled";

const err = new TypeError("StickyHeader needs two children - Header and StickyHeader.Content");

interface ContentComponent {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Content: React.FC<ContentProps>;
}

interface ContentProps {
    className?: string;
    children: React.ReactNode;
}

interface Props {
    position?: "top" | "left" | "right" | "bottom";
    className?: string;
    children: React.ReactNode;
}

const StickyHeader: React.FC<Props> & ContentComponent = (props) => {
    const { children: _children, position = "top", ...rest } = props;

    const children = React.Children.toArray(_children);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (children.length !== 2) {
        throw err;
    }

    let header = children.find(c => typeof c === "object" && "type" in c && c.type === Header),
        content = children.find(c => typeof c === "object" && "type" in c && c.type === StickyHeader.Content);

    if (!header || !content) {
        throw err;
    }

    header = header as never; // @TODO find a better way to silence TS on cloneElement
    content = content as never;

    const contentCls = (content as { props: ContentProps }).props.className;

    return (
        <StyledStickyHeader {...rest} position={position}>
            {React.cloneElement(header, { position })}
            <Content className={contentCls}>
                {content}
            </Content>
        </StyledStickyHeader>
    );
};
// eslint-disable-next-line react/no-multi-comp
StickyHeader.Content = ({ children }) => {
    return <>{children}</>;
};

export { StickyHeader };
