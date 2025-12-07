import { borderPxToRem, css, fontPxToRem, styled } from "../../../theme";

const item = css({
    display: "inline-flex",
    boxSizing: "border-box",
    padding: "10px",
    alignItems: "center",
    gap: "10px",
    border: "none",
    background: "none",
});

const Container = styled("div", {
    "--kv-border-color": "$colors$headerBorder",
    "--kv-border": `${borderPxToRem(1)} solid var(--kv-border-color)`,
    "--kv-background-color": "$colors$background",
    "--kv-hover-background-color": "$colors$activeBg",
    "border": "1px solid var(--kv-border-color)",
    "backgroundColor": "var(--kv-background-color)",
    "borderRadius": "5px",
    "display": "flex",
    "flexWrap": "wrap",
});

const Item = styled("div", item, {
    "&:is(button):hover": {
        background: "var(--kv-hover-background-color)",
    },

    "variants": {
        notFirstRow: {
            true: {
                borderTop: "var(--kv-border)",
            },
        },
        notFirstCol: {
            true: {
                borderLeft: "var(--kv-border)",
            },
        },
    },
});

const KeyValuePair = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
});

const Key = styled("div", {
    fontSize: fontPxToRem(22),
    color: "$sub",
});

const Value = styled("div", {
    fontSize: fontPxToRem(29),
});

const Icon = styled("div", {
    "--KeyValueStyledIconDummyVar": "0",
});

export {
    Container,
    Item,
    KeyValuePair,
    Key,
    Value,
    Icon,
};
