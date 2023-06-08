import type React from "react";

import type { ComponentProps } from "@stitches/react";
import type { OverwriteProps } from "../../../theme";

import { StyledMessage } from "./Message.styled.js";

type StitchesProps = ComponentProps<typeof StyledMessage>;

interface Props extends StitchesProps {
    /**
     * Type of the message, which affects its appearance.
     */
    type: NonNullable<StitchesProps["type"]>;
    /**
     * Variant of the message, by default the message takes full width and has no space around it.
     * Box variant adds some space around the message.
     */
    variant?: NonNullable<StitchesProps["variant"]>;
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * Message content.
     */
    children: React.ReactNode;
}

/**
 * A component that usually displays result of some action or a tip for the user.
 */
const Message = StyledMessage as unknown as OverwriteProps<typeof StyledMessage, Props>;

export { Message };
