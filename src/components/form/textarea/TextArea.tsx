import React, { forwardRef, useCallback, useState } from "react";

import { StyledTextArea } from "./TextArea.styled";

interface Props {
    children?: never;
    error?: boolean;
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    children,
    onFocus, onBlur,
    ...props
}, ref) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);
        onBlur?.(e);
    }, [onBlur]);

    return (
        <StyledTextArea
            {...props}
            ref={ref}
            disabled={Boolean(props.disabled)}
            readOnly={Boolean(props.readOnly)}
            focused={focused}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
});

TextArea.displayName = "TextArea";
TextArea.toString = () => StyledTextArea.toString();

export { TextArea };
export type { TextAreaProps };
