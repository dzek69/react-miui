import React from "react";

import { Table } from "../../../../index.js";

import styles from "./TableDemo.module.scss";

interface Props {}

const TableDemo: React.FC<Props> = (props) => {
    return (
        <Table variant={"striped"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stefan</td>
                    <td>41</td>
                    <td className={styles.actions}>edit</td>
                </tr>
                <tr>
                    <td>Juliette</td>
                    <td>23</td>
                    <td className={styles.actions}>edit</td>
                </tr>
                <tr>
                    <td>Amy</td>
                    <td>55</td>
                    <td className={styles.actions}>edit</td>
                </tr>
                <tr>
                    <td>Stefan</td>
                    <td>41</td>
                    <td className={styles.actions}>edit</td>
                </tr>
                <tr>
                    <td>Juliette</td>
                    <td>23</td>
                    <td className={styles.actions}>edit</td>
                </tr>
                <tr>
                    <td>Amy</td>
                    <td>55</td>
                    <td className={styles.actions}>edit</td>
                </tr>
            </tbody>
        </Table>
    );
};

export { TableDemo };
