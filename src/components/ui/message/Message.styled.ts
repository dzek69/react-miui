import { dimensionsPxToRem, pxToRem, styled } from "../../../theme";

const StyledMessage = styled("div", {
    borderStyle: "solid",
    borderColor: "$border",
    borderWidth: 0,
    borderTopWidth: pxToRem(1),
    borderBottomWidth: pxToRem(1),
    padding: `${dimensionsPxToRem(47)} ${dimensionsPxToRem(83)}`,
    fontWeight: 500,
    lineHeight: 1.25,

    variants: {
        variant: {
            box: {
                borderLeftWidth: pxToRem(1),
                borderRightWidth: pxToRem(1),
                margin: pxToRem(12),
            },
            stretch: {},
        },
        type: {
            warning: {
                backgroundColor: "$yellow3",
                borderColor: "$yellow1",
                color: "$yellow2",
            },
            error: {
                backgroundColor: "$pinky3",
                borderColor: "$pinky1",
                color: "$pinky2",
            },
            info: {
                backgroundColor: "$blue3",
                borderColor: "$blue2",
                color: "$blue1",
            },
            tip: {},
        },
    },
});

export {
    StyledMessage,
};
