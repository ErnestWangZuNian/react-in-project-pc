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
      <Route exact path="/" render={() => <Redirect to="/back/index" push />} />
      <Route path="/back" component={App} />
      {/* <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} /> */}
    </Switch>
  </Router>
);