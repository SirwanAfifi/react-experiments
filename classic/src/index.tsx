import * as React from "react";
import * as ReactDOM from "react-dom";

const contacts = [
  { id: 1, name: "User A" },
  { id: 2, name: "User B" },
  { id: 3, name: "User C" },
  { id: 4, name: "User D" },
];

const element = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Contacts"),
  contacts.map((contact) =>
    React.createElement(
      "div",
      {
        key: contact.id,
        onClick: () => alert(contact.name),
      },
      contact.name
    )
  )
);

ReactDOM.render(element, document.querySelector("#app"));
