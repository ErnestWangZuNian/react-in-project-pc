import { HashRouter } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import asyncComponent from '../components/bundle';

const App = asyncComponent(() => import('../pages/app'));
const Demo = asyncComponent(() => import('../pages/demo'));

const Router = (
  <HashRouter>
    <CacheSwitch>
      <CacheRoute path="/" exact component={App} when="always" />
      <CacheRoute path="/demo" exact component={Demo} when="always" />
    </CacheSwitch>
  </HashRouter>
);
export default Router;
