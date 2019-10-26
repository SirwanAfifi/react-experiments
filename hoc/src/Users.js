import React from 'react';
import { DataComponent } from "./DataList";

const Users = ({ data, selected = "" }) =>
    <select className="poeple-list" defaultValue={selected}>
        {data.map(({ name }, i) =>
            <option key={i} value={name}>{name}</option>)}
    </select>;

export const UsersDropDowns =
    DataComponent(Users,
        "https://jsonplaceholder.typicode.com/users");