
import Api from './api/index';
// import Util from './utils';

import Router from './routes';
import 'antd/dist/antd.css';

Object.assign(global, antd);
global.Api = Api;
// global.Util = Util;

ReactDOM.render(
  Router,
  document.getElementById('app'),
);
