import React from 'react';
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names = ["Sirwan", "Behzad", "Shaho"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"))
}

export default function App() {
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
              <Summary index={index} name={name}
                reverseCallback={reverseNames} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}