import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/app/index';

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>
);
export default Router;
