// TODO move to some ezez lib

const contrastColor = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    // Perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
};

const invertColor = (hex: string) => {
    const r = 255 - parseInt(hex.substring(1, 3), 16);
    const g = 255 - parseInt(hex.substring(3, 5), 16);
    const b = 255 - parseInt(hex.substring(5, 7), 16);
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
};

export {
    contrastColor,
    invertColor,
};
