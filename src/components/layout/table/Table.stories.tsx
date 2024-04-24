import React from "react";

import type { StoryObj, Meta } from "@storybook/react";

import { Table } from "./Table";

const meta: Meta = {
    title: "Components/Layout/Table/Table",
    component: Table,
    tags: ["autodocs", "layout"],

    argTypes: {},
    args: {
        striped: true,
        wide: true,
        centered: true,
    },
};

type Story = StoryObj<typeof Table>;

const Primary: Story = {
    render: args => (
        <Table {...args}>
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
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Juliette</td>
                    <td>23</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Amy</td>
                    <td>55</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Stefan</td>
                    <td>41</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Juliette</td>
                    <td>23</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Amy</td>
                    <td>55</td>
                    <td>edit</td>
                </tr>
            </tbody>
        </Table>
    ),
};

export default meta;
export {
    Primary,
};
