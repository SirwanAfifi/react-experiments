import * as React from "react";
import { Component } from "react";
import { DataTable } from "./components/DataTable";

interface AppProps {}

export const App = (props: AppProps) => {
  return (
    <DataTable
      headers={[
        { title: "ID" },
        { title: "First Name" },
        { title: "Last Name" },
        { title: "Age" }
      ]}
      rows={[
        {
          id: 1,
          firstName: "Sirwan",
          lastName: "Afifi",
          age: 30
        },
        {
          id: 1,
          firstName: "Sirwan",
          lastName: "Afifi",
          age: 30
        },
        {
          id: 1,
          firstName: "Sirwan",
          lastName: "Afifi",
          age: 30
        }
      ]}
    />
  );
};
