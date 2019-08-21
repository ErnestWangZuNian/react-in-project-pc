import { HashRouter, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
// import asyncComponent from "../components/bundle"
import App from '../pages/app';
import Demo from '../pages/demo';


// const App = asyncComponent(() => import('../pages/app'));
// const Demo = asyncComponent(() => import('../pages/demo'));

const Router = (

  <HashRouter>
    <CacheSwitch>
      <CacheRoute path="/" exact component={App} when="always" />
      <Route path="/demo" exact component={Demo} when="always" />
    </CacheSwitch>


  </HashRouter>


);
export default Router;
