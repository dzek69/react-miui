/** Pads a number to a 2-digit string with a leading zero (e.g. `7` → `"07"`). */
const padTwo = (n: number): string => n.toString().padStart(2, "0");

/** Clamps each completed pair in the digit buffer to a valid range: HH≤23, MM≤59, SS≤59. */
const clampDigits = (digits: string, withSeconds: boolean): string => {
    if (digits.length < 2) {
        return digits;
    }
    let hh = parseInt(digits.slice(0, 2), 10);
    if (hh > 23) {
        hh = 23;
    }
    let out = padTwo(hh);
    if (digits.length < 4) {
        return out + digits.slice(2);
    }
    let mm = parseInt(digits.slice(2, 4), 10);
    if (mm > 59) {
        mm = 59;
    }
    out += padTwo(mm);
    if (!withSeconds || digits.length < 6) {
        return out + digits.slice(4);
    }
    let ss = parseInt(digits.slice(4, 6), 10);
    if (ss > 59) {
        ss = 59;
    }
    out += padTwo(ss);
    return out;
};

/**
 * Parses a free-form time string into a clamped 2/4/6-digit buffer.
 * Colon-aware: each colon-separated segment is padded to 2 digits, so `"3:40"` → `"0340"`.
 * Used by the modal to extract HH/MM/SS from whatever the user typed.
 */
const parseTimeText = (text: string, withSeconds: boolean): string => {
    if (!text) {
        return "";
    }
    const max = withSeconds ? 6 : 4;
    const segments = text.split(":");
    let raw: string;
    if (segments.length === 1) {
        raw = (segments[0] ?? "").replace(/\D/gu, "");
        if (raw.length === 1) {
            raw = "0" + raw;
        }
    }
    else {
        raw = segments.map((s) => {
            const d = s.replace(/\D/gu, "");
            if (d.length === 0) {
                return "";
            }
            if (d.length === 1) {
                return "0" + d;
            }
            return d.slice(0, 2);
        }).join("");
    }
    return clampDigits(raw.slice(0, max), withSeconds);
};

export { padTwo, parseTimeText };
