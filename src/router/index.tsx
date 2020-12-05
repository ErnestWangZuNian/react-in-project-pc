
declare let React;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '@/components/layout/app';

const Router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
export default Router;
