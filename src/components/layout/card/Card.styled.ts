import { styled } from "../../../theme";

const StyledCard = styled("div", {
    "background": "$background",
    "borderRadius": "5px",
    "display": "flex",
    "flexDirection": "column",

    "& + &": {
        marginTop: "23px",
    },

    "variants": {
        variant: {
            margin: {
                marginLeft: "23px",
                marginRight: "23px",
            },
        },
    },
});

export {
    StyledCard,
};
