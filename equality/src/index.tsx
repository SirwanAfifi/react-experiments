import React, { useState } from "react";
import ReactDOM from "react-dom";
const equalities = [
  true,
  false,
  1,
  0,
  -1,
  "true",
  "false",
  "1",
  "0",
  "-1",
  "",
  null,
  undefined,
  Infinity,
  -Infinity,
  [],
  {},
  [[]],
  [0],
  [1],
  NaN,
];
function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const table = (strictEquality: boolean = false) => {
    const table = [];
    for (let i = 0; i < equalities.length; i++) {
      for (let j = 0; j < equalities.length; j++) {
        table.push(
          <div
            className={`${selectedItem === equalities[i]}`}
            style={{
              width: 10,
              height: 10,
              border: "1px solid gray",
              backgroundColor: strictEquality
                ? equalities[i] === equalities[j]
                  ? "dodgerblue"
                  : "white"
                : equalities[i] == equalities[j]
                ? "dodgerblue"
                : "white",
            }}
          ></div>
        );
      }
    }
    return (
      <>
        <div
          style={{
            display: "grid",
            width: 450,
            padding: 10,
            gridTemplateColumns: `repeat(${equalities.length}, 1fr)`,
          }}
        >
          {equalities.map((eq) => {
            return (
              <span
                style={{ writingMode: "vertical-lr", textAlign: "right" }}
              >{`${eq}`}</span>
            );
          })}
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${equalities.length}, 1fr)`,
              gap: 10,
              border: "1px solid gray",
              padding: 10,
              width: 450,
            }}
          >
            {table}
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {table()}
      {table(true)}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
