import React, { Component } from "react";
import { HashRouter, Route, Link, NavLink } from "react-router-dom";
import Bundle from "@/component/bundle";
const About = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/about/index.jsx")} />
);
const App = () => (
  <Bundle load={require("bundle-loader?lazy!@/pages/app/index.jsx")} />
);
let router = (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
    </div>
  </HashRouter>
);
export default router;
