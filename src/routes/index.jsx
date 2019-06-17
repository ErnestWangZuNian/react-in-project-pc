import { HashRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/bundle';

const App = asyncComponent(() => import('../pages/app'));
const Demo = asyncComponent(() => import('../pages/demo/index.tsx'));

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/demo" exact component={Demo} />
    </Switch>
  </HashRouter>
);
export default Router;
