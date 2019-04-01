import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import App from "./app"
import Login from "./login"
import Noauth from "./noauth"
import NoFound from "./nofound"
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect push to="/back/index" />} />
      <Route component={App} path="/back" />
      <Route component={Login} path="/login" />
      <Route component={Noauth} path="/403" />
      <Route component={NoFound} path="/404" />
    </Switch>
  </Router>
)
