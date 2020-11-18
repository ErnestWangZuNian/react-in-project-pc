/*
 * @Description:
 * @Author: Ernestwang
 * @Date: 2020-02-01 23:01:00
 * @LastEditTime: 2020-11-16 23:29:00
 * @LastEditors: Ernestwang
 */
import Util from '@/utils';
import global from './global.tsx';
import Router from './router/index.tsx';
import 'antd/dist/antd.less';
import './styles/common.scss';

Object.assign(global, antd);
global.Util = Util;

ReactDOM.render(Router, document.getElementById('app'));
