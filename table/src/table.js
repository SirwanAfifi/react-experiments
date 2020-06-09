import React from "react";

const data = [
  {
    Name: "Alex",
    LastName: "Doe",
    Id: 1140,
    State: "LAB",
    Date: "01-12-2018",
    INFO: {
      Mid: "Done",
      Knows: "View",
      updates: false,
      Relation: {
        id: "1",
        Statue: "Visible",
        Layout: "HOME",
        options: [
          {
            id: "11",
            Order: 1,
            Value: "O4",
          },
          {
            id: "12",
            Order: 2,
            Value: "O5",
          },
          {
            id: "13",
            Order: 3,
            Value: "O6",
          },
        ],
        estimated: "ONE_DAY",
      },
    },
  },
];

const drawTable = (object) => {
  return (
    <>
      {Object.entries(object).map((item) => {
        console.log(item);
        return (
          <tr>
            <td>{item[0]}</td>
            <td>
              {typeof item[1] === "object"
                ? drawTable(item[1])
                : Array.isArray(item[1])
                ? drawTable(item[1][0])
                : item[1]}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default function Table() {
  return (
    <table>
      {Object.entries(data[0]).map((item) => {
        return (
          <tr>
            <td>{item[0]}</td>
            <td>
              {typeof item[1] === "object" ? drawTable(item[1]) : item[1]}
            </td>
          </tr>
        );
      })}
    </table>
  );
}
