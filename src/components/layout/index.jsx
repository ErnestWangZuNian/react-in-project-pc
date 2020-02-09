import { HashRouter, Route, Switch } from 'react-router-dom';
import { AsyncComponent } from 'wzn-base-components';
// const App = AsyncComponent(() => import('./app'));
import App from './app';

const Login = AsyncComponent(() => import('./login'));

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
);
export default Router;
