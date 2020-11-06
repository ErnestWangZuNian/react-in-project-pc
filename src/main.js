import Router from '@components/layout';
import Api from '@/api';
import Util from '@/utils';
import 'antd/dist/antd.css';

require('@/styles/common.scss');

Object.assign(global, antd);
global.Api = Api;
global.Util = Util;

ReactDOM.render(Router, document.getElementById('app'));
