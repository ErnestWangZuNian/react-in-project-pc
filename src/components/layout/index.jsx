import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './app';

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>
);
export default Router;
