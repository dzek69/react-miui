import React, { useCallback, useState } from "react";

import { StyledTextArea } from "./TextArea.styled";

interface Props {
    children?: never;
    error?: boolean;
}

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props> = ({
    children,
    onFocus, onBlur,
    ...props
}) => {
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
            disabled={Boolean(props.disabled)}
            readOnly={Boolean(props.readOnly)}
            focused={focused}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export {
    TextArea,
};
