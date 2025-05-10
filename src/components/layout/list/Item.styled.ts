import { css, dimensionsPxToRem, fontPxToRem, pxToRem, styled } from "../../../theme";
import { Icon } from "../../icons/Icon";

const StyledInnerContainer = styled("div", {
    display: "flex",

    minHeight: dimensionsPxToRem(174),
    alignItems: "center",
    gap: "1rem",

    border: "none",
    background: "none",
    width: "100%",
    textAlign: "left",
    fontFamily: "inherit",
    fontSize: "inherit",
});

const StyledItem = styled("li", {
    "listStyleType": "none",
    "margin": 0,
    "padding": 0,

    "fontSize": fontPxToRem(34),

    "&:not(:first-child)": {
        borderTop: "0.37px solid $headerBorder",
    },

    "> *": {
        display: "block",
        padding: 0,
        textDecoration: "none",
    },

    "variants": {
        inset: {
            true: {

                paddingLeft: dimensionsPxToRem(37),

                paddingRight: dimensionsPxToRem(37),
            },
        },
        selected: {
            true: {
                color: "$mainColor",
            },
        },
    },
});

const iconStyles = css({

    width: pxToRem(7),

    marginRight: pxToRem(10),
    display: "inline-block",
});

const StyledIcon = styled(Icon, iconStyles);
const StyledNoIcon = styled("span", iconStyles);

export {
    StyledItem,
    StyledInnerContainer,
    StyledIcon,
    StyledNoIcon,
};
