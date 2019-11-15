import { HashRouter, Route, Switch } from 'react-router-dom';
import { AsyncComponent } from 'wzn-base-components';

const Demo = AsyncComponent(() => import('../pages/demo'));
const App = AsyncComponent(() => import('../pages/app'));

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} when="always" />
      <Route path="/demo" exact component={Demo} when="always" />
    </Switch>
  </HashRouter>
);
export default Router;
