import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./css/style.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { searchCharacter } from "./store/reducers";

const logger = createLogger();
const store = createStore(searchCharacter, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
