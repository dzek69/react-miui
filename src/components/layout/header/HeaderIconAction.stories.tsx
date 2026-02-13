import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { styled } from "../../../theme";
import { Header } from "./Header";
import { HeaderIconAction } from "./HeaderIconAction";

const meta: Meta = {
    title: "Components/Layout/Header/HeaderIconAction",
    component: HeaderIconAction,
    tags: ["autodocs", "layout"],
    render: (args) => {
        return (
            <Header before={<HeaderIconAction {...args} icon={<>i</>} />}>
                On the left you can see the icon
            </Header>
        );
    },
};

type Story = StoryObj<typeof HeaderIconAction>;

const Primary: Story = {};

const MultipleIcons: Story = {
    render: ({ onClick: _onClick, ...args }) => {
        const after = (
            <>
                <div>some text</div>
                <HeaderIconAction {...args} icon={<>i</>} />
                <HeaderIconAction {...args} icon={<>i</>} />
            </>
        );
        return (
            <Header after={after}>
                On the left you can see the icon
            </Header>
        );
    },
};

const HeaderWithCustomIcon = styled(Header, {
    [`& ${HeaderIconAction}`]: {
        color: "red",
    },
});

const DeepSelector: Story = {
    render: ({ onClick: _onClick, ...args }) => {
        const after = (
            <>
                <div>some text</div>
                <HeaderIconAction
                    to={"/"}
                    Link={({ children }) => (
                        <a
                            href={"/"}
                            onClick={(e) => {
                                e.preventDefault();
                                alert("custom link clicked");
                            }}
                        >{children}
                        </a>
                    )}
                    {...args}
                    icon={<>i</>}
                />
                <HeaderIconAction
                    href={"/"}
                    {...args}
                    icon={<>i</>}
                />
                <HeaderIconAction
                    {...args}
                    icon={<>i</>}
                />
            </>
        );
        return (
            <HeaderWithCustomIcon after={after}>
                On the left you can see the icon
            </HeaderWithCustomIcon>
        );
    },
};

export {
    Primary,
    MultipleIcons,
    DeepSelector,
};

export default meta;
