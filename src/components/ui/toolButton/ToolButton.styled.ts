import { dimensionsPxToRem, fontPxToRem, styled } from "../../../theme";
import { rippleHostStyles } from "../../../utils/useRipple.styled";

/**
 * Small buttons for toolbars
 */
const StyledToolButton = styled("button", rippleHostStyles, {
    height: dimensionsPxToRem(79),
    borderRadius: dimensionsPxToRem(10),
    fontWeight: "bold",
    fontSize: fontPxToRem(23),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: dimensionsPxToRem(16),
    background: "white",
    boxSizing: "border-box",
    border: `${dimensionsPxToRem(6)} solid transparent`,
    color: "$toolButtonText",

    variants: {
        inline: {
            true: {
                width: "auto",
                display: "inline-flex",
            },
        },
        variant: {
            secondary: {
                border: `${dimensionsPxToRem(6)} solid #ffffff42`,
                background: "none",
                color: "white",
            },
            secondaryOnLight: {
                "border": `${dimensionsPxToRem(6)} solid $border`,
                "background": "none",
                "color": "$text",

                // emphasize border on hover (more than just the universal tint overlay)
                "&:hover": {
                    borderColor: "$buttonBorder",
                },
            },
        },
    },
});

export {
    StyledToolButton,
};
