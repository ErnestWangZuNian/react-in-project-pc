import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import App from "./app";
import Login from "@/pages/common/login";
import Noauth from "@/pages/common/noauth";
import NoFound from "@/pages/common/nofound";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/back/index" push />} />
      <Route path="/back" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/403" component={Noauth} />
      <Route path="/404" component={NoFound} />
    </Switch>
  </Router>
);
