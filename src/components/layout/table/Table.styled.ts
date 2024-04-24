import { styled } from "../../../theme";

const StyledTable = styled("table", {
    "borderSpacing": "10px",
    "borderCollapse": "collapse",

    "> * > tr > *": {
        textAlign: "left",
        padding: "0.75em 0.5em",
        borderBottom: "1px solid $border",
    },

    "> thead > tr:last-child > *": {
        borderBottom: "2px solid $border",
        boxShadow: "0 4px 10px -10px rgba(0, 0, 0, 0.6)",
    },

    "variants": {
        striped: {
            true: {
                "> tbody > tr:nth-child(even) > *": {
                    background: "$tableStripedBg",
                },
            },
        },
        centered: {
            true: {
                marginLeft: "auto",
                marginRight: "auto",
            },
        },
        wide: {
            true: {
                width: "100%",
            },
        },
    },
});

export { StyledTable };
