import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
//importing redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/title";
import App from "./components/App";

//global JS object GLOBAL state
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
