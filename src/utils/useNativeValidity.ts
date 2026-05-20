import { useCallback, useState } from "react";

import type React from "react";

interface UseNativeValidityResult {
    /** Combined: the explicit `error` prop OR the input's native invalid state. Pass to your `error`/styling. */
    finalError: boolean;
    /** Re-checks validity. Call from your `onBlur`. */
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    /** Clears the invalid flag if the value just became valid. Call from your `onChange`. */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Fires when the form tries to submit an invalid value. Call from your `onInvalid`. */
    onInvalid: () => void;
    /** Clears the invalid flag if the input is currently valid. Useful after programmatic value changes. */
    revalidate: (input: HTMLInputElement | null) => void;
}

/**
 * Tracks native HTML5 validity (pattern, required, type=email/url, etc.) and surfaces it
 * as an `error` boolean — the rule mirrors the CSS `:user-invalid` pseudo-class:
 * invalid is sticky after blur or a failed submit, and clears as soon as the value becomes valid.
 *
 * Compose the returned handlers with your component's own `onBlur` / `onChange` / `onInvalid`.
 */
const useNativeValidity = (error: boolean | undefined): UseNativeValidityResult => {
    const [nativeInvalid, setNativeInvalid] = useState(false);

    const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setNativeInvalid(!e.currentTarget.checkValidity());
    }, []);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checkValidity()) {
            setNativeInvalid(false);
        }
    }, []);

    const onInvalid = useCallback(() => {
        setNativeInvalid(true);
    }, []);

    const revalidate = useCallback((input: HTMLInputElement | null) => {
        if (input?.checkValidity()) {
            setNativeInvalid(false);
        }
    }, []);

    return {
        finalError: Boolean(error) || nativeInvalid,
        onBlur,
        onChange,
        onInvalid,
        revalidate,
    };
};

export { useNativeValidity };
