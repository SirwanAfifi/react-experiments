import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./css/style.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchCharacter } from "./store/reducers";

const store = createStore(searchCharacter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
