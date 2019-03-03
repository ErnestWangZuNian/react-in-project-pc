import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import App from "./app";

export default () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/dashboard/index" push />}
      />
      <Route path="/app" component={App} />
      {/* <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} /> */}
    </Switch>
  </Router>
);
