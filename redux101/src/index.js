import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./css/style.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchCharacter, requestCharacter } from "./store/reducers";

const logger = createLogger();

const rootReducer = combineReducers({
  searchCharacter,
  requestCharacter
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
