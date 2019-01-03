import React from "react";
import ReactDOM from "react-dom";
import Api from "./api/index";
import Utils from "./utils/index";
import Router from "./router/route/index.jsx";
import store from "@/store/store";
import { Provider } from "react-redux";
global.Api = Api;
global.Utils = Utils;
global.React = React;
global.ReactDOM = ReactDOM;
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("app")
);
