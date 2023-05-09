import React, { useCallback, useState } from "react";

import classnames from "classnames";

import styles from "./input/Input.module.scss";

interface Props {
    children?: never;
}

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props> = ({
    className, children,
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

    const cls = classnames(styles.wrapper, {
        [styles.wrapperFocused]: focused,
    }, styles.input, styles.textarea, className);

    return (
        <textarea {...props} onFocus={handleFocus} onBlur={handleBlur} className={cls} />
    );
};

export {
    TextArea,
};
