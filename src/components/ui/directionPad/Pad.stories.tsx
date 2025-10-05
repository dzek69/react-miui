import React, { useState, useCallback } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { DirectionPad } from "./Pad";

const meta: Meta<typeof DirectionPad> = {
    title: "UI/DirectionPad",
    component: DirectionPad,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof DirectionPad>;

/**
 * Basic usage of the DirectionPad component with all direction buttons and a middle button.
 * This example shows which button was last clicked.
 */
const Default: Story = {
    render: () => {
        const [lastClick, setLastClick] = useState("<none>");

        const handleLeftClick = useCallback(() => {
            setLastClick("left");
        }, []);

        const handleRightClick = useCallback(() => {
            setLastClick("right");
        }, []);

        const handleUpClick = useCallback(() => {
            setLastClick("up");
        }, []);

        const handleDownClick = useCallback(() => {
            setLastClick("down");
        }, []);

        const handleMiddleClick = useCallback(() => {
            setLastClick("res");
        }, []);

        return (
            <>
                <DirectionPad
                    onLeftPress={handleLeftClick}
                    onRightPress={handleRightClick}
                    onUpPress={handleUpClick}
                    onDownPress={handleDownClick}
                    onMiddlePress={handleMiddleClick}
                    middleLabel={"RES"}
                />
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    Last clicked button: {lastClick}
                </div>
            </>
        );
    },
};

/**
 * A simplified version of the DirectionPad with only horizontal controls (left/right).
 */
const HorizontalOnly: Story = {
    render: () => {
        const [lastClick, setLastClick] = useState("<none>");

        const handleLeftClick = useCallback(() => {
            setLastClick("left");
        }, []);

        const handleRightClick = useCallback(() => {
            setLastClick("right");
        }, []);

        const handleMiddleClick = useCallback(() => {
            setLastClick("middle");
        }, []);

        return (
            <>
                <DirectionPad
                    onLeftPress={handleLeftClick}
                    onRightPress={handleRightClick}
                    onMiddlePress={handleMiddleClick}
                    middleLabel={"OK"}
                />
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    Last clicked button: {lastClick}
                </div>
            </>
        );
    },
};

/**
 * Custom styled variant of DirectionPad with a different background color.
 */
const CustomStyled: Story = {
    render: () => {
        const [lastClick, setLastClick] = useState("<none>");

        const handleLeftClick = useCallback(() => {
            setLastClick("left");
        }, []);

        const handleRightClick = useCallback(() => {
            setLastClick("right");
        }, []);

        const handleUpClick = useCallback(() => {
            setLastClick("up");
        }, []);

        const handleDownClick = useCallback(() => {
            setLastClick("down");
        }, []);

        const handleMiddleClick = useCallback(() => {
            setLastClick("middle");
        }, []);

        return (
            <div style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "8px" }}>
                <DirectionPad
                    onLeftPress={handleLeftClick}
                    onRightPress={handleRightClick}
                    onUpPress={handleUpClick}
                    onDownPress={handleDownClick}
                    onMiddlePress={handleMiddleClick}
                    middleLabel={"OK"}
                    className={"custom-pad"}
                />
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    Last clicked button: {lastClick}
                </div>
            </div>
        );
    },
};

export { Default, HorizontalOnly, CustomStyled };
export default meta;
