import { dimensionsPxToRem, styled } from "../../../theme";

import { NEGATIVE_PADDING } from "./Modal.styled";

const Container = styled("div", {
    display: "flex",
    marginTop: dimensionsPxToRem(100),
    mx: NEGATIVE_PADDING,
    marginBottom: NEGATIVE_PADDING,
});

const Button = styled("button", {
    "border": "none",
    "borderTop": "1px solid $modalButtonBorder",
    "background": "$modalButtonBg",
    "flex": 1,
    "height": dimensionsPxToRem(156),
    "fontWeight": 500,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",

    "&:not(:first-child)": {
        borderLeft: "1px solid $modalButtonBorder",
    },

    "&:first-child": {
        borderBottomLeftRadius: dimensionsPxToRem(12),
    },

    "&:last-child": {
        borderBottomRightRadius: dimensionsPxToRem(12),
    },

    "variants": {
        variant: {
            main: {
                color: "$mainColor",
            },
        },
    },
});

const ModalButtons = Container as typeof Container & {
    Button: typeof Button;
};
ModalButtons.Button = Button;

export {
    ModalButtons,
};
