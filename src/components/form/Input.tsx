import React, { useCallback, useState } from "react";
import classnames from "classnames";

import styles from "./Input.module.scss";

interface Props {
    children?: never;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}

const Input: React.FC<Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> & Props> = ({
    className, children,
    prefix, suffix,
    onFocus, onBlur,
    ...props
}) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
    }, [onFocus]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
    }, [onBlur]);

    const wrapperCls = classnames(styles.wrapper, {
        [styles.wrapperFocused]: focused,
        [styles.disabled]: props.disabled,
        [styles.readOnly]: props.readOnly,
    }, className);

    const prefixElem = prefix ? <div className={styles.prefix}>{prefix}</div> : null;
    const suffixElem = suffix ? <div className={styles.suffix}>{suffix}</div> : null;

    return (
        <div className={wrapperCls}>
            {prefixElem}
            <input {...props} onFocus={handleFocus} onBlur={handleBlur} className={styles.input} />
            {suffixElem}
        </div>
    );
};

export {
    Input,
};
