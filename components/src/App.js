import React from 'react';
import { Summary } from "./Summary";

let names = ["Sirwan", "Behzad", "Shaho"];

export default () => {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => {
          return (
            <tr>
              <Summary index={index} name={name} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}