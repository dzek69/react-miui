import React from "react";
import Link from "next/link";

import { Item, List } from "../../../../index.js";
import styles from "./List.Item.module.scss";

const ListItemDemo = () => {
    return (
        <List>
            <Item>I am an item</Item>
            <Item>I am an item</Item>
            <Item href={"https://www.npmjs.com/package/react-miui"}>I am clickable item</Item>
            <Item to={"/react-miui"} Link={Link}>I am local link item</Item>
            <Item onClick={() => { window.alert("Clicked"); }}>Click me to see my action</Item>
            <Item className={styles.custom}>I'm a custom item</Item>
            <Item>I am an item</Item>
        </List>
    );
};

export { ListItemDemo };
