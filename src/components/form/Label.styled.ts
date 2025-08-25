import { styled, fontPxToRem, dimensionsPxToRem } from "../../theme";

const StyledLabel = styled("label", {
    "& + &": {
        marginTop: dimensionsPxToRem(23),
        display: "block",
    },
});

const StyledText = styled("div", {
    fontSize: fontPxToRem(28),
    marginBottom: dimensionsPxToRem(24),
    color: "$sub",

    variants: {
        variant: {
            big: {
                fontSize: fontPxToRem(34),
            },
        },
    },
});

export {
    StyledLabel,
    StyledText,
};
