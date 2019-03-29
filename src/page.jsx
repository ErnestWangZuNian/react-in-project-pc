import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import App from "@/components/layout/app";
import Login from "@/components/layout/login";
import Noauth from "@/components/layout/noauth";
import NoFound from "@/components/layout/nofound";
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect push to="/back/index" />} />
      <Route
        component={() => {
          return <App menu />;
        }}
        path="/back"
      />
      <Route component={Login} path="/login" />
      <Route component={Noauth} path="/403" />
      <Route component={NoFound} path="/404" />
    </Switch>
  </Router>
);
